import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import * as firebase from 'firebase'

/*

assume we are given an ID for foods that are relevant 
*/
export default class FoodCard extends Component{

    constructor(props){
        super(props)

        this.state = {
            foodId : this.props.id,
            data : {title: "test",
                    pic: "test"}
        }
    }

    componentDidMount(){

        console.log("state: " + this.state)
        self = this
        firebase.database().ref("/results/"+this.state.foodId + "/").once('value').then(function(snapshot){
            self.setState({data: snapshot.val()})
        });



        console.log("inputting to data from firebase")
        

    }

    writeInstructions(){
        
    }

    render(props){

        return(
        <Card title= {this.state.data.title}    
            containerStyle={{padding: 0}}
        >
        <Image
            style = {{width:300, height:300}}
            resizeMode="cover"
            source={{uri: 'https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg'} }
        
        />
        <Text style={{marginBottom: 10}}>
            {this.writeInstructions()} Instructions here
        </Text>
        <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='YES' />
        </Card>
        )
    }

}