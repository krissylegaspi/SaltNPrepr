import React, {Component} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    Slider
    } from 'react-native';
    import * as firebase from 'firebase';

    const API_KEY = 'apiKey=2fd21f9191204bf9a4bc00bc3aae813f';
    const BASEURL = 'https://api.spoonacular.com/recipes/findByIngredients';

  // export default class apiCall extends React.Component {
export default class ApiCall extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            loaded: false,
            error: null,
            results: [],
            finished: false
        }
    }

    showData = (data)=>{
        this.setState({loaded:true, data});
        console.log(this.state.data);

        // let obj = JSON.parse(this.state.data);
        // console.log(data);
        // this.setState({foodInfo:obj})

    }

    //Gets all receipes using these ingredients

    
    getRecipes = async (ev)=>{
        
        var obj;
        self = this;
        // ingr1 = "chicken";
        // ingr2 = "peas"
        // console.log("state:",this.state.results);
        self = this
        await firebase.database().ref("/user/foodItems").once('value').then(function(snapshot){
            var val = snapshot.val()
            console.log(val)
            self.setState({queryList: val})

        });
        let url = BASEURL + '?ingredients=';
        let ingredients = this.state.queryList;
        for(i = 0; i < ingredients.length; i++) {
            url += ingredients[i] += ',+'
        }
        url += '&0number=30&' + API_KEY;
        console.log(url);
        // let url = BASEURL + '?ingredients=' + ingr1 + ',+' + ingr2 + ',+' + '&0number=10&' + API_KEY;
        
        let req = new Request(url, {
            method: 'GET'
        });
        await fetch(req)
        .then(response=>response.json())
        .then(
            this.showData)
 
        .catch()
        // console.log(this.state.data)
        this.getResults();
    }
    
    // Gets viable recipes
    getResults() {
        let list = this.state.data
        let idList = []
        let results = []
        // console.log(list[0].missedIngredientCount);
        for (i = 0; i < list.length; i++) {
            if (list[i].missedIngredientCount < 5) { //change to 0
                console.log("adding ", list[i].title)
                idList.push(list[i].id)
                results.push(list[i])
                this.getInstructions(list[i].id,list[i].title,list[i].image)
            }
        }
        this.state.data = results;
        console.log(this.state.data)
        firebase.database().ref('/user/').update({ids:idList})
        this.state.finished = true;

        // console.log(this.state.results)
    }
    
    //Gets instructions based on the recipe ID of the narrowed recipe results from getResults
    getInstructions = async (id,title,pic,ev)=>{
        
        // console.log("instructions")
        // console.log("state:",this.state.results);
        let url = "https://api.spoonacular.com/recipes/"+ id + "/analyzedInstructions?" + API_KEY;
        console.log(url);
        let req = new Request(url, {
            method: 'GET'
        });
        await fetch(req)
        .then(response=>response.json())
        .then(
            // this.showData)
            data => {
                // this.setState({loaded:true, results:data});
                //data = recipes from list of ids
                
                firebase.database().ref('/results/'+id +'/').update({instructions:data,title,pic})
                this.state.results.push(data)
                // console.log(this.state.results)
            })
        .catch()

    }    
    
    componentDidMount(){
       
        this.getRecipes();
        // this.getInstructions("324694");
    }
    render() {
        if (this.state.finished == true) {
            
        }
        return (
            <View style={styles.countainer}>
                <Text>
                    API Call:
                </Text>
                {/* {
                    this.state.data && this.state.data.length > 0 && (
                        this.state.data.map( comment => (
                            <Text key={comment.id} style={styles.txt}>
                                { comment.email }
                            </Text>
                        ))
                    )} */}
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