import React, {useState, useRef} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '../../helpers/size.helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../../../assets';
import {useNavigation, useRoute} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

const MAX_DESCRIPTION_LENGTH = 100; // Maximum length of the description to show before truncation

const BookMovie = () => {
  const route = useRoute();
  const carouselRef = useRef(null);
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [colorChangesOnPress, setColorChangesOnPress] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const image=useSelector((state)=>state.reducer.image)

  const [carouselData, setCarouselData] = useState([
    {
      day: 'Fri',
      date: '22',
      time: '17:00',
    },
    {
      day: 'Sat',
      date: '23',
      time: '17:00',
    },
    {day: 'Sun', date: '24', time: '17:00'},
    {day: 'Mon', date: '25', time: '17:00'},
    {day: 'Tue', date: '26', time: '17:00'},
  ]);

  const itemWidth = Dimensions.get('window').width;

  const handleCarouselItemPress = index => {
    setSelectedIndex(index);
    if (carouselRef.current) {
      const updatedCarouselData = [...carouselData]; // Create a copy of the carouselData
      updatedCarouselData[selectedIndex] = carouselData[index]; // Replace the current item with the selected item
      setCarouselData(updatedCarouselData); // Update the carouselData state
      carouselRef.current.snapToItem(index); // Scroll to the selected item
    }
  };

  const handleReservationButtonPress = () => {
    if (selectedIndex !== null) {
      // console.log(route.params.data, selectedData, "..data, selectedData");
      console.log(image,"image");
      const selectedData = carouselData[selectedIndex];
      navigation.navigate('SelectSeats', {
        data: route.params.data,
        selectedDay: selectedData.day,
        selectedDate: selectedData.date,
        selectedTime: selectedData.time,
      });
    }
  };

  const renderCarouselItem = ({item, index}) => {
    const isSelected = index === selectedIndex;
    const isOpened = index === carouselData.length - 1;
    const boxStyle = isOpened ? styles.openedBox : styles.box;
    if (index < 0 || index >= carouselData.length || !item) {
      return null; // Return null or a fallback component for invalid items
    }
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleCarouselItemPress(index)}>
        {isSelected ? (
          <View>
            <ImageBackground
              source={require('../../images/onclick.png')}
              style={{
                height: 100,
                width: 70,
                alignItems: 'center',
                justifyContent: 'center',
                // aspectRatio:3072/1727
              }}>
              <View>
                <Text
                  style={{
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontFamily: Fonts.PoppinsRegular,
                    fontSize: 15,
                  }}>
                  {item.day}
                </Text>
                <Text
                  style={{
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontFamily: Fonts.PoppinsBold,
                    fontSize: 15,
                  }}>
                  {item.date}
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require('../../images/onclick2.png')}
              style={{
                width: 70,
                height: 40,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: Fonts.PoppinsRegular,
                  fontSize: 15,
                }}>
                {item.time}
              </Text>
            </ImageBackground>
          </View>
        ) : (
          <View>
            <ImageBackground
              source={require('../../images/clickwo.png')}
              style={{
                height: 100,
                width: 70,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View>
                <Text
                  style={{
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontFamily: Fonts.PoppinsRegular,
                    fontSize: 15,
                  }}>
                  {item.day}
                </Text>
                <Text
                  style={{
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontFamily: Fonts.PoppinsBold,
                    fontSize: 15,
                  }}>
                  {item.date}
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require('../../images/clickwo2.png')}
              style={{
                width: 70,
                height: 40,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: Fonts.PoppinsRegular,
                  fontSize: 15,
                }}>
                {item.time}
              </Text>
            </ImageBackground>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescriptionText = description => {
    if (!description) return '';
    if (showFullDescription || description.length <= MAX_DESCRIPTION_LENGTH) {
      return description;
    } else {
      return description.slice(0, MAX_DESCRIPTION_LENGTH) + '...';
    }
  };

  return (
    <LinearGradient
      colors={['rgba(19, 11, 43, 1)', '#130B2B']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <ImageBackground
        // source={route.params.img}
        source={image}
        // style={{height: 480, width: '100%'}}
        style={{
          width: '100%',
          height: 480,
          justifyContent: 'flex-end',
        }}>
        <LinearGradient
          colors={['rgba(19, 11, 43, 0)', '#130B2B']}
          style={{height: '100%', top: 460}}></LinearGradient>
          <View style={{ position: 'absolute', top: 0, width: '100%' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 25,
          }}>
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
        </View>
        <View>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontFamily: Fonts.PoppinsBold,
              fontSize: 20,
              marginTop: moderateScale(170),
            }}>
            {/* Doctor Strange */}
            {route.params.data.title}
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontFamily: Fonts.PoppinsRegular,
              fontSize: 17,
            }}>
            {/* In the multiverse of madness */}
            {route.params.data?.subTitle}
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontFamily: Fonts.PoppinsRegular,
              fontSize: 15,
              marginTop: moderateScale(20),
            }}>
            {getDescriptionText(
              route.params.data?.description,
              // 'Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse, including alternate versions of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.',
            )}
          </Text>
          {getDescriptionText(
            route.params.data?.description,
            // 'Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse, including alternate versions of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.',
          ).length > MAX_DESCRIPTION_LENGTH && (
            <TouchableOpacity
              onPress={toggleDescription}
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: Fonts.PoppinsSemiBold,
                  fontSize: 15,
                }}>
                {showFullDescription ? 'show less' : 'read more'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <Text
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            fontFamily: Fonts.PoppinsSemiBold,
            fontSize: 15,
            marginTop: moderateScale(10),
          }}>
          Select data and time
        </Text>
      </ImageBackground>

      <View style={styles.carouselContainer}>
        <Carousel
          // loop
          ref={carouselRef}
          data={carouselData}
          renderItem={renderCarouselItem}
          sliderWidth={itemWidth}
          itemWidth={80}
          layout="default"
        />
      </View>
      {colorChangesOnPress && (
        <TouchableOpacity
          activeOpacity={0.7}
          // onPress={() => navigation.navigate('SelectSeats',{data:route.params.data})}>
              onPress={handleReservationButtonPress}>

          <LinearGradient
            colors={['rgba(255,83,192,1)', 'rgba(255,83,192,0.3)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{
              width: itemWidth - 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20,
              borderRadius: 20,
              height: 60,
              elevation: 5,
              fontWeight: Fonts.PoppinsSemiBold,
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 17}}>Reservation</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

export default BookMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
