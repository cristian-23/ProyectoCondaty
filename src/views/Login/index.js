import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import useUser from '../../hook/useUser';

const Login = ({navigation}) => {
  const {user, setUser, password, setPassword} = useUser();

  const handleLogin = () => {
    if (user.trim().length > 0 && password.trim().length > 0) {
      if (user == 'cristian' && password == 'cristian123') {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'El usuario y contraseña son incorrectos');
        setPassword('');
        setUser('');
      }
    }
  };
  return (
    <View style={styles.contenedor}>
      <View style={styles.imagen}>
        <Image source={require('../../../assets/condaty.png')} />
      </View>
      <View style={styles.fondoLogin}>
        <Text style={styles.text}>Login</Text>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="User"
            onChangeText={text => setUser(text)}
            value={user}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </View>
        <Button style={styles.button} title="Ingresar" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 6,
    marginTop: 4,
    marginBottom: 13,
    fontSize: 16,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#1976D2',
  },
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3c3c3c',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 25,
  },
  fondoLogin: {
    marginLeft: 18,
    marginRight: 18,
    padding: 25,
    height: 290,
    backgroundColor: '#242424',
    borderRadius: 10,
  },
});

export default Login;
