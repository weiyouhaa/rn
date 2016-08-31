'use strict';

import React, { Component,PropTypes} from 'react';
// import { NavigatorIOS } from 'react-native';
import h1 from '../component/Text';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  NavigatorIOS,
} from 'react-native';

// class movieList extends Component {
//   render() {
//     return (
//       <NavigatorIOS
//       initialRoute={{
//         component:movielist1,
//         title:'movieList',
//       }}
//       style = {{flex:1}}
//       />
//     );
//   }
// }



class movieList extends Component {
 // static propTypes = {
 //    title: PropTypes.string.isRequired,
 //    navigator: PropTypes.object.isRequired,
 //  }

  constructor(props,context){
  	super(props,context);
  	this._touchEvent = this._touchEvent.bind(this);		
  	this.fetchDate = this.fetchDate.bind(this);
  	this.querry_url = 'https://api.douban.com/v2/movie/in_theaters';
  	this.state = {
      loaded: false,
      movie: new ListView.DataSource({
      	rowHasChanged:(row1,row2)=>row1 !==row2
      })
  };

  this.fetchDate();
}
  //touch function
  _touchEvent(){
  	alert('hello boy');
  }

  fetchDate(){
     console.log('ok');
  	fetch(this.querry_url)
  	.then(response => response.json())
  	.then(responseData =>{
        this.setState({
        	movie : this.state.movie.cloneWithRows(responseData.subjects),
        	loaded:true
        })
    })
  	.done();
  }

  onPress_event(movie){
  	this.props.navigator.push({
  		title:'电影简介',
  		component: h1,
      barTintColor:'#2961A9',
      passProps: {movie}
  	});
  }

  _renderRow(movie){
  	return(
    
  		<TouchableHighlight
  		onPress ={()=>{this.onPress_event(movie)}}>
  		<View style = 
  		{
  			{flex : 1, 
  				flexDirection: 'row', 
  				borderWidth:3, 
  				borderColor:'#133235', 
  				marginBottom:10, 
      // borderRadius:35, shadowColor:'#2C2F7F', shadowRadius:20, //overflow:'hidden', shadowOpacity:10, // borderBottomLeftRadius:35, // borderTopLeftRadius:35, // shadowOffset:{1,1}, 
  } }>


  <Image source = {{uri:movie.images.medium}} style = {{height:80,width:80}}/>

   <Text
   style = {{
   	textAlign:'center',
   	fontSize:16,
   	fontWeight:'bold',
   }}>
   {movie.title}</Text>
   </View>
   </TouchableHighlight>
   )
  }

  render() {
  	return (

  		<View style = {styles.container}>
  		<ListView
  		dataSource={this.state.movie}
  		renderRow={this._renderRow.bind(this)}	
  		/>
  		</View>
			
  		)
  	;
  	//}
  	
  }

  // fetchDate();
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    // justifyContent: 'flex_start',
    // alignItems: 'center',
    marginTop:20,
    padding:3,
    backgroundColor: '#3EA9B7',
},
view1:{
	marginTop:20,
	borderWidth:2,
	borderColor:'#36919B',
	height:40,
},
welcome: {
	fontSize: 20,
	textAlign: 'center',
	margin: 10,
},
instructions: {
	textAlign: 'center',
	color: '#333333',
	marginBottom: 5,
},
test:{
	fontSize:66,
}
});

export default movieList;