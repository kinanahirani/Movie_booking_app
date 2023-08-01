import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {movies} from '../../helpers/dummy.movies';
import { addImage } from '../../redux/action';
import { useDispatch } from 'react-redux';

const Home = () => {
  const navigation = useNavigation();
  const dispatch=useDispatch();

  const handlePress = (item) => {
    navigation.navigate('BookMovie', {
      // img: item.img,
      data: item,
    });
    dispatch(addImage(item.img));
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{marginRight: 20}}
      onPress={()=>handlePress(item)}>
      <Image source={item.img} style={styles.movieImage} />
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#00234D', '#004381']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.buttonTxt}>Choose Movie</Text>
      <View style={{marginRight: 20, marginTop: 24}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            backgroundColor: 'rgba(118, 118, 128, 0.1)',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../images/magnifyingglass.png')}
              style={{marginLeft: 8}}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
              style={{marginLeft: 6}}
            />
          </View>
          <Image
            source={require('../../images/microphone.png')}
            style={{marginRight: 8}}
          />
        </View>
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 20, marginTop: 20}}>
          <Text style={styles.sectionTitle}>Now Playing</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />

        <View style={{marginBottom: 20, marginTop: 20}}>
          <Text style={styles.sectionTitle}>Coming Soon</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />

        <View style={{marginBottom: 20, marginTop: 20}}>
          <Text style={styles.sectionTitle}>Top Movies</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          style={{marginBottom:20}}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
  },
  buttonTxt: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.PoppinsBold,
    margin: 12,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    fontFamily: Fonts.PoppinsSemiBold,
    color: '#FFFFFF',
    fontSize: 17,
  },
  movieImage: {
    width: 100,
    height: 130,
    borderRadius: 20,
  },
});
