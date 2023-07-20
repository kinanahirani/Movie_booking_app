import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, verticalScale} from '../../helpers/size.helper';
import {Fonts} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const Tickets = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#004381', '#00234D']} style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 25,
          alignItems: 'center',
        }}>
        <StatusBar hidden />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../images/icon-left.png')}
            style={{
              width: moderateScale(44),
              height: moderateScale(44),
              marginLeft: 14,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: Fonts.PoppinsBold,
            color: '#FFFFFF',
            fontSize: 20,
          }}>
          Mobile Ticket
        </Text>
        <TouchableOpacity>
          <Image
            source={require('../../images/nav.png')}
            style={{
              width: moderateScale(44),
              height: moderateScale(44),
              marginRight: 14,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center', marginTop: 20, width: '70%'}}>
        <Text
          style={{
            fontFamily: Fonts.PoppinsRegular,
            color: 'white',
            fontSize: 17,
            textAlign: 'center',
          }}>
          Once you buy a movie ticket simply scan the barcode to acces to your
          movie.
        </Text>
      </View>
      <View style={{flex: 1, overflow: 'hidden'}}>
        <ImageBackground
          source={require('../../images/doctor-strange.png')}
          style={{
            alignSelf: 'center',
            width: moderateScale(250),
            aspectRatio: 200 / 300,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            overflow: 'hidden',
            justifyContent: 'flex-end',
          }}>
          <LinearGradient
            colors={['rgba(255,83,192,0)', 'rgba(255,83,192,1)']}
            style={{height: '50%'}}>
            <LinearGradient
              colors={['#00234D', '#004381']}
              style={{
                height: 70,
                width: 70,
                borderRadius: 70,
                // backgroundColor: '#004381',
                position: 'absolute',
                bottom: -40,
                left: -40,
              }}></LinearGradient>
            <LinearGradient
              colors={['#00234D', '#004381']}
              style={{
                height: 70,
                width: 70,
                borderRadius: 70,
                backgroundColor: '#004381',
                position: 'absolute',
                bottom: -40,
                right: -40,
              }}></LinearGradient>
          </LinearGradient>
        </ImageBackground>
        <ImageBackground
          source={require('../../images/image-bg.png')}
          style={{
            alignSelf: 'center',
            width: moderateScale(250),
            height: moderateScale(120),
            alignItems: 'center',
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            overflow: 'hidden',
          }}>
          <View
            style={{
              borderTopColor: 'black',
              borderTopWidth: 2,
              width: verticalScale(250),
              alignSelf: 'center',
              borderStyle: 'dashed',
            }}
          />
          <LinearGradient
            colors={['#004381', '#00234D']}
            style={{
              height: 70,
              width: 70,
              borderRadius: 70,
              backgroundColor: '#004381',
              position: 'absolute',
              top: -40,
              right: -40,
            }}></LinearGradient>
          <LinearGradient
            colors={['#004381', '#00234D']}
            style={{
              height: 70,
              width: 70,
              borderRadius: 70,
              backgroundColor: '#004381',
              position: 'absolute',
              top: -40,
              left: -40,
            }}></LinearGradient>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#56147A',
                  fontFamily: Fonts.PoppinsSemiBold,
                  fontSize: 13,
                }}>
                Date:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Fonts.PoppinsRegular,
                  fontSize: 13,
                  marginLeft: 2,
                }}>
                June 19
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#56147A',
                  fontFamily: Fonts.PoppinsSemiBold,
                  fontSize: 13,
                  marginLeft: 20,
                }}>
                Time:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Fonts.PoppinsRegular,
                  fontSize: 13,
                  marginLeft: 2,
                }}>
                8 p.m.
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#56147A',
                  fontFamily: Fonts.PoppinsSemiBold,
                  fontSize: 13,
                }}>
                Row:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Fonts.PoppinsRegular,
                  fontSize: 13,
                  marginLeft: 2,
                }}>
                1
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#56147A',
                  fontFamily: Fonts.PoppinsSemiBold,
                  fontSize: 13,
                  marginLeft: 20,
                }}>
                Seats:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Fonts.PoppinsRegular,
                  fontSize: 13,
                  marginLeft: 2,
                }}>
                1, 2
              </Text>
            </View>
          </View>
          <Image
            source={require('../../images/barcode.png')}
            style={{width: 180, height: 48}}
          />
        </ImageBackground>
      </View>
    </LinearGradient>
  );
};

export default Tickets;

const styles = StyleSheet.create({});
