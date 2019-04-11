import HomeScreen from './components/Home';
import DetailsScreen from './components/DetailsScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen
}, {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#900020',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

export default createAppContainer(AppNavigator);