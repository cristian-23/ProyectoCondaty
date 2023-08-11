import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import useReservas from '../hook/useReservas';

const HistorialDeReservas = ({navigation}) => {
  const {reservas} = useReservas();
  return (
    <ScrollView style={styles.contenedor}>
      <Text
        style={[
          styles.text,
          {fontSize: 19, textAlign: 'center', marginBottom: 10, marginTop: 10},
        ]}>
        Estas son tus reservas 🥳
      </Text>
      {reservas.map((reserva, index) => (
        <View style={styles.tarjeta} key={index}>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <View>
              <Text style={styles.text}>{reserva.nombre}</Text>
            </View>
            <View>
              <Text style={{color: '#0eaa44'}}>Reservado</Text>
            </View>
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
    padding: 10,
  },
  tarjeta: {
    backgroundColor: '#242424',
    padding: 17,
    marginTop: 15,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HistorialDeReservas;
