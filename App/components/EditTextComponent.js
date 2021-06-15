import React, {useState} from 'react';
import {View, TextInput, Platform, Image} from 'react-native';
import {colors, fontScale, fontName, images} from '../utils';
import {TextComponent} from './TextComponent';

export const EditTextComponent = (props) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: props.blank ? colors.secondary : colors.editTextBg,
        borderRadius: 25,
        marginVertical: 5,
        borderColor: colors.borderColor,
        borderWidth: 0.5,
      }}>
      {props.isNumber ? (
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: Platform.OS === 'ios' ? 10 : 0,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              alignItems: 'center',
              borderRightWidth: 0.5,
              borderRightColor: colors.semiText,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TextComponent
              style={{
                fontSize: fontScale(17),
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              🇻🇳
            </TextComponent>
            <Image style={{marginRight: 10}} source={images.icDropDown} />
          </View>
          <TextComponent
            style={{
              fontSize: fontScale(17),
              alignSelf: 'center',
              marginHorizontal: 10,
            }}>
            +84
          </TextComponent>
          <TextInput
            ref={props.getRef}
            {...props}
            placeholderTextColor={
              props.black ? colors.textColor : colors.placeHolderText
            }
            style={[
              {
                fontSize: fontScale(17),
                color: colors.secondary,
                fontFamily: fontName.PRIMARY_REGULAR,
              },
              props.style,
            ]}
          />
        </View>
      ) : (
        <View
          style={[
            {
              paddingHorizontal: 10,
              paddingVertical: Platform.OS === 'ios' ? 10 : 0,
              justifyContent: 'center',
            },
            props.viewStyle,
          ]}>
          <TextInput
            ref={props.getRef}
            {...props}
            placeholderTextColor={
              props.black ? colors.textColor : colors.placeHolderText
            }
            style={[
              {
                fontSize: fontScale(14),
                color: colors.primary,
                height: 40,
                fontFamily: fontName.PRIMARY_REGULAR,
              },
              props.style,
            ]}
          />
        </View>
      )}
    </View>
  );
};
