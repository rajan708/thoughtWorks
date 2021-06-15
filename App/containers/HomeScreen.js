import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Modal,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {colors, fontScale, fontName, images} from '../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons2 from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons3 from 'react-native-vector-icons/MaterialCommunityIcons';

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

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        width: '100%',alignSelf:'center'
      }}>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              height: '70%',
              marginTop: 'auto',
              backgroundColor: 'white',
              borderRadius: 10,
              width: '100%',
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                height: 50,
                width: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'absolute',
                  left: 20,
                  paddingVertical: 10,
                }}>
                <MaterialCommunityIcons2
                  name="chevron-down"
                  color={colors.primary}
                  size={18}
                />
              </View>
              <Text
                style={[
                  {
                    color: colors.primary,
                    fontSize: fontScale(17),
                    fontFamily: fontName.PRIMARY_REGULAR,
                  },
                ]}>
                Ingredients
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}
              style={{
                height: '8%',
                width: '90%',
                borderRadius: 10,
                backgroundColor: colors.primary,
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 50,
              }}>
              <Text
                style={{
                  color: colors.secondary,
                  fontSize: fontScale(17),
                  fontFamily: fontName.PRIMARY_BOLD,
                }}>
                Add to Reminders
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
      <View
        style={{
          height: 70,
          top: '12%',
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'flex-start',
          paddingVertical: 10,backgroundColor:colors.primary,paddingTop:25
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            left: 20,
            paddingVertical: 10,paddingTop:25
          }}>
          <MaterialCommunityIcons2
            name="chevron-left"
            color={'white'}
            size={18}
          />

          <Text
            style={[
              {
                color: colors.secondary,
                fontSize: fontScale(20),
                fontFamily: fontName.PRIMARY_REGULAR,
              },
            ]}>
            Recipes
          </Text>
        </View>
        <Text
            style={[
              {
                color: colors.secondary,
                fontSize: fontScale(20),
                fontFamily: fontName.PRIMARY_REGULAR,
                textAlign:'center'
              },
            ]}>
            Breakfast
          </Text>
        <View
          style={{
            position: 'absolute',
            right: 10,
            alignItems: 'center',
            paddingVertical: 10,paddingTop:25
          }}>
          <MaterialCommunityIcons name="search" color={'white'} size={25} />
        </View>
    
      </View>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          top: '8%',
          justifyContent: 'center',
          // backgroundColor: 'red',
        }}>
        <FlatList
      style={{width:'90%',height:'80%'}}
          data={DATA}
          renderItem={({item, index}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 150,
                marginTop: 10,
                width: '100%',borderRadius:10,overflow:'hidden'
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
                  opacity:0.9,backgroundColor:colors.textColor
                }}>
                <Text
                  style={{
                    color: colors.secondary,
                    fontSize: fontScale(28),
                    // height: 50,
                    fontFamily: fontName.PRIMARY_BOLD,padding:10
                  }}>
                  {item.title}
                </Text>
               <View style={{flexDirection:'row',justifyContent:'flex-start',width:'90%',padding:10}}>
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
                    fontFamily: fontName.PRIMARY_BOLD,left:10
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
export default HomeScreen;
