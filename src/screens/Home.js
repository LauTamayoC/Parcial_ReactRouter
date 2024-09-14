import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const API_KEY = 'ysYmtCpmxIe3VdAMZXcUvqpagNZUXdA3mU3hNppF';

const Home = () => {
  const [apodList, setApodList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchApodList();
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 10 }}>
          <FontAwesome5 name="bars" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const fetchApodList = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=20`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setApodList(data);
    } catch (error) {
      console.error('Error fetching APOD list:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderApodItem = ({ item }) => (
    <TouchableOpacity
      style={styles.apodItem}
      onPress={() => navigation.navigate('Details', { apodData: item })}
    >
      <Image source={{ uri: item.url }} style={styles.apodImage} />
      <View style={styles.apodInfo}>
        <Text style={styles.apodTitle}>{item.title}</Text>
        <Text style={styles.apodDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.loadingText}>Cargando ...</Text>
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
    <FlatList
      data={apodList}
      renderItem={renderApodItem}
      keyExtractor={item => item.date}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  apodItem: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  apodDate: {
    fontSize: 14,
    color: '#666',
  },
  loadingText: {
    fontSize: 18,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default Home;