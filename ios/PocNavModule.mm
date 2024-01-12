#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(PocNavModule, NSObject)

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

_RCT_EXTERN_REMAP_METHOD(calculateRoute, calculateRouteWithResolver:(RCTPromiseResolveBlock)resolve withRejecter:(RCTPromiseRejectBlock)reject, NO)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
