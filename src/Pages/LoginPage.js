import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TouchableNativeFeedback,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

import firebase from '../FireBaseConnection';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome'
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import {Fumi} from 'react-native-textinput-effects';


export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: responsiveFontSize(3.5),
              marginTop: '8%',
              fontWeight: 'bold',
              fontFamily: 'sans-serif-condensed',
            }}>
            Minhas Tarefas
          </Text>
          <View style={styles.ImageBall}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                padding: 10,
                borderRadius: responsiveWidth(12),
              }}
              resizeMode="cover"
              source={require('../Images/tarefas.jpeg')}
            />
          </View>
        </View>
        <Fumi style={{marginTop:'19%'}}
    label={'E-mail'}
    iconClass={MaterialsIcon}
    iconName={'mail'}
    iconColor={'#f4d29a'}
    iconSize={responsiveWidth(5.5)}
  />
          <Fumi
    label={'Senha'}
    iconClass={MaterialsIcon}
    iconName={'https'}
    iconColor={'#f4d29a'}
    iconSize={responsiveWidth(5.5)}
  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#77c3ec',
    height: responsiveHeight(30),
    width: responsiveWidth(100),
    alignItems: 'center',
  },
  ImageBall: {
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(50),
    width: '25%',
    height: '53%',
    marginTop: responsiveHeight(11),
    alignItems: 'center',
  },
});
