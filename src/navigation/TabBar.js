import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import {Image, StyleSheet, View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '../helpers/size.helper';
import Tickets from '../screens/Tickets/Tickets';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIconStyle: {
          width: '100%',
        },
        tabBarStyle: {
          height: 70,
          backgroundColor: 'transparent',
        },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['#3B1578', '#5172B3', '#FF53C0']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={{height: 70}}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <ImageBackground
                    source={require('../images/focused.png')}
                    style={{
                      height: 80,
                      width: 80,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 30,
                      marginLeft: 15,
                    }}>
                    <Image source={require('../images/Home.png')} />
                  </ImageBackground>
                ) : (
                  // <LinearGradient
                  //   colors={['#3B1578', '#5172B3', '#FF53C0']}
                  //   start={{x: 0, y: 0.5}}
                  //   end={{x: 1, y: 0.5}}
                  //   style={{
                  //     alignItems: 'center',
                  //     justifyContent: 'center',
                  //     marginBottom: 30,
                  //     marginLeft: 15,
                  //     borderRadius: moderateScale(40),
                  //   }}>
                  //   <View
                  //     style={{
                  //       height: moderateScale(80),
                  //       width: moderateScale(80),
                  //       borderRadius: moderateScale(40),
                  //       alignItems: 'center',
                  //       justifyContent: 'center',
                  //       borderWidth: 2,
                  //       borderColor: '#60FFC9',
                  //     }}>
                  //     <Image source={require('../images/Home.png')} />
                  //   </View>
                  // </LinearGradient>
                  <Image source={require('../images/Home.png')} />
                )}
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <ImageBackground
                    source={require('../images/focused.png')}
                    style={{
                      height: 80,
                      width: 80,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 30,
                    }}>
                    <Image source={require('../images/Location.png')} />
                  </ImageBackground>
                ) : (
                  // <LinearGradient
                  //   colors={['#3B1578', '#5172B3', '#FF53C0']}
                  //   start={{x: 0, y: 0.5}}
                  //   end={{x: 1, y: 0.5}}
                  //   style={{
                  //     alignItems: 'center',
                  //     justifyContent: 'center',
                  //     marginBottom: 30,
                  //     borderRadius: moderateScale(40),
                  //   }}>
                  //   <View
                  //     style={{
                  //       height: moderateScale(80),
                  //       width: moderateScale(80),
                  //       borderRadius: moderateScale(40),
                  //       alignItems: 'center',
                  //       justifyContent: 'center',
                  //       borderWidth: 2,
                  //       borderColor: '#60FFC9',
                  //     }}>
                  //     <Image source={require('../images/Location.png')} />
                  //   </View>
                  // </LinearGradient>
                  <Image source={require('../images/Location.png')} />
                )}
              </View>
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <ImageBackground
                    source={require('../images/focused.png')}
                    style={{
                      height: 80,
                      width: 80,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 30,
                    }}>
                    <Image source={require('../images/Ticket.png')} />
                  </ImageBackground>
                ) : (
                  // <LinearGradient
                  //   colors={['#3B1578', '#5172B3', '#FF53C0']}
                  //   start={{x: 0, y: 0.5}}
                  //   end={{x: 1, y: 0.5}}
                  //   style={{
                  //     alignItems: 'center',
                  //     justifyContent: 'center',
                  //     marginBottom: 30,
                  //     borderRadius: moderateScale(40),
                  //   }}>
                  //   <View
                  //     style={{
                  //       height: moderateScale(80),
                  //       width: moderateScale(80),
                  //       borderRadius: moderateScale(40),
                  //       alignItems: 'center',
                  //       justifyContent: 'center',
                  //       borderWidth: 2,
                  //       borderColor: '#60FFC9',
                  //     }}>
                  //     <Image source={require('../images/Ticket.png')} />
                  //   </View>
                  // </LinearGradient>
                  <Image source={require('../images/Ticket.png')} />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Location"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <ImageBackground
                    source={require('../images/focused.png')}
                    style={{
                      height: 80,
                      width: 80,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 30,
                    }}>
                    <Image source={require('../images/Category.png')} />
                  </ImageBackground>
                ) : (
                  // <LinearGradient
                  //   colors={['#3B1578', '#5172B3', '#FF53C0']}
                  //   start={{x: 0, y: 0.5}}
                  //   end={{x: 1, y: 0.5}}
                  //   style={{
                  //     alignItems: 'center',
                  //     justifyContent: 'center',
                  //     marginBottom: 30,
                  //     marginLeft: 15,
                  //     borderRadius: moderateScale(40),
                  //   }}>
                  //   <View
                  //     style={{
                  //       height: moderateScale(80),
                  //       width: moderateScale(80),
                  //       borderRadius: moderateScale(40),
                  //       alignItems: 'center',
                  //       justifyContent: 'center',
                  //       borderWidth: 2,
                  //       borderColor: '#60FFC9',
                  //     }}>
                  //     <Image source={require('../images/Category.png')} />
                  //   </View>
                  // </LinearGradient>
                  <Image source={require('../images/Category.png')} />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Category"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <ImageBackground
                    source={require('../images/focused.png')}
                    style={{
                      height: 80,
                      width: 80,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 30,
                      marginRight: 15,
                    }}>
                    <Image source={require('../images/Profile.png')} />
                  </ImageBackground>
                ) : (
                  <Image source={require('../images/Profile.png')} />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontSize: 14,
  },
});
