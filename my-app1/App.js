import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from './screens/ShopScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import CompanyScreen from "./screens/CompanyScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Список компаний' component={ShopScreen} />
                    <Stack.Screen name='Компаний' component={CompanyScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
