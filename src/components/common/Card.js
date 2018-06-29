import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    //borderWidth: 1,
    //borderRadius: 2,
    //position: 'absolute',
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 20,
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // opacity: 0.5,
    flex: 1,
    backgroundColor: '#1DE0AB',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export { Card };
