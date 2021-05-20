**See [the release process docs](docs/howtos/cut-a-new-release.md) for the steps to take when cutting a new release.**

# Unreleased Changes

## Nimbus ☁️🔬

### What's New

- Both Android and iOS gain a `nimbus.getVariables(featureId: String)` and a new wrapper around JSON data coming straight from Remote Settings.
- Application features can only have a maximum of one experiment running at a time.

### What's Changed

- Android and iOS `Branch` objects no longer have access to a `FeatureConfig` object.

## Logins

### ⚠️ Breaking changes ⚠️

Logins now Uniffi-ed!

API Changes for Logins components:

- Login is the main struct moving forward
  - Previously Android had `ServerPassword` and iOS had `LoginRecord`
  - `id` is now a String for consumers but internall we call `guid()` to generate/fetch the value
  - `PasswordStore` is renamed to `LoginStore` and is the consumer facing store
  - The previous `LoginStore` in db.rs is more aptly named `LoginsSyncEngine`
- Throwing exceptions is now done via [likely name change] LoginsStorageErrorException

[Full Changelog](https://github.com/mozilla/application-services/compare/v76.0.1...main)
