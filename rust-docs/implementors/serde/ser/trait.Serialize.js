(function() {var implementors = {};
implementors["fxa_client"] = [{"text":"impl Serialize for Config","synthetic":false,"types":[]},{"text":"impl Serialize for Capability","synthetic":false,"types":[]},{"text":"impl Serialize for PushSubscription","synthetic":false,"types":[]},{"text":"impl Serialize for DeviceType","synthetic":false,"types":[]},{"text":"impl Serialize for DeviceLocation","synthetic":false,"types":[]},{"text":"impl Serialize for GetDeviceResponse","synthetic":false,"types":[]},{"text":"impl Serialize for ScopedKey","synthetic":false,"types":[]}];
implementors["logins"] = [{"text":"impl Serialize for Login","synthetic":false,"types":[]}];
implementors["nimbus"] = [{"text":"impl Serialize for EnrollmentStatus","synthetic":false,"types":[]},{"text":"impl Serialize for AppContext","synthetic":false,"types":[]},{"text":"impl Serialize for Experiment","synthetic":false,"types":[]},{"text":"impl Serialize for FeatureConfig","synthetic":false,"types":[]},{"text":"impl Serialize for Branch","synthetic":false,"types":[]},{"text":"impl Serialize for BucketConfig","synthetic":false,"types":[]},{"text":"impl Serialize for RandomizationUnit","synthetic":false,"types":[]}];
implementors["nss"] = [{"text":"impl Serialize for Curve","synthetic":false,"types":[]},{"text":"impl Serialize for EcKey","synthetic":false,"types":[]}];
implementors["places"] = [{"text":"impl Serialize for MatchReason","synthetic":false,"types":[]},{"text":"impl Serialize for SearchResult","synthetic":false,"types":[]},{"text":"impl Serialize for VisitTransition","synthetic":false,"types":[]},{"text":"impl Serialize for BookmarkType","synthetic":false,"types":[]},{"text":"impl Serialize for BookmarkRecordId","synthetic":false,"types":[]},{"text":"impl Serialize for BookmarkRecord","synthetic":false,"types":[]},{"text":"impl Serialize for QueryRecord","synthetic":false,"types":[]},{"text":"impl Serialize for FolderRecord","synthetic":false,"types":[]},{"text":"impl Serialize for LivemarkRecord","synthetic":false,"types":[]},{"text":"impl Serialize for SeparatorRecord","synthetic":false,"types":[]},{"text":"impl Serialize for BookmarkItemRecord","synthetic":false,"types":[]},{"text":"impl Serialize for HistoryRecordVisit","synthetic":false,"types":[]},{"text":"impl Serialize for HistoryRecord","synthetic":false,"types":[]},{"text":"impl Serialize for ServerVisitTimestamp","synthetic":false,"types":[]},{"text":"impl Serialize for BookmarksMigrationResult","synthetic":false,"types":[]},{"text":"impl Serialize for HistoryMigrationResult","synthetic":false,"types":[]},{"text":"impl Serialize for VisitObservation","synthetic":false,"types":[]},{"text":"impl Serialize for BookmarkTreeNode","synthetic":false,"types":[]},{"text":"impl Serialize for RowId","synthetic":false,"types":[]}];
implementors["push"] = [{"text":"impl Serialize for BroadcastValue","synthetic":false,"types":[]},{"text":"impl Serialize for KeyV1","synthetic":false,"types":[]}];
implementors["sync15"] = [{"text":"impl&lt;T&gt; Serialize for BsoRecord&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for EncryptedPayload","synthetic":false,"types":[]}];
implementors["sync15_traits"] = [{"text":"impl Serialize for OutgoingEnvelope","synthetic":false,"types":[]},{"text":"impl Serialize for DeviceType","synthetic":false,"types":[]},{"text":"impl Serialize for Payload","synthetic":false,"types":[]},{"text":"impl Serialize for ServerTimestamp","synthetic":false,"types":[]},{"text":"impl Serialize for Event","synthetic":false,"types":[]},{"text":"impl Serialize for SyncFailure","synthetic":false,"types":[]},{"text":"impl Serialize for EngineIncoming","synthetic":false,"types":[]},{"text":"impl Serialize for EngineOutgoing","synthetic":false,"types":[]},{"text":"impl Serialize for Engine","synthetic":false,"types":[]},{"text":"impl Serialize for Validation","synthetic":false,"types":[]},{"text":"impl Serialize for Problem","synthetic":false,"types":[]},{"text":"impl Serialize for SyncTelemetry","synthetic":false,"types":[]},{"text":"impl Serialize for SyncTelemetryPing","synthetic":false,"types":[]}];
implementors["sync_guid"] = [{"text":"impl Serialize for Guid","synthetic":false,"types":[]}];
implementors["tabs"] = [{"text":"impl Serialize for RemoteTab","synthetic":false,"types":[]},{"text":"impl Serialize for ClientRemoteTabs","synthetic":false,"types":[]}];
implementors["types"] = [{"text":"impl Serialize for Timestamp","synthetic":false,"types":[]}];
implementors["webext_storage"] = [{"text":"impl Serialize for MigrationInfo","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()