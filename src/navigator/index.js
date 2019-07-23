import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Splash from '../App'
import Splash2 from '../Page/Register'
import Splashs from '../Page/Splash'
const App = createSwitchNavigator(
  {
    Splash: Splash,
    Ini: Splash2,
    Splashs: Splashs
  },
  {
    initialRouteName: 'Splashs'
  }
)

export default createAppContainer(App)