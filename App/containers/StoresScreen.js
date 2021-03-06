import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Modal,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {colors, fontScale, fontName, images} from '../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons2 from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons3 from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    title: '1. Oil the waffle maker.',
  },
  {
    title: '2. Sift the dry ingredients together in a large bowl.',
  },
  {
    title:
      '3. In separate bowl, separate egg whites and beat until stiff peaks form.',
  },
  {
    title:
      '4. Mix together the egg yolks, milk, oil, and vanilla, stir slightly.',
  },
];
const DATA1 = [
  {
    title: 'Salt',
    qty: '1/2 cup',
  },
  {
    title: 'Sugar',
    qty: '1/2 cup',
  },
  {
    title: 'Baking Powder',
    qty: '1/2 cup',
  },
  {
    title: 'Milk',
    qty: '1/2 cup',
  },
];
export const StoresScreen = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        height: '100%',
      }}>
      <Modal
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
                Reservation
              </Text>
            </View>
         
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}
              
              style={{
                height: '10%',
                width: '90%',
                borderRadius: 10,
                backgroundColor: colors.textColor,
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 50,flexDirection:'row',top:10
              }}>
                  <MaterialCommunityIcons2
            name="apple"
            color={'white'}
            size={18}
          />  
              <Text
                style={{
                  color: colors.secondary,
                  fontSize: fontScale(17),
                  fontFamily: fontName.PRIMARY_BOLD,left:5
                }}>
                Pay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ImageBackground
        source={images.food}
        style={{
          height: 200,
          top: '12%',
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'flex-start',
          paddingVertical: 10,
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
            Resturents
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            right: 10,
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <MaterialCommunityIcons name="favorite" color={'white'} size={25} />
        </View>
        <Text
          style={[
            {
              color: colors.secondary,
              fontSize: fontScale(34),
              fontFamily: fontName.PRIMARY_REGULAR,
              position: 'absolute',
              left: 10,
              bottom: 10,
            },
          ]}>
          Gusteau???s
        </Text>
      </ImageBackground>
      <View
        style={{
          height: '10%',
          top: '10%',
          width: '100%',
          backgroundColor: colors.secondary,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 40,
        }}>
        <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
          <MaterialCommunityIcons3
            name="restaurant"
            color={colors.primary}
            size={25}
          />

          <Text
            style={{
              color: colors.primary,
              fontSize: fontScale(10),
              fontFamily: fontName.PRIMARY_BOLD,
            }}>
            6 people
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
          <MaterialCommunityIcons3
            name="restaurant"
            color={colors.primary}
            size={25}
          />

          <Text
            style={{
              color: colors.primary,
              fontSize: fontScale(10),
              fontFamily: fontName.PRIMARY_BOLD,
            }}>
            6 people
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
          <MaterialCommunityIcons
            name="clock"
            color={colors.primary}
            size={25}
          />

          <Text
            style={{
              color: colors.primary,
              fontSize: fontScale(10),
              fontFamily: fontName.PRIMARY_BOLD,
            }}>
            45 minutes
          </Text>
        </View>
      </View>
      <Image
        source={images.maps}
        style={{height: 150, width: '100%', top: '4%'}}
      />
      <TouchableOpacity
      onPress={() => setVisible(true)}
        style={{
          height: '8%',
          top: '7%',
          width: '90%',
          borderRadius: 10,
          backgroundColor: colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: colors.secondary,
            fontSize: fontScale(17),
            fontFamily: fontName.PRIMARY_BOLD,
          }}>
          Make Reservation
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: colors.textColor,
          fontSize: fontScale(17),
          // height: 50,
          top:'10%',paddingHorizontal:10,
          fontFamily: fontName.PRIMARY_BOLD,backgroundColor:'white'
        }}>
        The restaurant was degraded to a 4-star rating after feared food critic
        Anton Ego (possibly deliberately) wrote a scathing review regarding
        Gusteau???s cooking.
      </Text>
    
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
