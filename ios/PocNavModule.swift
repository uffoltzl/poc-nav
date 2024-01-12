import Foundation

import MapboxDirections
import MapboxCoreNavigation
import MapboxNavigation

@objc(PocNavModule)
class PocNavModule: NSObject {
    
    static var routeResponses : [String: RouteResponse] = [:];
    
    @objc(multiply:withB:withResolver:withRejecter:)
    func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(a*b)
    }
    
    @objc(calculateRouteWithResolver:withRejecter:)
    func calculateRoute(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let origin = CLLocationCoordinate2DMake(37.77440680146262, -122.43539772352648)
        let destination = CLLocationCoordinate2DMake(37.76556957793795, -122.42409811526268)
        let options = NavigationRouteOptions(coordinates: [origin, destination])
        Directions.shared.calculate(options){ (session, result) in
            switch result {
            case .failure(let error):
                reject("calculate route error", error.localizedDescription, nil);
            case .success(let response):
                    let responseId = UUID().uuidString
                    PocNavModule.routeResponses[responseId] = response
                    resolve(responseId)
            }
        }
    }
}
