import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About this App</Text>
      <Text style={styles.paragraph}>
        This app fetches data from NASA's Astronomy Picture of the Day (APOD) API and displays beautiful space images along with detailed information.
      </Text>
      <Text style={styles.subtitle}>Features</Text>
      <Text style={styles.paragraph}>- View daily astronomy images</Text>
      <Text style={styles.paragraph}>- Get detailed information on each image</Text>
      <Text style={styles.paragraph}>- Smooth navigation between screens</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Text style={styles.version}>Version 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#2089dc',
    marginVertical: 20,
  },
  version: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});

export default About;
