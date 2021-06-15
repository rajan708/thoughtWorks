import * as React from 'react';
import { View, TouchableOpacity ,Image} from 'react-native';
import { colors, fontName, fontScale,images } from '../utils';
import { TextComponent } from './TextComponent';
import { color } from 'react-native-reanimated';


export const ButtonComponent = (props) => {
  function backgroundColor (props){
    let data = null;
    if (props.unFilled){
    data = [colors.lightButton, colors.lightButton];
    }
    else if (props.red ){
    data=[colors.redButton, colors.redButton];
    }
    else if (props.green ){
      data=[colors.greenButton, colors.greenButton];
      }
    else {
    data= [colors.homeDarkBlue, colors.homeLightBlue];
    
    }
    return data;
    }
  return (
    <View
     
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        width: '100%',
        flexDirection: 'row',

      }}>
      <TouchableOpacity
        style={[
          {
            width: '100%',
            alignSelf: 'center',
            backgroundColor: 'transparent',
            padding: 15,
            borderRadius: 20,
            alignItems:'center',
            justifyContent:'center',
            flexDirection: props.arrow ? 'row' : 'column'
            // borderColor: props.unFilled ? colors.unFilled : colors.primary,
            // borderWidth: 1,
          },
          props.style,
        ]}
        {...props}>
            {props.leftArrow && <Image
          style={{marginLeft:10,position:'absolute',left:10,marginRight:10,  transform: [{ rotate: '0deg', }]}}
          
          source={images.wideArrow}
        /> }
        <TextComponent
          style={{
            alignSelf: 'center',
            fontFamily: props.unFilled
              ? fontName.PRIMARY_MEDIUM
              : fontName.PRIMARY_SEMIBOLD,
            color: props.unFilled ? colors.secondary : colors.secondary,
            fontSize: fontScale(16),
          }}>
          {props.name}
        </TextComponent>
       {props.arrow && <Image
          style={{marginRight:10,position:'absolute',right:10,marginLeft:10,  transform: [{ rotate: '180deg', }]}}
          
          source={images.wideArrow}
        /> }
          {props.tick && <Image
          style={{marginRight:10,position:'absolute',right:10,marginLeft:10,  transform: [{ rotate: '0deg', }]}}
          
          source={images.tick}
        /> }
      </TouchableOpacity>
    </View>
  );
};
