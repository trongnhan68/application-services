### Pull Request checklist ###
<!-- Before submitting the PR, please address each item -->
- [ ] **Quality**: This PR builds and tests run cleanly
  - Note:
    - Consider running `automation/all_tests.sh` to execute these tests locally.
    - For changes that need extra cross-platform testing, consider adding `[ci full]` to the PR title.
  - Run smoke tests for iOS, android-components, and fenix to ensure the release will integrate cleanly with key downstream consumers
    - Run the `./automation/smoke-test-firefox-ios.py` script to test integration with Firefox for iOS.
    - Run the `./automation/smoke-test-android-components.py` script to test integration with Android Components.
    - Run the `./automation/smoke-test-fenix.py` script to test integration with Fenix.
    - Note: If these tests fail, it may indicate a breaking change
      - Check that such a change has been previously identified and is called out in either [CHANGES_UNRELEASED.md](../CHANGES_UNRELEASED.md) or [CHANGELOG.md](../CHANGELOG.md)
      - If this pull request is the origin of the breaking change, [cut a new release](https://github.com/mozilla/application-services/blob/main/docs/howtos/cut-a-new-release.md) after merging
  - Consider building and running the [sync sample app](https://github.com/mozilla-mobile/android-components/tree/master/samples/sync) in android-components
      against your local changes using the [local publishing flow](./locally-published-components-in-fenix.md).
- [ ] **Tests**: This PR includes thorough tests or an explanation of why it does not
- [ ] **Changelog**: This PR includes a changelog entry in [CHANGES_UNRELEASED.md](../CHANGES_UNRELEASED.md) or an explanation of why it does not need one
  - Any breaking changes to Swift or Kotlin binding APIs are noted explicitly
- [ ] **Dependencies**: This PR follows our [dependency management guidelines](https://github.com/mozilla/application-services/blob/main/docs/dependency-management.md)
  - Any new dependencies are accompanied by a summary of the due dilligence applied in selecting them.
