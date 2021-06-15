import React from 'react';
import {
  StyleSheet,
  View,
 
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {colors, fontScale, fontName, images} from '../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
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
          <TextInput
            style={styles.input}
            placeholder=""
          />
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
          Recipes
        </Text>
      </View>
      <View
        style={{
          height: '80%',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 20,
          width: '90%',
        }}>
        <TouchableOpacity
          style={{
            height: '48%',
            backgroundColor: 'red',
            width: '100%',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <ImageBackground source={images.food} style={styles.image}>
            <Text style={styles.text}>Start your day right</Text>
            <Text style={styles.textBold}>Breakfast</Text>

          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '48%',
            backgroundColor: 'red',
            width: '100%',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <ImageBackground source={images.food} style={styles.image}>
          <Text style={styles.text}>Power vegetables</Text>
            <Text style={styles.textBold}>Vegetarian</Text>
          </ImageBackground>
        </TouchableOpacity>
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
    justifyContent: 'flex-start',padding:10
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
export default HomeScreen;
