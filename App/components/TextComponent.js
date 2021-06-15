import * as React from 'react';
import {Text} from 'react-native';
import {colors, fontScale, fontName} from '../utils';

export const TextComponent = (props) => {
  return (
    <Text
      {...props}
      style={[
        {
          color: colors.txtColor,
          fontSize: fontScale(14),
          fontFamily: fontName.PRIMARY_REGULAR,
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};
