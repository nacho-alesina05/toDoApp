import { Colors } from "./colors";
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'; // Asegúrate de importar el tipo NativeStackNavigationOptions

export const headerStyle: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },
    headerTitle: 'Todo'
}