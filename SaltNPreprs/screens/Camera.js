import React , {Component} from 'react'
import {View, Text} from 'react-native';
import {Camera, Permissions} from 'expo'



export default class myCamera extends Component{

    constructor(props){
        super(props)
        var camera = null;
        this.state = {

            hasCameraPermission : null
        }
    }

    async componentDidMount(){
        const camera = await Permissions.askAsync(Permission.Camera);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({ hasCameraPermission });
    };
    

    render(){

        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <View>
                <Camera
                    style={styles.preview}
                    ref={camera => this.camera = camera}
                />
            </View>
        );
    }

}