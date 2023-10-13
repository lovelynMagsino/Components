import React from 'react';
import { View, Text, FlatList, ScrollView, Image, StyleSheet } from 'react-native';

const data = [
  {
    id: '1',
    title: 'Eiffel Tower',
    description: 'Eiffel Tower in Paris',
    imageurl: 'https://lh3.googleusercontent.com/p/AF1QipOnJHzIOu1VUvkTX0GKjmqK-NdgXWJEUa8m2YPd=s1360-w1360-h1020',
  },
  {
    id: '2',
    title: 'Chocolate Hill',
    description: 'Chocolate Hill in Bohol',
    imageurl: 'https://d1bv4heaa2n05k.cloudfront.net/other%2F9d64e9e6-9908-4044-9aba-a6642447338e_1533126405300%2F1533126571485-shutterstock_1062273197.jpg',
  },
  {
    id: '3',
    title: 'Golden Gate Bridge',
    description: 'Golden Gate Bridge in USA',
    imageurl: 'https://cdn.britannica.com/95/94195-050-FCBF777E/Golden-Gate-Bridge-San-Francisco.jpg',
  },

];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.imageurl }} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);

const FlatListExample = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.header}>Travel Destination.</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  scrollViewContainer: {
    padding: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 12,
    alignContent:'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
});

export default FlatListExample;
