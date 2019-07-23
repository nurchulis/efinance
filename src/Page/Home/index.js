
import { createStackNavigator } from 'react-navigation'
import Home from './Home';
import Details from './Memory';


export default createStackNavigator({
    Home,
    Details
},{ headerMode: "none" });