import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Navbar from '../Navbar';
import useUser from '../../hook/useUser';
import data from '../../../data/index';
import useReservas from '../../hook/useReservas';

const Home = ({navigation}) => {
  const {user} = useUser();
  const {setLugares} = useReservas();
  const handleReservar = lugares => {
    navigation.navigate('Reservar');
    setLugares(lugares);
  };
  return (
    <View>
      <View style={{backgroundColor: '#3b3b3b', height: '100%'}}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 21,
              marginTop: '9%',
              color: 'white',
            }}>
            ¡Hola, {user}!
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#242424',
            alignSelf: 'center',
            borderRadius: 5,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#0eaa44',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: 1,
              textAlign: 'center',
              padding: 9,
            }}>
            Estos son los lugares que puedes reservar
          </Text>
        </View>
        <View style={styles.contenedorTarjetas}>
          {data.map(lugares => (
            <View key={lugares.id} style={styles.tarjeta}>
              <TouchableOpacity onPress={() => handleReservar(lugares.data)}>
                <Image
                  style={styles.image}
                  source={{
                    uri: lugares.img,
                  }}
                />
                <Text style={styles.text}>{lugares.nombre}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 110,
    marginTop: 20,
    borderRadius: 5,
  },
  contenedorTarjetas: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
  tarjeta: {
    backgroundColor: '#242424',
    alignItems: 'center',
    width: '45%',
    borderRadius: 9,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    color: '#A4A4A4',
    marginTop: 15,
    marginBottom: 15,
  },
});
export default Home;
