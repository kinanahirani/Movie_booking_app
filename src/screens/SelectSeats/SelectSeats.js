import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  ScrollView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/size.helper';
import {Fonts} from '../../../assets';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const SelectSeats = ({navigation}) => {
  const route = useRoute();
  const day = useSelector(state => state.reducer.day);
  const date = useSelector(state => state.reducer.date);
  const time = useSelector(state => state.reducer.time);
  const showTime = `April ${date}, 2022`;
  console.log(route.params, '..route.params');
  const generateSeats = () => {
    let numRow = 8;
    let numColumn = 3;
    let rowArray = [];
    let start = 1;
    let reachnine = false;
    for (let i = 0; i < numRow; i++) {
      let columnArray = [];
      for (let j = 0; j < numColumn; j++) {
        let seatObject = {
          number: start,
          taken: Boolean(Math.round(Math.random())),
          selected: false,
        };
        columnArray.push(seatObject);
        start++;
      }
      if (i == 3) {
        numColumn += 2;
      }
      if (numColumn < 9 && !reachnine) {
        numColumn += 2;
      } else {
        reachnine = true;
        numColumn -= 2;
      }
      rowArray.push(columnArray);
    }
    return rowArray;
  };
  const [twoDSeatArray, setTwoDSeatArray] = useState(generateSeats());
  const [selectedSeatArray, setSelectedSeatArray] = useState([]);
  const [price, setPrice] = useState(0);
  const [selectedSeats, setSelectedSeats]=useState("None")

  useEffect(() => {
    setSelectedSeats(
      selectedSeatArray.length > 0
        ? selectedSeatArray.map(seat => ` ${seat}`).join(', ')
        : 'None'
    );
  }, [selectedSeatArray]);

  // console.log(JSON.stringify(twoDSeatArray, null, 2), 'twoD');

  const selectSeat = (index, subindex, num) => {
    if (!twoDSeatArray[index][subindex].taken) {
      let array = [...selectedSeatArray];
      let temp = [...twoDSeatArray];
      temp[index][subindex].selected = !temp[index][subindex].selected;
      if (!array.includes(num)) {
        array.push(num);
        setSelectedSeatArray(array);
      } else {
        const tempIndex = array.indexOf(num);
        if (tempIndex > -1) {
          array.splice(tempIndex, 1);
          setSelectedSeatArray(array);
        }
      }
      setPrice(array.length * 5);
      setTwoDSeatArray(temp);
    }
  };

  return (
    <LinearGradient
      colors={['rgba(46, 19, 113, 1)', 'rgba(19, 11, 43, 1)']}
      style={{flex: 1}}>
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
          Choose Seats
        </Text>
        <TouchableOpacity>
          <Image
            source={require('../../images/calendar.png')}
            style={{
              width: moderateScale(44),
              height: moderateScale(44),
              marginRight: 14,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: horizontalScale(55),
        }}>
        <Image
          source={require('../../images/theatre.png')}
          style={{width: '95%', height: moderateScale(60)}}
        />
      </View>
      <View style={{marginVertical: 20}}>
        <View style={{gap: 20}}>
          {twoDSeatArray.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}>
                {item?.map((subitem, subindex) => {
                  return (
                    <TouchableOpacity
                      key={subitem.number}
                      activeOpacity={0.7}
                      onPress={() =>
                        selectSeat(index, subindex, subitem.number)
                      }>
                      {subitem.taken ? (
                        <Image
                          source={require('../../images/booked.png')}
                          style={{width: 30, height: 22}}
                        />
                      ) : subitem.selected ? (
                        <Image
                          source={require('../../images/selected.png')}
                          style={{width: 30, height: 22}}
                        />
                      ) : (
                        <Image
                          source={require('../../images/available.png')}
                          style={{width: 30, height: 22}}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Image
              source={require('../../images/white-dot.png')}
              style={{width: 10, height: 10, marginRight: 10, marginBottom: 3}}
            />
            <Text
              style={{
                fontFamily: Fonts.PoppinsRegular,
                color: '#FFFFFF',
                textAlign: 'center',
                marginRight: 20,
              }}>
              Available
            </Text>
            <Image
              source={require('../../images/pink-dot.png')}
              style={{width: 10, height: 10, marginRight: 10, marginBottom: 3}}
            />
            <Text
              style={{
                fontFamily: Fonts.PoppinsRegular,
                color: '#FFFFFF',
                marginRight: 20,
              }}>
              Reserved
            </Text>
            <Image
              source={require('../../images/green-dot.png')}
              style={{width: 10, height: 10, marginRight: 10, marginBottom: 3}}
            />
            <Text
              style={{
                fontFamily: Fonts.PoppinsRegular,
                color: '#FFFFFF',
                marginRight: 20,
              }}>
              Selected
            </Text>
          </View>

          <LinearGradient
            colors={['#3B1578', '#5172B3', '#FF53C0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{
              width: Dimensions.get('window').width,
              height: verticalScale(200),
              flexDirection: 'row',
            }}>
              {/* <ScrollView> */}
            <View>
              <View style={{marginLeft: 30, marginTop: 30}}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../images/calendar1.png')}
                    style={{width: 18, height: 20}}
                  />
                  <Text
                    style={{
                      fontFamily: Fonts.PoppinsRegular,
                      color: 'white',
                      marginLeft: 10,
                    }}>
                    {showTime}
                  </Text>
                  <Image
                    source={require('../../images/white-dot.png')}
                    style={{
                      width: 6,
                      height: 6,
                      marginHorizontal: 10,
                      marginTop: 6,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: Fonts.PoppinsRegular,
                      color: 'white',
                    }}>
                    {time}
                  </Text>
                </View>

                <View style={{flexDirection: 'row', marginVertical: 20}}>
                  <Image
                    source={require('../../images/ticket1.png')}
                    style={{width: 18, height: 20}}
                  />
                  <Text
                    style={{
                      fontFamily: Fonts.PoppinsRegular,
                      color: 'white',
                      marginLeft: 10,
                    }}>
                    VIP Section
                  </Text>
                  <Image
                    source={require('../../images/white-dot.png')}
                    style={{
                      width: 6,
                      height: 6,
                      marginHorizontal: 10,
                      marginTop: 6,
                    }}
                  />
                  <View style={{width:130}}>
                  <Text
                    style={{
                      fontFamily: Fonts.PoppinsRegular,
                      color: 'white',
                    }}>
                    Seat: {selectedSeats}
                    {/* {selectedSeatArray.slice(1, 4).map((item, index, arr) => {
                      return item + (index + arr.length - 1 ? '' : ',');
                    })} */}
                  </Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../images/cart.png')}
                    style={{width: 18, height: 20}}
                  />
                  <Text
                    style={{
                      fontFamily: Fonts.PoppinsRegular,
                      color: 'white',
                      marginLeft: 10,
                    }}>
                    Total: ${price}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                marginTop: 40,
                marginLeft: 'auto',
                backgroundColor: '#2E1371',
                height: 100,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: 100,
                borderBottomLeftRadius: 100,
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('Tickets', {data: route.params.data})
                }>
                <Image
                  source={require('../../images/buy.png')}
                  style={{height: 70, width: 70}}
                />
              </TouchableOpacity>
            </View>
            {/* </ScrollView> */}
          </LinearGradient>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SelectSeats;

const styles = StyleSheet.create({});
