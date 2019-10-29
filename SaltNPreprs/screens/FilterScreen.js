import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  AsyncStorage,
  Alert,
  dismissKeyboard,
  BackHandler,
  FlatList,
} from 'react-native';
import {
  Form,
  Button,
  Icon,
  Text,
} from 'native-base';
import {
    HeaderBackButton,
    createAppContainer,
} from 'react-navigation';
import {
    createStackNavigator,
    FourStack,
    Tabs,
    ProfileStack,
} from 'react-navigation-stack';

import {
    CheckBox,
    ListItem,
    List,
} from 'react-native-elements';


import { MonoText } from '../components/StyledText';
import HomeScreen from './HomeScreen';

// var dismissKeyboard = require('react-native-dismisskeyboard');
// import {
//   dismissKeyboard
// } from 'react-native-dismiss-keyboard';

export default class FilterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        input:'',
        array: [],
        checked: false,
        veganCheck: false,
        vegetarianCheck: false,
        lactoseCheck: false,
        GlutenCheck: false,
        peanutCheck: false,
        calorieCheck: false
      }
      this.handleChangeInput = this.handleChangeInput.bind(this);
      this.saveData = this.saveData.bind(this);
      this.flipCheck = this.flipCheck.bind(this);
    }   

  handleChangeInput = (text) => {

  }

  componentDidMount() {

  }

  saveData() {

  }
  
  flipCheck(checkbox){
    this.setState({checkbox : !checkbox})
    return this.state.checkbox
  }
  render() {

    console.log("reRendered")
    return (
      
      <ScrollView>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.header}>Salt & Prepr</Text>
            <Text style={styles.title}>Check your preferences:</Text>
          </View>
        </View>
      
      
        <CheckBox
            onPress={this.flipCheck}
            style={styles.checkStyle}
            title='Vegan'
            checked={this.state.veganCheck? true : false}
            // onLongPress={this.state.veganCheck? true : false}
            leftText={"CheckBox"}
        />
        <CheckBox
            status={this.state.vegetarianCheck ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ veganCheck: !vegetarianCheck}); }}
            style={styles.checkStyle}
            value={this.state.vegetarianCheck}
            title='Vegetarian'
            checked={this.state.vegetarianCheck}
            leftText={"CheckBox"}
        />
        <CheckBox
            status={this.state.lactoseCheck? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ lactoseCheck: !lactoseCheck}); }}
            style={styles.checkStyle}
            value={this.state.lactoseCheck}
            title='Lactose Intolerance'
            checked={this.state.lactoseCheck}
            leftText={"CheckBox"}
        />
        <CheckBox
            status={this.state.GlutenCheck ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ GlutenCheck: !GlutenCheck}); }}
            style={styles.checkStyle}
            value={this.state.GlutenCheck}
            title='Gluten Free'
            checked={this.state.GlutenCheck}
            leftText={"CheckBox"}
        />
        <CheckBox
            status={this.state.peanutCheck ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ peanutCheck: !peanutCheck}); }}
            style={styles.checkStyle}
            value={this.state.peanutCheck}
            title='Peanut Allergy'
            checked={this.state.peanutCheck}
            leftText={"CheckBox"}
        />
        <CheckBox
            status={this.state.calorieCheck ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ calorieCheck: !calorieCheck}); }}
            style={styles.checkStyle}
            value={this.state.calorieCheck}
            title='<500 Calories'
            checked={this.state.calorieCheck}
            leftText={"CheckBox"}
        />

  
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={ () =>
              {
                this.props.navigation.navigate('ResultsRoute')
              }
            }
            // onKeyPress = {()=>{this.saveData;}}
          >
            <Text style={styles.saveButtonText}>GetResults</Text>
          </TouchableOpacity>
        

          <TouchableOpacity
            style={styles.saveButton}
            onPress={()=>{this.props.navigation.navigate('BackButton')}}
            // onPress={()=>{this.handleBackButtonClick.bind(this)}}
          >
            <Text style={styles.saveButtonText}>Back</Text>
          </TouchableOpacity>

          </View>
      </ScrollView>
    );
    
  }
}


FilterScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const navigationOptions = ({ navigation }) => ({
    headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
})


const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: FilterScreen},
  });
  
const App = createAppContainer(MainNavigator);
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    paddingTop: 20,
    margin: 10,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    paddingTop: 10,
    margin: 10,
  },
  text: {
    fontSize: 25,
  },
  inputContainer: {
    paddingTop: 60,
    margin: 10,
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 10
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

