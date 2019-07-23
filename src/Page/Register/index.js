import { createSwitchNavigator,createStackNavigator } from 'react-navigation'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

export default createStackNavigator({
    Form1,
    Form2,
    Form3
},{
	 navigationOptions: params => ({
    gesturesEnabled: true,
    gesturesDirection: 'inverted',
  }),
});

