'use strict';

import React, { Component } from 'react';
import {
	
	StyleSheet,
	Text,
	View,
	ListView,
	Image,
	TouchableHighlight,
	NavigatorIOS
} from 'react-native';
import H1 from '../component/Text';

class movieList extends Component {

  //construtor
  constructor(props){
  	super(props);
  	//const navigator = {navigator};	
  	this._touchEvent = this._touchEvent.bind(this);		
  	this.fetchDate = this.fetchDate.bind(this);
  	this.querry_url = 'https://api.douban.com/v2/movie/in_theaters';
  	this.state = {
      // book : '',
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
  	fetch(this.querry_url)
  	.then(response => response.json())
  	.then(responseData =>{
      // this.state.book = responseData.pubdate;
      // var jk = responseData.pubdate;
      // console.log(jk);
      // return jk;
      // console.log(this.state.book);
        // console.log(responseData.subjects);
        // console.log(typeof(navigator));	
        this.setState({
        	movie : this.state.movie.cloneWithRows(responseData.subjects),
        	loaded:true
        })
    })
  	.done();
  }

  onPress_event(){
  	this.props.navigator.push({
  		title:'movie.title',
  		Component: H1,
  	});
  }

  _renderRow(movie){
  	return(
  		<TouchableHighlight
  		onPress ={ ()=>{this.onPress_event()}}>
  		<View style = 
  		{
  			{flex : 1, 
  				flexDirection: 'row', 
  				borderWidth:3, 
  				borderColor:'#133235', 
  				marginBottom:10, 
      // borderRadius:35, shadowColor:'#2C2F7F', shadowRadius:20, //overflow:'hidden', shadowOpacity:10, // borderBottomLeftRadius:35, // borderTopLeftRadius:35, // shadowOffset:{1,1}, 
  } }>


  <Image 
  style = {{
   	// overflow:'hidden',
   }}
   source = {{uri:movie.images.medium}} style = {{height:80,width:80}}/>

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