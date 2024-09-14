import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  const [apodData, setApodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=36n5dktHqT4x1TcEUZtHsTgkwtYDD1WUd4K3w8dh&count=10')
      .then((response) => response.json())
      .then((data) => {
        setApodData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { apod: item })}>
      <View style={styles.apodItem}>
        <Image source={{ uri: item.url }} style={styles.apodImage} />
        <View style={styles.apodInfo}>
          <Text style={styles.apodTitle}>{item.title}</Text>
          <Text style={styles.apodDate}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={apodData}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  apodItem: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  apodImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  apodInfo: {
    padding: 10,
  },
  apodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  apodDate: {
    fontSize: 14,
    color: '#666',
  },
  loadingText: {
    fontSize: 18,
    color: '#007BFF',
  },
  errorText: {
    fontSize: 18,
    color: '#FF0000',
  },
});

export default Home;
