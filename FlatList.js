import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const data = [
  {
    id: '1',
    title: 'Helia',
    description: 'Beautiful bouquet of flowers',
    imageurl: 'https://www.flowerchimp.com.ph/cdn/shop/products/PH_007_493x.jpg?v=1635836640',
  },
  {
    id: '2',
    title: 'Birthday Bouquet',
    description: 'Colorful Birthday flowers',
    imageurl: 'https://www.knots.ph/images/default-source/Birthday-Flowers/dfar2301_1200.jpg?sfvrsn=2',
  },
  {
    id: '3',
    title: 'Yellow Roses',
    description: 'Elegant White Roses for Friends',
    imageurl: 'https://theflowerbartz.com/wp-content/uploads/2023/06/e21e546eba99e1490f1f042c349fbfc6.jpg',
  },
];

const FlatListExample = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.imageurl }} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.header}>Bouquet of Flowers.</Text>

        <RNPickerSelect
          placeholder={{
            label: 'Select a Bouquet',
            value: null,
          }}
          items={[
            { label: 'Helia', value: 'Helia' },
            { label: 'Birthday Bouquet', value: 'Birthday Bouquet' },
            { label: 'Yellow Roses', value: 'Yellow Roses' },
          ]}
          value={selectedValue}
          style={pickerSelectStyles}
          onValueChange={(value) => setSelectedValue(value)}
        />

        {refreshing ? (
          <ActivityIndicator size="large" color="green" style={styles.spinner} />
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        )}
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
    padding: 30,
    paddingTop: 30,
    paddingBottom: 30,
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
    borderColor: 'gray',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
  },
});

export default FlatListExample;
