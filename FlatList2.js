import React from 'react';
import { View, Text, FlatList, ScrollView, Image, StyleSheet } from 'react-native';

const data = [
  {
    id: '1',
    title: 'Japanese Garden',
    description: 'Inspired by Japanese Garden',
    imageurl: 'https://img.freepik.com/premium-photo/japanese-garden-park-clingendael-hague-netherlands_163782-5169.jpg?w=1060',
  },
  {
    id: '2',
    title: 'Autumn',
    description: 'Landscaping Garden',
    imageurl: 'https://thumbs.dreamstime.com/z/garden-landscaping-7272074.jpg?w=992',
  },
  {
    id: '3',
    title: 'Elegant',
    description: 'Bressingham Garden',
    imageurl: 'https://susanrushtondotnet.files.wordpress.com/2020/07/foggy-bottom-bressingham.jpg?w=768&h=768',
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
        <Text style={styles.header}> Garden Scenary.</Text>
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
