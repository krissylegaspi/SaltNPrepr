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
  dismissKeyboard
} from 'react-native';
import {
  Form,
  Button,
  Icon,
  Text
} from 'native-base';


import { MonoText } from '../components/StyledText';

// var dismissKeyboard = require('react-native-dismisskeyboard');
// import {
//   dismissKeyboard
// } from 'react-native-dismiss-keyboard';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      array: [],
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  handleChangeInput = (text) => {
    this.setState({input:text});
  }

  componentDidMount() {
    // Jehd
    // AsyncStorage.getItem("key").then((value) => {
    //   this.setState(JSON.parse(value));
    // });
  }

  // saveData = () => {
  //   const {serverName,user} = this.state;
  //   let myArray = this.state.array;
  //   AsyncStorage.setItem('key', JSON.stringify(this.state));
  //   AsyncStorage.mergeItem('key', JSON.stringify(this.state), () => {
  //     AsyncStorage.getItem('key', (err, result) => {
  //       console.log(result);
  //     });
  //   });

  //   alert(serverName + '' + user + ' your data has been saved ');
  // }

  saveData() {
    this.setState({})
    if (this.array == undefined) {
      console.log("empty");
      this.array = this.state.input;
    }
    else {
      this.array += this.state.input;
    }
    this.state.input = '';
    console.log(this.array);
  }

  arrayFunction=(item)=>{
    Alert.alert(item);
  }

  showData = async() => {
    let myArray = await AsyncStorage.getItem('myArray');
    let d = JSON.parse(myArray);
    alert(d.serverName + ' ' + d.user);
 }
  
  
  render() {
    return (
      <ScrollView>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.header}>Salt & Prepr</Text>
          </View>
        </View>
      
      
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Ingredient"
            maxLength={50}
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleChangeInput}
            value={this.state.input}
            ref={input => { this.textInput = input }}
            // style={styles.additionalTextInput}
            multipline={true}
            autoCapitalize="sentences"
            autoCorrect={true}
            returnKeyType="done"
            keyboardType="default"
            // onChangeText={(orderInstructions) => this.setState({orderInstructions})}
          />

          
        </View>

        <View style={styles.inputContainer}>
          <Text>
            {this.array}
          </Text>
        </View>
  
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={ () =>
              {this.saveData()
                this.textInput.clear()
                
                // console.log(this.state.input);
              }
            }
            // onKeyPress = {()=>{this.saveData;}}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        

          <TouchableOpacity
            style={styles.saveButton}
            onPress={this.displayData}
          >
            <Text style={styles.saveButtonText}>Display</Text>
          </TouchableOpacity>

          </View>
      </ScrollView>
    );

    
  }


  
  // saveData() {
  //   let user = 'John Doe';
  //   AsyncStorage.setItem('user', user);
  // }

  // displayData = async () => {
  //   try {
  //     // let user = await AsyncStorage.getItem('user');
  //     let user = this.state.input;
  //     alert(user);
  //   }

    // catch(error) {
    //   alert(error);
    // }


  // }

}

// saveData() {
//   alert('Testing');

// }



HomeScreen.navigationOptions = {
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    paddingTop: 20,
    margin: 10,
    fontWeight: 'bold'
  },
  inputContainer: {
    paddingTop: 60
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
    margin: 5
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
