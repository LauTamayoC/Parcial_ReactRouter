import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Alert } from 'react-native';
import { Slider, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [imageCount, setImageCount] = useState(20);

  const toggleDarkMode = () => setDarkMode(previousState => !previousState);

  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem('@settings', JSON.stringify({ darkMode, imageCount }));
      Alert.alert('Éxito', 'Configuración guardada correctamente');
    } catch (e) {
      Alert.alert('Error', 'No se pudo guardar la configuración');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Modo oscuro</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.setting}>
        <Text style={styles.settingText}>Número de imágenes a cargar: {imageCount}</Text>
        <Slider
          value={imageCount}
          onValueChange={value => setImageCount(value)}
          minimumValue={1}
          maximumValue={50}
          step={1}
          thumbTintColor="#2089dc"
        />
      </View>

      <Button title="Guardar configuración" onPress={saveSettings} buttonStyle={styles.button} />
      <Button
        title="Limpiar caché"
        onPress={() => Alert.alert('Caché limpiado', 'El caché de imágenes ha sido limpiado')}
        buttonStyle={[styles.button, styles.dangerButton]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2089dc',
    marginVertical: 10,
  },
  dangerButton: {
    backgroundColor: '#d9534f',
  },
});

export default Settings;
