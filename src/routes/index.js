import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../views/Login';
import Home from '../views/Home';
import Reservar from '../views/Reservar';
import Navbar from '../views/Navbar';
import HistorialDeReservas from '../views/HistorialDeReservas';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => {
              false;
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: props => <Navbar {...props} />}}
        />
        <Stack.Screen name="Reservar" component={Reservar} />
        <Stack.Screen name="Historial" component={HistorialDeReservas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
