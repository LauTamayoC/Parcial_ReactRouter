import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Details = ({ route }) => {
  const { apod } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: apod.url }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{apod.title}</Text>
        <Text style={styles.date}>{apod.date}</Text>
        <Text style={styles.explanation}>{apod.explanation}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  explanation: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});

export default Details;
