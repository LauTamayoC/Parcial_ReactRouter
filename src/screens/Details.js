import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Details = ({ route }) => {
  const { apodData } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: apodData.url }} style={styles.image} /> 
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{apodData.title}</Text>
        <Text style={styles.date}>{apodData.date}</Text>
        <Text style={styles.explanation}>{apodData.explanation}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  explanation: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Details;
