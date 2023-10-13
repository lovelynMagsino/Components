import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet, Alert } from 'react-native';

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [message, setMessage] = useState('');
  const [inputText, setInputText] = useState('');
  const [recommendationText, setRecommendationText] = useState('');
  const [additionalRadio, setAdditionalRadio] = useState('');
  

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  const handleCheckboxChange = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleRecommendationChange = (text) => {
    setRecommendationText(text);
  };

  const handleAdditionalRadioChange = (value) => {
    setAdditionalRadio(value);
  };

  const handleSubmit = () => {
    setMessage(
      `Name: ${inputText}, Recommendation: ${recommendationText}, Additional Radio Option: ${additionalRadio}, More Radio Option: ${moreRadio}`
    );
    Alert.alert('Success', 'You submitted it successfully!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>Enter Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={handleInputChange}
          value={inputText}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Select Gender</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleRadioChange('Male')}
        >
          <Text>Male</Text>
          <View style={selectedOption === 'Male' && styles.radioSelected} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleRadioChange('Female')}
        >
          <Text>Female</Text>
          <View style={selectedOption === 'Female' && styles.radioSelected} />
        </TouchableOpacity>
      </View>

      <Text style={styles.selected}>
        Selected Gender: {selectedOption}
      </Text>

      <View style={styles.section}>
        <Text style={styles.heading}>What are your Hobbies?</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleCheckboxChange('Sending Bouquet')}
        >
          <Text>Sending Bouquet</Text>
          {selectedOptions.includes('Sending Bouquet') && (
            <View style={styles.checkboxSelected} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleCheckboxChange('Travelling')}
        >
          <Text>Travelling</Text>
          {selectedOptions.includes('Travelling') && (
            <View style={styles.checkboxSelected} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleCheckboxChange('Watching Stars and Moon')}
        >
          <Text>Watching Stars and Moon</Text>
          {selectedOptions.includes('Watching Stars and Moon') && (
            <View style={styles.checkboxSelected} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleCheckboxChange('Gardening')}
        >
          <Text>Gardening</Text>
          {selectedOptions.includes('Gardening') && (
            <View style={styles.checkboxSelected} />
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.selected}>
        Selected Hobbies: {selectedOptions.join(', ')}
      </Text>

      <View style={styles.section}>
        <Text style={styles.heading}>Are you a Selenophile?</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleRadioChange('YES')}
        >
          <Text>YES</Text>
          <View style={selectedOption === 'YES' && styles.radioSelected} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleRadioChange('NO')}
        >
          <Text>NO</Text>
          <View style={selectedOption === 'NO' && styles.radioSelected} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Recommendation</Text>
        <TextInput
          style={styles.input}
          placeholder="Recommendation"
          onChangeText={handleRecommendationChange}
          value={recommendationText}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />

      <Text style={styles.messageBox}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent:'center',
    backgroundColor: '#f0f0f0',
  },
  section: {
    marginBottom: 10,
    marginTop: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioSelected: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'blue',
    marginLeft: 8,
  },
  checkboxSelected: {
    width: 16,
    height: 16,
    borderRadius: 3,
    borderColor: 'blue',
    borderWidth: 2,
    marginLeft: 8,
  },
  selected: {
    fontSize: 16,
    marginTop: 2,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
  messageBox: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 10,
  },
});

export default App;
