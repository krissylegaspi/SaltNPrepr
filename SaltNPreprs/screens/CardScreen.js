import React , {Component} from 'react'
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
    Text,
    Item
  } from 'native-base';

import FoodCard from '../components/FoodCard'
import * as firebase from 'firebase'
export default class CardScreen extends Component{

    constructor(props){
        super(props)
        this.state = {idList : null}
    }

    componentDidMount(){
        self = this
        firebase.database().ref("/user/ids").once('value').then(function(snapshot) {
            self.setState({idList:snapshot.val()})
            
          });

        

        console.log("component successfully mounted")
    }
    render(){

        console.log("rendering")

        return(
            <ScrollView>
                {this.state.idList ? this.state.idList.map((item,key) =>
                    
                    
                    <FoodCard key={key} id={item}/>
                
                       
                ) : null }

                
            </ScrollView>
        )}
}