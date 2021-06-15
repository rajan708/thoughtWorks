import * as React from 'react';
import {View, Image, TouchableOpacity, StatusBar} from 'react-native';
import {images, colors, routeName} from '../utils';
import {TextComponent} from './TextComponent';

export const BackArrow = (props) => {
  function backPress() {
    props.navigation.goBack();
  }

  function skipPress() {
    // props.skipPress();
    props.navigation.navigate(routeName.HOME_TAB);
  }

  return (
    <View
      style={{
        margin: 10,
        paddingVertical: 20,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={backPress}
        style={{
          padding: 5,
          width: 50,
          position: 'absolute',
          left: 10,
        }}>
        <Image source={images.leftArrow} />
      </TouchableOpacity>
      {props.skip && (
        <TouchableOpacity
          onPress={skipPress}
          style={{
            padding: 5,
            width: 50,
            position: 'absolute',
            right: 10,
          }}>
          <TextComponent
            style={{
              textAlign: 'center',
              marginVertical: 15,
              color: colors.unFilled,
            }}>
            {'Skip >'}
          </TextComponent>
        </TouchableOpacity>
      )}
    </View>
  );
};
