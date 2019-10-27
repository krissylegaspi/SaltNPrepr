import React, {Component} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button
  } from 'react-native';

// export default class apiCall extends React.Component {
export default class ApiCall extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            loaded: false,
            error: null
        }
    }
    apiKey = 'c95e63677b2c8d5efadb98ac65adf11a';
    apiID = 'fcfaf7f1';
    baseURL = 'https://api.edamam.com/search?'
    getData = (ev)=>{
        let url = this.baseURL + 'q=chicken&app_id='+ this.apiID +'&app_key=' + this.apiKey + '&from=0&to=3&calories=591-722&health=alcohol-free';
        // let h = new Headers();
        // h.append("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",);
        // h.append("x-rapidapi-key", "b8a40f1b07mshcd8c6692e5dfb3ep1cbf10jsnb77bd3b493bf");
        let req = new Request(url, {
            // headers: h,
            method: 'GET'
        });
        fetch(req)
        .then(response=>response.json())
        .then(this.showData)
        .catch()
    }
    showData = (data)=>{
        this.setState({loaded:true});
        console.log(data);
    }
    componentDidMount(){
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(response => response.json())
        // .then((responseJson)=> {
        //     this.setState({
        //     loading: false,
        //     dataSource: responseJson
        //     })
        // })
        // .catch(error=>console.log(error)) //to catch the errors if any
    }
    render() { 
        return (
            <View style={styles.countainer}>
                <Text>
                    API Call:
                </Text>
                <Button title="Get Data" onPress={this.getData} />
                {
                    this.state.data && this.state.data.length > 0 && (
                        this.state.data.map( comment => (
                            <Text key={comment.id} style={styles.txt}>
                                { comment.email }
                            </Text>
                        ))
                    )}
            </View>
        )
    }
 }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
});

// import React, {Component} from 'react';
// import {
//     Image,
//     Platform,
//     ScrollView,
//     StyleSheet,
//     Text,
//     FlatList,
//     ActivityIndicator,
//     TouchableOpacity,
//     View,
//     Button
//   } from 'react-native';


// export default class FetchExample extends React.Component {

//   constructor(props){
//     super(props);
//     this.state ={ isLoading: true}
//   }

//   componentDidMount(){
//     return fetch('https://api.spoonacular.com/recipes/search?query=cheese&number=2')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.movies,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }



//   render(){

//     if(this.state.isLoading){
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }

//     return(
//       <View style={{flex: 1, paddingTop:20}}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//           keyExtractor={({id}, index) => id}
//         />
//       </View>
//     );
//   }
// }