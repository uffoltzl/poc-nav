import MapboxNavigation

@objc(PocNavViewManager)
class PocNavViewManager: RCTViewManager {
  override func view() -> (NavigationMapView) {
    return NavigationMapView()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
