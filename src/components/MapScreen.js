import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TextInput,
  TouchableOpacity
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { Card, CardSection } from "./common";
import { connect } from "react-redux";
import { locationChanged, getCurrentLocation, getInputData, getAddressPredictions } from "../actions";
import { Actions } from "react-native-router-flux";

class MapScreen extends Component {
  componentDidMount() {
    console.log("componentDidMount()");
    this.props.getCurrentLocation();
  }

  //duplicate of handleInput
  onLocationChange(text) {
    this.props.locationChanged(text);
    console.log('------------------------------------');
    console.log("onLocationChange");
    console.log(text);

    console.log('------------------------------------');
  }

  handleInput(text){
    this.props.getInputData(text);
    this.props.getAddressPredictions(text);

  }

  handleLocationInput(textInput) {
    this.setState({
      locationInput: textInput
    });
  }

  handleSubmit(textInput) {
    console.log(this.props.currentLocation);
   }

  handleLocationChange(locationCoordinates) {
    console.log("handleLocationChange(locationCoordinates)");
    this.setState({locationCoordinates});
    console.log(this.props.currentLocation);
  }

  render() {    

    return (
      
      <View style={styles.outerContainer}>
        <View style={styles.navigationBar}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            underlayColor={"white"}
          >
            <Image source={require("../images/menu.png")} />
          </TouchableHighlight>

          <Text style={styles.companyText}>SPOT ME</Text>

          <Image source={require("../images/icon.jpg")} />
        </View>

        <View style={styles.mapAndSearchBarContainer}>
        {this.props.currentLocation.latitude &&
          <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapContainer}
          region={this.props.currentLocation}
          onRegionChange={this.handleLocationChange}
          zoomEnabled={true}
          scrollEnabled={true}
        >
          <MapView.Marker coordinate={this.props.currentLocation} />
        </MapView>
        }
         

          <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>Search</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="garage name"
              onChangeText={this.handleInput.bind(this)}
              value={this.props.location}
              onSubmitEditing={this.handleSubmit.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  outerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  companyText: {
    fontSize: 30,
    color: "#42b8ba",
    fontWeight: "900"
  },
  navigationBar: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  mapAndSearchBarContainer: {
    alignItems: "center",

    height: "90%",
    width: "100%"
  },
  mapContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  inputContainer: {
    height: 40,
    elevation: 1,
    backgroundColor: "white",
    width: "90%",
    height: "10%",
    top: 40,
    borderRadius: 3,
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: "gray",
    shadowOffset: { height: 0, width: 0 },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    padding: 10,
    height: 50,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

const mapStateToProps = ({ loc }) => {
  const { location, currentLocation,inputData,predictions  } = loc;
  return { location, currentLocation,inputData,predictions };
};

export default connect(mapStateToProps, {
  locationChanged,
  getCurrentLocation,
  getInputData,
  getAddressPredictions
})(MapScreen);
