import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

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
