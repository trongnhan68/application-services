/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
use crate::db::{LoginDb, LoginsSyncEngine, MigrationMetrics};
use crate::error::*;
use crate::login::Login;
use crate::PasswordInfo;
use std::cell::Cell;
use std::path::Path;
use sync15::{EngineSyncAssociation, MemoryCachedState};

// This store is a bundle of state to manage the login DB and to help the
// SyncEngine.
pub struct PasswordStore {
    pub db: LoginDb,
    pub mem_cached_state: Cell<MemoryCachedState>,
}

impl PasswordStore {
    pub fn new(path: impl AsRef<Path>, encryption_key: &str) -> Result<Self> {
        let db = LoginDb::open(path, Some(encryption_key))?;
        Ok(Self {
            db,
            mem_cached_state: Cell::default(),
        })
    }

    pub fn new_with_salt(path: impl AsRef<Path>, encryption_key: &str, salt: &str) -> Result<Self> {
        let db = LoginDb::open_with_salt(path, encryption_key, salt)?;
        Ok(Self {
            db,
            mem_cached_state: Cell::default(),
        })
    }

    pub fn new_in_memory(encryption_key: Option<&str>) -> Result<Self> {
        let db = LoginDb::open_in_memory(encryption_key)?;
        Ok(Self {
            db,
            mem_cached_state: Cell::default(),
        })
    }

    pub fn list(&self) -> Result<Vec<PasswordInfo>> {
        let logins = self.db.get_all()?.into_iter().map(|x| x.into()).collect();
        Ok(logins)
    }

    pub fn get(&self, id: &str) -> Result<Option<PasswordInfo>> {
        let pass_info = self.db.get_by_id(id)?.unwrap().into();
        Ok(Some(pass_info))
    }

    pub fn get_by_base_domain(&self, base_domain: &str) -> Result<Vec<PasswordInfo>> {
        let logins = self
            .db
            .get_by_base_domain(base_domain)?
            .into_iter()
            .map(|x| x.into())
            .collect();
        Ok(logins)
    }

    pub fn potential_dupes_ignoring_username(
        &self,
        pass_info: PasswordInfo,
    ) -> Result<Vec<PasswordInfo>> {
        let login = pass_info.into();
        let logins = self
            .db
            .potential_dupes_ignoring_username(&login)?
            .into_iter()
            .map(|x| x.into())
            .collect();
        Ok(logins)
    }

    pub fn touch(&self, id: &str) -> Result<()> {
        self.db.touch(id)
    }

    pub fn delete(&self, id: &str) -> Result<bool> {
        self.db.delete(id)
    }

    pub fn wipe(&self) -> Result<()> {
        let scope = self.db.begin_interrupt_scope();
        self.db.wipe(&scope)?;
        Ok(())
    }

    pub fn wipe_local(&self) -> Result<()> {
        self.db.wipe_local()?;
        Ok(())
    }

    pub fn reset(&self) -> Result<()> {
        self.db.reset(&EngineSyncAssociation::Disconnected)?;
        Ok(())
    }

    pub fn update(&self, pass_info: PasswordInfo) -> Result<()> {
        let login: Login = pass_info.into();
        self.db.update(login)
    }

    pub fn add(&self, pass_info: PasswordInfo) -> Result<String> {
        // Just return the record's ID (which we may have generated).
        let login: Login = pass_info.into();
        self.db.add(login).map(|record| record.guid.into_string())
    }

    pub fn import_multiple(&self, pass_infos: Vec<PasswordInfo>) -> Result<MigrationMetrics> {
        let logins: Vec<Login> = pass_infos.into_iter().map(PasswordInfo::into).collect();
        self.db.import_multiple(&logins)
    }

    pub fn disable_mem_security(&self) -> Result<()> {
        self.db.disable_mem_security()
    }

    pub fn rekey_database(&self, new_encryption_key: &str) -> Result<()> {
        self.db.rekey_database(new_encryption_key)
    }

    // This is basically exposed just for sync_pass_sql, but it doesn't seem
    // unreasonable.
    pub fn conn(&self) -> &rusqlite::Connection {
        &self.db.db
    }

    pub fn check_valid_with_no_dupes(&self, pass_info: PasswordInfo) -> Result<()> {
        let login: Login = pass_info.into();
        self.db.check_valid_with_no_dupes(&login)
    }
}

#[cfg(test)]
mod test {
    use super::*;
    //use crate::util;
    //use more_asserts::*;
    //use std::time::SystemTime;
    //use sync_guid::Guid;
    // Doesn't check metadata fields
    // fn assert_logins_equiv(a: &Login, b: &Login) {
    //     assert_eq!(b.guid, a.guid);
    //     assert_eq!(b.hostname, a.hostname);
    //     assert_eq!(b.form_submit_url, a.form_submit_url);
    //     assert_eq!(b.http_realm, a.http_realm);
    //     assert_eq!(b.username, a.username);
    //     assert_eq!(b.password, a.password);
    //     assert_eq!(b.username_field, a.username_field);
    //     assert_eq!(b.password_field, a.password_field);
    // }

