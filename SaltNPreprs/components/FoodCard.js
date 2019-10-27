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
            data : null
        }
    }

    componentDidMount(){

        self = this
        firebase.database().ref("/results/"+this.state.foodId + "/").once('value').then(function(snapshot){
            self.setState({data: snapshot.val()})
        });

        console.log("inputting to data to firebase")
        

    }

    writeInstructions(){
        
    }

    render(props){
        <Card title= {this.data.title}
            image={this.state.data.pic}>
            containerStyle={{padding: 0}}
            
        >
        <Text style={{marginBottom: 10}}>
            {this.writeInstructions()}
        </Text>
        <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='YES' />
        </Card>

    }

}