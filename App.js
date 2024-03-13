
import { View } from 'react-native';
import styles from './src/Styles/main'
import Header from './src/components/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form/Form';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';

import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import AppLoader from './src/components/AppLoader';


SplashScreen.preventAutoHideAsync();
const butonTab = createBottomTabNavigator();

export default function App() {



  return (
    <Provider store={store}>
      <AppLoader />

      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <butonTab.Navigator screenOptions={{ headerShown: false }}>
            <butonTab.Screen name='List Tasks'
              component={Tasks} options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="list" size={size} color={color} />
                ),
              }} />

            <butonTab.Screen name='Add Task'
              component={Form}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="plus" size={size} color={color} />
                ),
              }} />

          </butonTab.Navigator>
        </View>
      </NavigationContainer>

    </Provider>

  );
}
