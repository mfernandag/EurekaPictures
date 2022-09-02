import {StyleProp, ViewStyle} from 'react-native';

export interface Icon {
  width?: number | string;
  height?: number | string;
  stroke?: string;
  style?: StyleProp<ViewStyle>;
  fill?: string;
}
