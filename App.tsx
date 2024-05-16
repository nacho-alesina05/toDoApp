/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import { store } from './src/app/store'
import { AppContainer } from './src/navigation'

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </Provider>
  )
}

export default App
