import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {colors, fontScale, fontName, images} from '../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    title: 'Morning Smoothies',
    time: '45 minutes',
    people: '5 People',
  },
  {
    title: 'Morning Smoothies',
    time: '45 minutes',
    people: '5 People',
  },
  {
    title: 'Morning Smoothies',
    time: '45 minutes',
    people: '5 People',
  },
  {
    title: 'Morning Smoothies',
    time: '45 minutes',
    people: '5 People',
  },
];

export const StoresScreen = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
      <View
        style={{
          height: '20%',
          backgroundColor: colors.primary,
          justifyContent: 'center',
          paddingLeft: 10,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: '50%',
            top: 20,
            paddingHorizontal: 20,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput style={styles.input} placeholder="" />
          <MaterialCommunityIcons name="search" color={'white'} size={25} />
        </View>
        <Text
          style={[
            {
              color: colors.secondary,
              fontSize: fontScale(25),
              fontFamily: fontName.PRIMARY_REGULAR,
              textAlign: 'left',
            },
          ]}>
          Resturents
        </Text>
      </View>
      <View
        style={{
          height: '70%',
          alignItems: 'center',
          justifyContent: 'center',
          // paddingVertical: 0,
          top:'12%',
                    width: '100%',
        }}>
        <ImageBackground
          source={images.food}
          style={{height: '60%', width: '100%'}}>
        
        </ImageBackground>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            // top: '8%',
            justifyContent: 'center',
            height:'80%'
          }}>
          <FlatList
            style={{width: '90%', height: '80%'}}
            data={DATA}
            renderItem={({item, index}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 150,
                  marginTop: 10,
                  width: '100%',
                  borderRadius: 10,
                  overflow: 'hidden',
                }}>
                <ImageBackground
                  resizeMode="cover"
                  source={images.food}
                  style={{
                    height: 150,
                    width: '100%',
                    // padding: 10,
                    backgroundColor: 'white',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 0.2,
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    opacity: 0.9,
                    backgroundColor: colors.textColor,
                  }}>
                  <Text
                    style={{
                      color: colors.secondary,
                      fontSize: fontScale(28),
                      // height: 50,
                      fontFamily: fontName.PRIMARY_BOLD,
                      padding: 10,
                    }}>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      width: '90%',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        color: colors.secondary,
                        fontSize: fontScale(17),
                        // height: 50,
                        fontFamily: fontName.PRIMARY_BOLD,
                      }}>
                      {item.people}
                    </Text>
                    <Text
                      style={{
                        color: colors.secondary,
                        fontSize: fontScale(17),
                        // height: 50,
                        fontFamily: fontName.PRIMARY_BOLD,
                        left: 10,
                      }}>
                      {item.time}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  topContainer: {
    width: '90%',
  },
  input: {
    width: '50%',
    color: 'black',
  },
  image: {
    flex: 1,
    borderRadius: 10,
    opacity: 1.0,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: fontScale(14),
    fontFamily: fontName.PRIMARY_SEMIBOLD,
    textAlign: 'left',
  },
  textBold: {
    color: 'rgb(255, 255, 255)',
    fontSize: fontScale(28),
    fontFamily: fontName.PRIMARY_BOLD,
    textAlign: 'left',
  },
});
