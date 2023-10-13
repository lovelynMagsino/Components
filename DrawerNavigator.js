import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const Divider = () => (
  <View style={styles.divider} />
);

class DrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isBlueBackground: false, 
    };
    this.translateX = new Animated.Value(-width);
  }

  toggleDrawer = () => {
    const toValue = this.state.isOpen ? -width : 0;
    this.setState({ isOpen: !this.state.isOpen });
    Animated.timing(this.translateX, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  toggleBackground = () => {
    this.setState({ isBlueBackground: !this.state.isBlueBackground });
  };

  render() {
    const backgroundColor = this.state.isBlueBackground ? 'blue' : 'white';

    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Animated.View style={[styles.drawer, { transform: [{ translateX: this.translateX }] }]}>
          <Text>SETTINGS</Text>
          <Divider />
          <Text>Privacy Policy</Text>
          <Divider />
          <Text>Permissions</Text>
          <Divider />
          <Text>Location</Text>
          <Divider />
          <Text>Help</Text>
          <Divider />
          <Text>Links</Text>
          <Divider />
          <Text>Profile</Text>
          <Divider />
          <Text>About Us</Text>
          <Divider />
          <Text>Accounts and Backups</Text>
          <Divider />
          <Text>Logout</Text>
        </Animated.View>
        <View style={styles.main}>
          <TouchableOpacity onPress={this.toggleDrawer}>
            <Text>Click here to view Settings</Text>
          </TouchableOpacity>
          <View style={styles.switchContainer}>
            <Text>Toggle Background:</Text>
            <Switch value={this.state.isBlueBackground} onValueChange={this.toggleBackground} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  drawer: {
    width: width * 0.65,
    backgroundColor: 'white',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    paddingTop: 50,
    paddingLeft: 20,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 300,
  },
});

export default DrawerComponent;
