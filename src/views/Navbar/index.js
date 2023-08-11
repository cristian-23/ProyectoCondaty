import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Navbar = ({navigation}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const hadleHistorialDeCompras = () => {
    navigation.navigate('Historial');
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
      }}>
      <TouchableOpacity onPress={toggleMenu}>
        <Icon
          style={{color: 'white'}}
          size={40}
          name={isMenuOpen ? 'close' : 'menu'}
        />
      </TouchableOpacity>
      <Image
        style={{width: '10%', aspectRatio: 1, height: '30%'}}
        source={require('../../../assets/condaty.png')}
      />
      {isMenuOpen && (
        <View
          style={{
            position: 'absolute',
            top: 60,
            right: 221,
            backgroundColor: 'black',
          }}>
          {/* Aquí puedes agregar tus elementos de menú */}
          <TouchableOpacity
            style={{padding: 20}}
            onPress={hadleHistorialDeCompras}>
            <Text style={{color: '#1e693e'}}>Historia De Reservas</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Navbar;
