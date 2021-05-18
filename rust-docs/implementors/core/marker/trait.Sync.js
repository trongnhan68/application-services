(function() {var implementors = {};
implementors["autofill"] = [{"text":"impl Sync for UpdatableAddressFields","synthetic":true,"types":[]},{"text":"impl Sync for Address","synthetic":true,"types":[]},{"text":"impl Sync for InternalAddress","synthetic":true,"types":[]},{"text":"impl Sync for UpdatableCreditCardFields","synthetic":true,"types":[]},{"text":"impl Sync for CreditCard","synthetic":true,"types":[]},{"text":"impl Sync for InternalCreditCard","synthetic":true,"types":[]},{"text":"impl Sync for Metadata","synthetic":true,"types":[]},{"text":"impl Sync for STORE_FOR_MANAGER","synthetic":true,"types":[]},{"text":"impl Sync for Store","synthetic":true,"types":[]},{"text":"impl Sync for StoreImpl","synthetic":true,"types":[]},{"text":"impl !Sync for AutofillDb","synthetic":true,"types":[]},{"text":"impl Sync for EncryptorDecryptor","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for EngineConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for ConfigSyncEngine&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for MergeResult&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for IncomingState&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["cli_support"] = [{"text":"impl !Sync for CliFxa","synthetic":true,"types":[]}];
implementors["crashtest"] = [{"text":"impl Sync for CrashTestError","synthetic":true,"types":[]}];
implementors["error_support"] = [{"text":"impl Sync for Backtrace","synthetic":true,"types":[]}];
implementors["ffi_support"] = [{"text":"impl !Sync for ExternError","synthetic":true,"types":[]},{"text":"impl Sync for ErrorCode","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for FfiStr&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for HandleMap&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for HandleError","synthetic":true,"types":[]},{"text":"impl Sync for Handle","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ConcurrentHandleMap&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Sync for ByteBuffer","synthetic":true,"types":[]}];
implementors["fxa_client"] = [{"text":"impl Sync for IncomingDeviceCommand","synthetic":true,"types":[]},{"text":"impl !Sync for Config","synthetic":true,"types":[]},{"text":"impl Sync for RemoteConfig","synthetic":true,"types":[]},{"text":"impl Sync for DeviceLocation","synthetic":true,"types":[]},{"text":"impl Sync for DeviceType","synthetic":true,"types":[]},{"text":"impl Sync for GetDeviceResponse","synthetic":true,"types":[]},{"text":"impl Sync for PushSubscription","synthetic":true,"types":[]},{"text":"impl Sync for CommandFetchReason","synthetic":true,"types":[]},{"text":"impl Sync for Capability","synthetic":true,"types":[]},{"text":"impl Sync for ErrorKind","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl !Sync for FirefoxAccount","synthetic":true,"types":[]},{"text":"impl Sync for FxaError","synthetic":true,"types":[]},{"text":"impl !Sync for FirefoxAccount","synthetic":true,"types":[]},{"text":"impl Sync for AuthorizationInfo","synthetic":true,"types":[]},{"text":"impl Sync for MetricsParams","synthetic":true,"types":[]},{"text":"impl Sync for AccessTokenInfo","synthetic":true,"types":[]},{"text":"impl Sync for ScopedKey","synthetic":true,"types":[]},{"text":"impl Sync for AuthorizationParameters","synthetic":true,"types":[]},{"text":"impl Sync for Device","synthetic":true,"types":[]},{"text":"impl Sync for DeviceType","synthetic":true,"types":[]},{"text":"impl Sync for DevicePushSubscription","synthetic":true,"types":[]},{"text":"impl Sync for DeviceCapability","synthetic":true,"types":[]},{"text":"impl Sync for AccountEvent","synthetic":true,"types":[]},{"text":"impl Sync for IncomingDeviceCommand","synthetic":true,"types":[]},{"text":"impl Sync for SendTabPayload","synthetic":true,"types":[]},{"text":"impl Sync for TabHistoryEntry","synthetic":true,"types":[]},{"text":"impl Sync for AttachedClient","synthetic":true,"types":[]},{"text":"impl Sync for Profile","synthetic":true,"types":[]},{"text":"impl Sync for MigrationState","synthetic":true,"types":[]},{"text":"impl Sync for FxAMigrationResult","synthetic":true,"types":[]}];
implementors["interrupt_support"] = [{"text":"impl Sync for NeverInterrupts","synthetic":true,"types":[]},{"text":"impl Sync for Interrupted","synthetic":true,"types":[]}];
implementors["logins"] = [{"text":"impl Sync for ErrorKind","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for InvalidLogin","synthetic":true,"types":[]},{"text":"impl Sync for Login","synthetic":true,"types":[]},{"text":"impl !Sync for LoginDb","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for LoginStore&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for PasswordStore","synthetic":true,"types":[]},{"text":"impl Sync for PasswordInfo","synthetic":true,"types":[]},{"text":"impl Sync for PasswordInfos","synthetic":true,"types":[]}];
implementors["logins_ffi"] = [{"text":"impl Sync for STORES","synthetic":true,"types":[]}];
implementors["nimbus"] = [{"text":"impl Sync for EnrollmentStatus","synthetic":true,"types":[]},{"text":"impl Sync for NimbusError","synthetic":true,"types":[]},{"text":"impl Sync for RemoteSettingsConfig","synthetic":true,"types":[]},{"text":"impl Sync for AppContext","synthetic":true,"types":[]},{"text":"impl Sync for NimbusClient","synthetic":true,"types":[]},{"text":"impl Sync for EnrolledExperiment","synthetic":true,"types":[]},{"text":"impl Sync for Experiment","synthetic":true,"types":[]},{"text":"impl Sync for FeatureConfig","synthetic":true,"types":[]},{"text":"impl Sync for Branch","synthetic":true,"types":[]},{"text":"impl Sync for BucketConfig","synthetic":true,"types":[]},{"text":"impl Sync for AvailableExperiment","synthetic":true,"types":[]},{"text":"impl Sync for ExperimentBranch","synthetic":true,"types":[]},{"text":"impl Sync for RandomizationUnit","synthetic":true,"types":[]},{"text":"impl Sync for AvailableRandomizationUnits","synthetic":true,"types":[]}];
implementors["nss"] = [{"text":"impl Sync for Operation","synthetic":true,"types":[]},{"text":"impl Sync for Curve","synthetic":true,"types":[]},{"text":"impl Sync for EcKey","synthetic":true,"types":[]},{"text":"impl !Sync for PrivateKey","synthetic":true,"types":[]},{"text":"impl !Sync for PublicKey","synthetic":true,"types":[]},{"text":"impl Sync for ErrorKind","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for HashAlgorithm","synthetic":true,"types":[]},{"text":"impl !Sync for SymKey","synthetic":true,"types":[]},{"text":"impl !Sync for PrivateKey","synthetic":true,"types":[]},{"text":"impl !Sync for PublicKey","synthetic":true,"types":[]},{"text":"impl !Sync for GenericObject","synthetic":true,"types":[]},{"text":"impl !Sync for Context","synthetic":true,"types":[]},{"text":"impl !Sync for Slot","synthetic":true,"types":[]},{"text":"impl !Sync for AlgorithmID","synthetic":true,"types":[]}];
implementors["nss_build_common"] = [{"text":"impl Sync for LinkingKind","synthetic":true,"types":[]},{"text":"impl Sync for NoNssDir","synthetic":true,"types":[]}];
implementors["nss_sys"] = [{"text":"impl !Sync for SECKEYPublicKeyStr","synthetic":true,"types":[]},{"text":"impl !Sync for SECKEYPublicKeyStr_u","synthetic":true,"types":[]},{"text":"impl !Sync for SECKEYPrivateKeyStr","synthetic":true,"types":[]},{"text":"impl Sync for KeyType","synthetic":true,"types":[]},{"text":"impl !Sync for SECKEYRSAPublicKeyStr","synthetic":true,"types":[]},{"text":"impl !Sync for SECKEYDSAPublicKeyStr","synthetic":true,"types":[]},{"text":"impl !Sync for SECKEYPQGParamsStr","synthetic":true,"types":[]},{"text":"impl !Sync for SECKEYDHPublicKeyStr","synthetic":true,"types":[]},{"text":"impl !Sync for SECKEYKEAPublicKeyStr","synthetic":true,"types":[]},{"text":"impl !Sync for SECKEYKEAParamsStr","synthetic":true,"types":[]},{"text":"impl !Sync for SECKEYFortezzaPublicKeyStr","synthetic":true,"types":[]},{"text":"impl !Sync for SECKEYECPublicKeyStr","synthetic":true,"types":[]},{"text":"impl Sync for ECPointEncoding","synthetic":true,"types":[]},{"text":"impl !Sync for CK_GCM_PARAMS_V3","synthetic":true,"types":[]},{"text":"impl !Sync for CK_NSS_HKDFParams","synthetic":true,"types":[]},{"text":"impl !Sync for CK_ATTRIBUTE","synthetic":true,"types":[]},{"text":"impl !Sync for PLArena","synthetic":true,"types":[]},{"text":"impl !Sync for PLArenaPool","synthetic":true,"types":[]},{"text":"impl Sync for SECItemType","synthetic":true,"types":[]},{"text":"impl !Sync for SECItemStr","synthetic":true,"types":[]},{"text":"impl Sync for _SECStatus","synthetic":true,"types":[]},{"text":"impl Sync for PK11Origin","synthetic":true,"types":[]},{"text":"impl Sync for PK11ObjectType","synthetic":true,"types":[]},{"text":"impl !Sync for SECAlgorithmIDStr","synthetic":true,"types":[]},{"text":"impl !Sync for SECOidDataStr","synthetic":true,"types":[]},{"text":"impl Sync for SECSupportExtenTag","synthetic":true,"types":[]},{"text":"impl Sync for SECOidTag","synthetic":true,"types":[]}];
implementors["places"] = [{"text":"impl Sync for AddablePlaceInfo","synthetic":true,"types":[]},{"text":"impl Sync for AddableVisit","synthetic":true,"types":[]},{"text":"impl Sync for RedirectSourceType","synthetic":true,"types":[]},{"text":"impl Sync for SearchParams","synthetic":true,"types":[]},{"text":"impl Sync for MatchReason","synthetic":true,"types":[]},{"text":"impl Sync for SearchResult","synthetic":true,"types":[]},{"text":"impl Sync for ConnectionType","synthetic":true,"types":[]},{"text":"impl !Sync for SyncState","synthetic":true,"types":[]},{"text":"impl Sync for PlacesApi","synthetic":true,"types":[]},{"text":"impl&lt;'api&gt; !Sync for SyncConn&lt;'api&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ErrorKind","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for InvalidPlaceInfo","synthetic":true,"types":[]},{"text":"impl Sync for Corruption","synthetic":true,"types":[]},{"text":"impl Sync for VisitTransitionSet","synthetic":true,"types":[]},{"text":"impl Sync for InvalidVisitType","synthetic":true,"types":[]},{"text":"impl Sync for VisitTransition","synthetic":true,"types":[]},{"text":"impl Sync for BookmarkType","synthetic":true,"types":[]},{"text":"impl Sync for SyncStatus","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for BookmarksEngine&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for BookmarkRecordId","synthetic":true,"types":[]},{"text":"impl Sync for BookmarkRecord","synthetic":true,"types":[]},{"text":"impl Sync for QueryRecord","synthetic":true,"types":[]},{"text":"impl Sync for FolderRecord","synthetic":true,"types":[]},{"text":"impl Sync for LivemarkRecord","synthetic":true,"types":[]},{"text":"impl Sync for SeparatorRecord","synthetic":true,"types":[]},{"text":"impl Sync for BookmarkItemRecord","synthetic":true,"types":[]},{"text":"impl Sync for SyncedBookmarkKind","synthetic":true,"types":[]},{"text":"impl Sync for SyncedBookmarkValidity","synthetic":true,"types":[]},{"text":"impl Sync for GLOBAL_BOOKMARK_CHANGE_COUNTERS","synthetic":true,"types":[]},{"text":"impl !Sync for PlacesDb","synthetic":true,"types":[]},{"text":"impl Sync for GlobalChangeCounterTracker","synthetic":true,"types":[]},{"text":"impl&lt;'conn&gt; !Sync for PlacesTransaction&lt;'conn&gt;","synthetic":true,"types":[]},{"text":"impl Sync for FrecencySettings","synthetic":true,"types":[]},{"text":"impl Sync for PrefixMode","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for HistoryEngine&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for HistoryRecordVisit","synthetic":true,"types":[]},{"text":"impl Sync for HistoryRecord","synthetic":true,"types":[]},{"text":"impl Sync for HistorySyncRecord","synthetic":true,"types":[]},{"text":"impl Sync for ServerVisitTimestamp","synthetic":true,"types":[]},{"text":"impl Sync for NOW","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for ExecuteOnDrop&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for BookmarksMigrationResult","synthetic":true,"types":[]},{"text":"impl Sync for FennecBookmarkType","synthetic":true,"types":[]},{"text":"impl Sync for HistoryMigrationResult","synthetic":true,"types":[]},{"text":"impl Sync for IosBookmarkType","synthetic":true,"types":[]},{"text":"impl Sync for MatchBehavior","synthetic":true,"types":[]},{"text":"impl Sync for SearchBehavior","synthetic":true,"types":[]},{"text":"impl&lt;'search, 'url, 'title, 'tags&gt; Sync for AutocompleteMatch&lt;'search, 'url, 'title, 'tags&gt;","synthetic":true,"types":[]},{"text":"impl Sync for VisitObservation","synthetic":true,"types":[]},{"text":"impl Sync for PublicNode","synthetic":true,"types":[]},{"text":"impl Sync for SEARCH_QUERY","synthetic":true,"types":[]},{"text":"impl Sync for BookmarkRootGuid","synthetic":true,"types":[]},{"text":"impl Sync for BookmarkPosition","synthetic":true,"types":[]},{"text":"impl Sync for FetchDepth","synthetic":true,"types":[]},{"text":"impl Sync for InsertableBookmark","synthetic":true,"types":[]},{"text":"impl Sync for InsertableSeparator","synthetic":true,"types":[]},{"text":"impl Sync for InsertableFolder","synthetic":true,"types":[]},{"text":"impl Sync for InsertableItem","synthetic":true,"types":[]},{"text":"impl Sync for UpdateTreeLocation","synthetic":true,"types":[]},{"text":"impl Sync for UpdatableBookmark","synthetic":true,"types":[]},{"text":"impl Sync for UpdatableSeparator","synthetic":true,"types":[]},{"text":"impl Sync for UpdatableFolder","synthetic":true,"types":[]},{"text":"impl Sync for UpdatableItem","synthetic":true,"types":[]},{"text":"impl Sync for BookmarkNode","synthetic":true,"types":[]},{"text":"impl Sync for SeparatorNode","synthetic":true,"types":[]},{"text":"impl Sync for FolderNode","synthetic":true,"types":[]},{"text":"impl Sync for BookmarkTreeNode","synthetic":true,"types":[]},{"text":"impl Sync for FetchedVisit","synthetic":true,"types":[]},{"text":"impl Sync for FetchedVisitPage","synthetic":true,"types":[]},{"text":"impl Sync for OutgoingInfo","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for ValidatedTag&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for RowId","synthetic":true,"types":[]},{"text":"impl Sync for PageInfo","synthetic":true,"types":[]},{"text":"impl Sync for FetchedPageInfo","synthetic":true,"types":[]},{"text":"impl Sync for HistoryVisitInfo","synthetic":true,"types":[]},{"text":"impl Sync for HistoryVisitInfos","synthetic":true,"types":[]},{"text":"impl Sync for HistoryVisitInfosWithBound","synthetic":true,"types":[]},{"text":"impl Sync for HistoryMetadata","synthetic":true,"types":[]},{"text":"impl Sync for HistoryMetadataList","synthetic":true,"types":[]},{"text":"impl Sync for BookmarkNode","synthetic":true,"types":[]},{"text":"impl Sync for BookmarkNodeList","synthetic":true,"types":[]},{"text":"impl Sync for SearchResultMessage","synthetic":true,"types":[]},{"text":"impl Sync for SearchResultList","synthetic":true,"types":[]},{"text":"impl Sync for TopFrecentSiteInfo","synthetic":true,"types":[]},{"text":"impl Sync for TopFrecentSiteInfos","synthetic":true,"types":[]},{"text":"impl Sync for SearchResultReason","synthetic":true,"types":[]}];
implementors["places_ffi"] = [{"text":"impl Sync for APIS","synthetic":true,"types":[]}];
implementors["protobuf_gen"] = [{"text":"impl Sync for ProtobufOpts","synthetic":true,"types":[]}];
implementors["push"] = [{"text":"impl Sync for PersistedRateLimiter","synthetic":true,"types":[]},{"text":"impl Sync for RegisterResponse","synthetic":true,"types":[]},{"text":"impl Sync for BroadcastValue","synthetic":true,"types":[]},{"text":"impl Sync for ConnectHttp","synthetic":true,"types":[]},{"text":"impl Sync for PushConfiguration","synthetic":true,"types":[]},{"text":"impl Sync for KeyV1","synthetic":true,"types":[]},{"text":"impl Sync for Crypto","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for ErrorKind","synthetic":true,"types":[]},{"text":"impl !Sync for PushDb","synthetic":true,"types":[]},{"text":"impl Sync for PushRecord","synthetic":true,"types":[]},{"text":"impl !Sync for PushManager","synthetic":true,"types":[]},{"text":"impl Sync for DispatchInfo","synthetic":true,"types":[]},{"text":"impl Sync for KeyInfo","synthetic":true,"types":[]},{"text":"impl Sync for SubscriptionInfo","synthetic":true,"types":[]},{"text":"impl Sync for SubscriptionResponse","synthetic":true,"types":[]},{"text":"impl Sync for PushSubscriptionChanged","synthetic":true,"types":[]},{"text":"impl Sync for PushSubscriptionsChanged","synthetic":true,"types":[]}];
implementors["rc_crypto"] = [{"text":"impl&lt;'a&gt; Sync for Aad&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Nonce","synthetic":true,"types":[]},{"text":"impl Sync for OpeningKey","synthetic":true,"types":[]},{"text":"impl Sync for SealingKey","synthetic":true,"types":[]},{"text":"impl Sync for Algorithm","synthetic":true,"types":[]},{"text":"impl Sync for Algorithm","synthetic":true,"types":[]},{"text":"impl Sync for Ephemeral","synthetic":true,"types":[]},{"text":"impl Sync for Static","synthetic":true,"types":[]},{"text":"impl&lt;U&gt; !Sync for KeyPair&lt;U&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for PublicKey","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for UnparsedPublicKey&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;U&gt; !Sync for PrivateKey&lt;U&gt;","synthetic":true,"types":[]},{"text":"impl Sync for InputKeyMaterial","synthetic":true,"types":[]},{"text":"impl Sync for Digest","synthetic":true,"types":[]},{"text":"impl Sync for RcCryptoRemotePublicKey","synthetic":true,"types":[]},{"text":"impl Sync for ErrorKind","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for Signature","synthetic":true,"types":[]},{"text":"impl Sync for SigningKey","synthetic":true,"types":[]},{"text":"impl Sync for VerificationKey","synthetic":true,"types":[]},{"text":"impl Sync for VerificationAlgorithm","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for UnparsedPublicKey&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for RcCryptoLocalKeyPair","synthetic":false,"types":[]}];
implementors["rc_log_ffi"] = [{"text":"impl Sync for LogAdapterState","synthetic":true,"types":[]},{"text":"impl Sync for LogLevel","synthetic":true,"types":[]}];
implementors["sql_support"] = [{"text":"impl !Sync for Conn","synthetic":true,"types":[]},{"text":"impl&lt;'conn&gt; !Sync for UncheckedTransaction&lt;'conn&gt;","synthetic":true,"types":[]},{"text":"impl Sync for SqlInterruptHandle","synthetic":true,"types":[]},{"text":"impl Sync for SqlInterruptScope","synthetic":true,"types":[]},{"text":"impl&lt;'conn&gt; !Sync for MaybeCached&lt;'conn&gt;","synthetic":true,"types":[]},{"text":"impl Sync for QueryPlanStep","synthetic":true,"types":[]},{"text":"impl Sync for QueryPlan","synthetic":true,"types":[]},{"text":"impl&lt;'a, F&gt; Sync for RepeatDisplay&lt;'a, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["sync15"] = [{"text":"impl&lt;T&gt; Sync for BsoRecord&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for EncryptedPayload","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CollectionUpdate&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Sync15ClientResponse&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Sync15StorageClientInit","synthetic":true,"types":[]},{"text":"impl !Sync for Sync15StorageClient","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for Engine&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for CommandStatus","synthetic":true,"types":[]},{"text":"impl Sync for Settings","synthetic":true,"types":[]},{"text":"impl Sync for Command","synthetic":true,"types":[]},{"text":"impl Sync for CollState","synthetic":true,"types":[]},{"text":"impl Sync for CollectionKeys","synthetic":true,"types":[]},{"text":"impl Sync for ErrorKind","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for KeyBundle","synthetic":true,"types":[]},{"text":"impl Sync for GlobalState","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for SetupStateMachine&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ServiceStatus","synthetic":true,"types":[]},{"text":"impl Sync for SyncResult","synthetic":true,"types":[]},{"text":"impl !Sync for MemoryCachedState","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for SyncRequestInfo&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["sync15_traits"] = [{"text":"impl Sync for ApplyResults","synthetic":true,"types":[]},{"text":"impl Sync for IncomingEnvelope","synthetic":true,"types":[]},{"text":"impl Sync for OutgoingEnvelope","synthetic":true,"types":[]},{"text":"impl Sync for PayloadError","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Sync for RecordChangeset&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for ClientData","synthetic":true,"types":[]},{"text":"impl Sync for RemoteClient","synthetic":true,"types":[]},{"text":"impl Sync for DeviceType","synthetic":true,"types":[]},{"text":"impl Sync for CollSyncIds","synthetic":true,"types":[]},{"text":"impl Sync for EngineSyncAssociation","synthetic":true,"types":[]},{"text":"impl Sync for Payload","synthetic":true,"types":[]},{"text":"impl Sync for CollectionRequest","synthetic":true,"types":[]},{"text":"impl Sync for UnacceptableBaseUrl","synthetic":true,"types":[]},{"text":"impl Sync for RequestOrder","synthetic":true,"types":[]},{"text":"impl Sync for ServerTimestamp","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for SyncFailure","synthetic":true,"types":[]},{"text":"impl Sync for EngineIncoming","synthetic":true,"types":[]},{"text":"impl Sync for EngineOutgoing","synthetic":true,"types":[]},{"text":"impl Sync for Engine","synthetic":true,"types":[]},{"text":"impl Sync for Validation","synthetic":true,"types":[]},{"text":"impl Sync for Problem","synthetic":true,"types":[]},{"text":"impl Sync for SyncTelemetry","synthetic":true,"types":[]},{"text":"impl Sync for SyncTelemetryPing","synthetic":true,"types":[]}];
implementors["sync_guid"] = [{"text":"impl Sync for Guid","synthetic":true,"types":[]}];
implementors["sync_manager"] = [{"text":"impl Sync for ErrorKind","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl !Sync for SyncManager","synthetic":true,"types":[]},{"text":"impl Sync for SyncParams","synthetic":true,"types":[]},{"text":"impl Sync for SyncResult","synthetic":true,"types":[]},{"text":"impl Sync for SyncReason","synthetic":true,"types":[]},{"text":"impl Sync for DeviceType","synthetic":true,"types":[]},{"text":"impl Sync for ServiceStatus","synthetic":true,"types":[]}];
implementors["tabs"] = [{"text":"impl Sync for ErrorKind","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for RemoteTab","synthetic":true,"types":[]},{"text":"impl Sync for ClientRemoteTabs","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for TabsEngine&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for TabsStore","synthetic":true,"types":[]},{"text":"impl Sync for ClientTabs","synthetic":true,"types":[]},{"text":"impl Sync for ClientsTabs","synthetic":true,"types":[]},{"text":"impl Sync for RemoteTab","synthetic":true,"types":[]},{"text":"impl Sync for RemoteTabs","synthetic":true,"types":[]}];
implementors["tabs_ffi"] = [{"text":"impl Sync for STORES","synthetic":true,"types":[]}];
implementors["types"] = [{"text":"impl Sync for Timestamp","synthetic":true,"types":[]}];
implementors["viaduct"] = [{"text":"impl Sync for HeaderName","synthetic":true,"types":[]},{"text":"impl Sync for InvalidHeaderName","synthetic":true,"types":[]},{"text":"impl Sync for Header","synthetic":true,"types":[]},{"text":"impl Sync for Headers","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for UnexpectedStatus","synthetic":true,"types":[]},{"text":"impl Sync for Settings","synthetic":true,"types":[]},{"text":"impl Sync for Method","synthetic":true,"types":[]},{"text":"impl Sync for Request","synthetic":true,"types":[]},{"text":"impl Sync for Response","synthetic":true,"types":[]}];
implementors["viaduct_reqwest"] = [{"text":"impl Sync for ReqwestBackend","synthetic":true,"types":[]}];
implementors["webext_storage"] = [{"text":"impl Sync for UsageInfo","synthetic":true,"types":[]},{"text":"impl Sync for QuotaReason","synthetic":true,"types":[]},{"text":"impl Sync for ErrorKind","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for MigrationInfo","synthetic":true,"types":[]},{"text":"impl !Sync for Store","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()