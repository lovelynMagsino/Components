import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, Modal, TouchableOpacity, StyleSheet, StatusBar, BackHandler,Alert } from 'react-native'; 

export default function App({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (isModalVisible) {
        toggleModal();
         return true;
      }
         return false;
    });

         return () => {
      backHandler.remove();
    };
  }, [isModalVisible]);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleExit = () => {
    const shouldExit = window.confirm("Are you sure you want to exit?");
    
    if (shouldExit) {
      toggleModal();
    }
  };

  const handleSeeMore = () => {
    navigation.navigate('Tab');
  };

  return (
    <View style={styles.container}>
      <View style={{marginRight: 330, marginBottom: 25, marginTop: 15}} >
      <Text onPress={() => navigation.navigate('Settings')}> Go to Settings</Text> 
      </View>
      
      <Text style={styles.welcome}>WELCOME</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/bouqet6.jpg')} style={{ height: 350, width:350 }} />

      <View style={styles.buttonContainer}>
        <Button title="See More" color="darkblue" onPress={() => navigation.navigate('Images')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="EXIT" onPress={handleExit} color="black" />
      </View>

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}></Text>
            <Text style={styles.modalText}>Click Exit if you want</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.modalClose} onPress={() => navigation.navigate('SignInRegister')}>EXIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{marginLeft: 250, marginBottom: 15, marginTop: 15}} >
      <Text onPress={() => navigation.navigate('Survey')}> Answer Survey Here!</Text> 
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'Black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: 'black',
    letterSpacing: 10,
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    height: 50,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalClose: {
    color: 'black',
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: "flex-start"


  },
});
