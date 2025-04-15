import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileLuiz from '../pages/ProfileLuiz';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="ProfileLuiz" component={ProfileLuiz} />
        </Stack.Navigator>
    );
}