    #[test]
    fn test_general() {
        // let store = PasswordStore::new_in_memory(Some("secret")).unwrap();
        // let list = store.list().expect("Grabbing Empty list to work");
        // assert_eq!(list.len(), 0);
        // let start_us = util::system_time_ms_i64(SystemTime::now());

        // let a = Login {
        //     guid: "aaaaaaaaaaaa".into(),
        //     hostname: "https://www.example.com".into(),
        //     form_submit_url: Some("https://www.example.com".into()),
        //     username: "coolperson21".into(),
        //     password: "p4ssw0rd".into(),
        //     username_field: "user_input".into(),
        //     password_field: "pass_input".into(),
        //     ..Login::default()
        // };

        // let b = Login {
        //     // Note: no ID, should be autogenerated for us
        //     hostname: "https://www.example2.com".into(),
        //     http_realm: Some("Some String Here".into()),
        //     username: "asdf".into(),
        //     password: "fdsa".into(),
        //     ..Login::default()
        // };

        // let a_id = store.add(a.clone()).expect("added a");
        // let b_id = store.add(b.clone()).expect("added b");

        // assert_eq!(a_id, a.guid);

        // assert_ne!(b_id, b.guid, "Should generate guid when none provided");

        // let a_from_db = store
        //     .get(&a_id)
        //     .expect("Not to error getting a")
        //     .expect("a to exist");

        // assert_logins_equiv(&a, &a_from_db);
        // assert_ge!(a_from_db.time_created, start_us);
        // assert_ge!(a_from_db.time_password_changed, start_us);
        // assert_ge!(a_from_db.time_last_used, start_us);
        // assert_eq!(a_from_db.times_used, 1);

        // let b_from_db = store
        //     .get(&b_id)
        //     .expect("Not to error getting b")
        //     .expect("b to exist");

        // assert_logins_equiv(
        //     &b_from_db,
        //     &Login {
        //         guid: Guid::from(b_id.as_str()),
        //         ..b.clone()
        //     },
        // );
        // assert_ge!(b_from_db.time_created, start_us);
        // assert_ge!(b_from_db.time_password_changed, start_us);
        // assert_ge!(b_from_db.time_last_used, start_us);
        // assert_eq!(b_from_db.times_used, 1);

        // let mut list = store.list().expect("Grabbing list to work");
        // assert_eq!(list.len(), 2);

        // let mut expect = vec![a_from_db, b_from_db.clone()];

        // list.sort_by(|a, b| b.guid.cmp(&a.guid));
        // expect.sort_by(|a, b| b.guid.cmp(&a.guid));
        // assert_eq!(list, expect);

        // store.delete(&a_id).expect("Successful delete");
        // assert!(store
        //     .get(&a_id)
        //     .expect("get after delete should still work")
        //     .is_none());

        // let list = store.list().expect("Grabbing list to work");
        // assert_eq!(list.len(), 1);
        // assert_eq!(list[0], b_from_db);

        // let list = store
        //     .get_by_base_domain("example2.com")
        //     .expect("Expect a list for this hostname");
        // assert_eq!(list.len(), 1);
        // assert_eq!(list[0], b_from_db);

        // let list = store
        //     .get_by_base_domain("www.example.com")
        //     .expect("Expect an empty list");
        // assert_eq!(list.len(), 0);

        // let now_us = util::system_time_ms_i64(SystemTime::now());
        // let b2 = Login {
        //     password: "newpass".into(),
        //     guid: Guid::from(b_id.as_str()),
        //     ..b
        // };

        // store.update(b2.clone()).expect("update b should work");

        // let b_after_update = store
        //     .get(&b_id)
        //     .expect("Not to error getting b")
        //     .expect("b to exist");

        // assert_logins_equiv(&b_after_update, &b2);
        // assert_ge!(b_after_update.time_created, start_us);
        // assert_le!(b_after_update.time_created, now_us);
        // assert_ge!(b_after_update.time_password_changed, now_us);
        // assert_ge!(b_after_update.time_last_used, now_us);
        // // Should be two even though we updated twice
        // assert_eq!(b_after_update.times_used, 2);
    }

    #[test]
    fn test_rekey() {
        let store = PasswordStore::new_in_memory(Some("secret")).unwrap();
        store.rekey_database("new_encryption_key").unwrap();
        let list = store.list().expect("Grabbing Empty list to work");
        assert_eq!(list.len(), 0);
    }
}

#[test]
fn test_send() {
    fn ensure_send<T: Send>() {}
    ensure_send::<PasswordStore>();
}
