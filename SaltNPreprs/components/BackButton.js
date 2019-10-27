import { 
    createAppContainer
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;


export class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation.navigate('Main')};
      return (
        <Button
          title="Back"
          onPress={() => navigate('Main', {name: 'Jane'})}
        //   onPress={()=>{this.handleBackButtonClick.bind(this)}
        />
      );
    }
  }

  