import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useReservas from '../../hook/useReservas';

const Reservar = () => {
  const {lugares, setReservas, reservas} = useReservas();

  const hadleAgregarReserva = reserva => {
    Alert.alert('Éxito', 'La reserva fue agregada');
    setReservas([...reservas, reserva]);
  };
  return (
    <ScrollView style={styles.contenedor}>
      {lugares.map((lugar, index) => (
        <View style={styles.tarjeta} key={index}>
          <Image
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignSelf: 'center',
              marginBottom: 10,
            }}
            source={require('../../../assets/condaty.png')}
          />
          <Text
            style={[
              styles.text,
              {textAlign: 'center', marginBottom: 30, fontWeight: 'bold'},
            ]}>
            {lugar.nombre}
          </Text>
          <Text style={styles.text}>
            <Text style={[styles.text, {fontWeight: 'bold', fontSize: 15}]}>
              Tipo:
            </Text>{' '}
            {lugar.tipo}
          </Text>
          <Text style={styles.text}>
            <Text style={[styles.text, {fontWeight: 'bold', fontSize: 15}]}>
              Ubicacion:
            </Text>{' '}
            {lugar.ubicacion}
          </Text>
          <Text style={styles.text}>
            <Text style={[styles.text, {fontWeight: 'bold', fontSize: 15}]}>
              Resumen:
            </Text>{' '}
            {lugar.caracteristicas || lugar.atracciones || lugar.instalaciones || lugar.descripcion}
          </Text>
          <Text style={styles.text}>
            <Text style={[styles.text, {fontWeight: 'bold', fontSize: 15}]}>
              Horarios:
            </Text>{' '}
            {lugar.horario}
          </Text>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity
              onPress={() => {
                hadleAgregarReserva(lugar);
              }}>
              <Text
                style={{
                  color: 'white',
                  backgroundColor: '#1e693e',
                  padding: 7,
                  textAlign: 'center',
                }}>
                Reservar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#3b3b3b',
    height: '100%',
    padding: 20,
  },
  tarjeta: {
    backgroundColor: '#242424',
    marginTop: 7,
    marginBottom: 40,
    padding: 30,
    borderRadius:10
  },
  text: {
    color: 'white',
  },
});

export default Reservar;
