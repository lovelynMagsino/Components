import React from 'react';
import { View, Text, FlatList, ScrollView, Image, StyleSheet } from 'react-native';

const data = [
  {
    id: '1',
    title: 'The Moon Lover',
    description: 'The Moon Lover',
    imageurl: 'https://aneha.co/wp-content/uploads/2019/07/selenophile-moon-goddess-selene-selenophilia-moon-child-819x1024.jpg',
  },
  {
    id: '2',
    title: 'Your Beauty Attracts',
    description: 'Your Beauty Attracts',
    imageurl: 'https://pbs.twimg.com/media/EnYhu9PXYAAtSov?format=jpg&name=900x900',
  },
  {
    id: '3',
    title: 'Moon',
    description: 'The Attraction',
    imageurl: 'https://pbs.twimg.com/media/EnYhulzXMAMtmzj?format=jpg&name=900x900',
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
        <Text style={styles.header}>Selenophile- the Moon Lover.</Text>
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
