import * as React from 'react';
import {View, TouchableOpacity, Image, StatusBar} from 'react-native';
import {colors, fontName, fontScale, images, routeName} from '../utils';
import {TextComponent} from './TextComponent';

export const Header = ({navigation, ...props}) => {
  console.log('pprops', props);
  return (
    <View
      {...props}
      style={{
        flexDirection: 'row',
        backgroundColor: colors.primary,
        width: '100%',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 80,
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingBottom: '4%',
        }}>
        {
          <TouchableOpacity
            onPress={() => {
              props.address
                ? navigation.navigate(routeName.LOGIN)
                : props.noClick == true
                ? console.log('HELP')
                : navigation.goBack();
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              left: 0,
              bottom: '7%',
              position: 'absolute',
              height: 40,
              width: 40,
            }}>
            <Image
              style={{
                height: 17,
                width: 10,
              }}
              source={images.backIcon}
            />
          </TouchableOpacity>
        }
        <TextComponent
          style={[
            {
              color: colors.secondary,
              fontSize: fontScale(20),
              fontFamily: fontName.PRIMARY_BOLD,
            },
          ]}>
          {props.name}
        </TextComponent>
      </View>
    </View>
  );
};
