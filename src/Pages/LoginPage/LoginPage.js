import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableNativeFeedback,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

import TelaCadastro from '../CadastroPage/index';

import firebase from '../../FireBaseConnection';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import {Fumi} from 'react-native-textinput-effects';

var {height, width} = Dimensions.get('window');

const LoginPage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: responsiveFontSize(3.5),
            marginTop: height * 0.05,
            fontWeight: 'bold',
            fontFamily: 'sans-serif-condensed',
            color:'#000'
          }}>
          Minhas Tarefas
        </Text>
        <View style={styles.ImageBall}>
          <Image
            style={{
              width: width * 0.2,
              height: height * 0.16,
              borderRadius: width / 2,
            }}
            resizeMode="cover"
            source={require('../../Images/tarefas.jpeg')}
          />
        </View>
      </View>
      <Fumi
        style={{marginTop: height * 0.12}}
        label={'E-mail'}
        iconClass={MaterialsIcon}
        iconName={'mail'}
        iconColor={'#4e97d1'}
        iconSize={width * 0.06}
        placeholderTextColor={'#000'}
        clearButtonMode={'always'}
        keyboardType={'email-address'}
      />
      <Fumi
        label={'Senha'}
        iconClass={MaterialsIcon}
        iconName={'https'}
        iconColor={'#4e97d1'}
        iconSize={width * 0.06}
        placeholderTextColor={'#000'}
      />
      <View
        style={{
          width: width * 0.3,
          marginTop: height * 0.08,
          marginBottom: height * 0.01,
          alignSelf: 'center',
        }}>
        <Button title="Login" />
      </View>
      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() => setVisible(true)}>
        <Text style={{textDecorationLine: 'underline'}}>Cadastre-se</Text>
      </TouchableOpacity>
      <TelaCadastro isVisible={visible} />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#77c3ec',
    height: height * 0.3,
    alignItems: 'center',
  },
  ImageBall: {
    backgroundColor: '#fff',
    borderRadius: width / 2,
    width: width * 0.25,
    height: height * 0.15,
    marginTop: height * 0.104,
    alignItems: 'center',
  },
});
