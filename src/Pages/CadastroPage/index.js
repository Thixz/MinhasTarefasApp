import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {responsiveFontSize} from 'react-native-responsive-dimensions';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import {Kohana} from 'react-native-textinput-effects';

var {height, width} = Dimensions.get('window');

const CadastroPage = props => {
  return (
    <Modal visible={props.isVisible}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: responsiveFontSize(4),
            color: '#000',
            marginTop: height * 0.18,
            marginRight: width * 0.32,
          }}>
          Cadastre-se
        </Text>
        <View style={styles.card}>
          <View style={styles.inputs}>
            <Kohana
              style={{backgroundColor: '#fff'}}
              label={'Nome'}
              iconClass={MaterialsIcon}
              iconName={'person'}
              iconColor={'#89cff0'}
              inputPadding={16}
              labelStyle={{color: '#000'}}
              inputStyle={{color: '#000'}}
              useNativeDriver
            />
            <Kohana
              style={{backgroundColor: '#fff'}}
              label={'Sobrenome'}
              iconClass={MaterialsIcon}
              iconName={'badge'}
              iconColor={'#89cff0'}
              inputPadding={16}
              labelStyle={{color: '#000'}}
              inputStyle={{color: '#000'}}
              useNativeDriver
            />
            <Kohana
              style={{backgroundColor: '#fff'}}
              label={'Email'}
              iconClass={MaterialsIcon}
              iconName={'mail'}
              iconColor={'#89cff0'}
              inputPadding={16}
              labelStyle={{color: '#000'}}
              inputStyle={{color: '#000'}}
              useNativeDriver
            />
            <Kohana
              style={{backgroundColor: '#fff'}}
              label={'Senha'}
              iconClass={MaterialsIcon}
              iconName={'key'}
              iconColor={'#89cff0'}
              inputPadding={16}
              labelStyle={{color: '#000'}}
              inputStyle={{color: '#000'}}
              useNativeDriver
            />
          </View>
        </View>
        <TouchableOpacity style={{alignSelf:'center',marginLeft:width * 0.6,marginTop:height * 0.03}}>
            <View style={styles.button}>
              <FontAwesomeIcon name="arrow-right" size={18} color="#fff" />
            </View>
          </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CadastroPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderRadius: width / 30,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    height: height * 0.48,
  },
  inputs: {
    height: height * 0.4,
    alignItems: 'center',
    marginTop: height * 0.03,
    width: width * 0.6,
    marginRight: width * 0.15,
  },
  button: {
    borderWidth: 1,
    borderRadius: width / 80,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    height: height * 0.065,
    width:width * 0.1,
    backgroundColor: '#89cff0',
    justifyContent:'center',
    alignItems:'center'
  },
});
