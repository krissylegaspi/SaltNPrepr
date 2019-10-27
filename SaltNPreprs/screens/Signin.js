import React, { Component } from 'react';
import FetchExample from '../components/ApiCall'
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  AsyncStorage,
  Alert,
  Form,
  Button,
  Icon,
  Text
} from 'react-native';
import * as firebase from 'firebase';

export default class SignIn() {
  
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
            style={styles.button}
            onPress={ () =>
              {this.googleLogin()
              }
            }
        >
            <Text style={styles.buttonText}>Sign in with Google</Text>
          </TouchableOpacity>
      </ScrollView>
    );
  }
}
  

export const googleLogin = async () => {
  try {
    // Add any configuration settings here:
    await GoogleSignin.configure();

    const data = await GoogleSignin.signIn();

    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
    // login with credential
    const currentUser = await firebase.auth().signInWithCredential(credential);

    console.info(JSON.stringify(currentUser.toJSON()));
  } catch (e) {
    console.error(e);
  }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
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
    button: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center'
    },
  });