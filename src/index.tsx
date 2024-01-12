import {
  NativeModules,
  Platform,
  UIManager,
  requireNativeComponent,
  type ViewStyle,
} from 'react-native';

const { PocNavModule } = NativeModules;

console.log(PocNavModule);

const LINKING_ERROR =
  `The package 'react-native-poc-nav' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type PocNavProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'PocNavView';

export const PocNavView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<PocNavProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export const calculateRoute = (): Promise<string> => {
  return PocNavModule.calculateRoute();
};
