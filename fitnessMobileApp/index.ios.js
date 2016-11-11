import React, { Component } from 'react';
import
{
  AppRegistry, StatusBar, Text, View, Dimensions,
  StyleSheet, ScrollView, Image
}
from 'react-native';

const windowDims = Dimensions.get('window');
const itemSize = (windowDims.width / 2) - 20;
StatusBar.setBarStyle('light-content');

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },

  container : {

    paddingTop      : 30,
    justifyContent  : 'center',
    alignItems      : 'center',
    // backgroundColor : '#F5FCFF',
    height:windowDims.height,
    flexDirection   : 'column',
  },
  topBar : {
    position        : 'absolute', 
    top             : 0, 
    height          : 25, 
    width           : windowDims.width, 
    backgroundColor : 'rgba(0,0,0,.8)'
  },
  fitnessSpot : {
    flexDirection:'row',
    flex:1,
  },
  imageDim : {
    marginTop:10,
    height:150,
    width:200,
    marginRight:10,
    alignSelf:'flex-start',
    borderWidth: 2
  },
  topBanner : {
    fontSize:70,
    fontStyle:'italic',
    marginTop:30
  },
  commentary : {
    marginTop:10,
    marginBottom:10,
    width:150,
    opacity:0.85
  }
});

class ImageList extends Component {

  clicked = e => {
    console.log('clicked');
  }

  render () {
    return (
      <View style={this.props.style}>
	<Text style={styles.topBanner}>
	  Fit Armenia
	</Text>
        <ScrollView contentContainerStyle={styles.container}
                    style={{backgroundColor: '#F5FCFF'}}>
	  <Image style={styles.backgroundImage}
		 source={require('./backgroundArmenia.jpg')}>
	    <View style={styles.fitnessSpot}
		  onPress={this.clicked}
		  >
	      <Image source={require('./opera.jpg')}
		     style={styles.imageDim}
		     />
	      <Text style={styles.commentary}
		    adjustsFontSizeToFit={true}
		    >
		Laps challenge!{'\n\n'}

		How many laps around the famous Opera house can you do?
	      </Text>
	    </View>
	    <View style={styles.fitnessSpot}>
	      <Image source={require('./cascade.jpg')}
		     style={styles.imageDim}
		     />
	      <Text style={styles.commentary}
		    adjustsFontSizeToFit={true}
		    >
		Steps challenge! {'\n\n'}
		Conquer these lengendary steps!
	      </Text>
	    </View>
	    <View style={styles.fitnessSpot}>
	      <Image source={require('./monument.jpg')}
		     style={styles.imageDim}
		     />
	      <Text style={styles.commentary}
		    adjustsFontSizeToFit={true}
		    >
		Pushup challenge! {'\n\n'}
		How many pushups can you do under Mother Armenia?
	      </Text>
	    </View>
	  </Image>
        </ScrollView>
	<View style={styles.topBar}/> 
      </View>
    );
  }
};

export default class fitnessMobileApp extends Component {
  render() { return <ImageList/>; }
}

AppRegistry.registerComponent('fitnessMobileApp', () => fitnessMobileApp);
