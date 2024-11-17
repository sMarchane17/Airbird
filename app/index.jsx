import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/airbird.png')} 
        style={styles.image} 
      />
      <Text style={styles.text}>Let's enjoy a new world!</Text>

      {/* Bouton Register */}
      <Link href="/register" style={styles.buttonLink}>
        <Text style={styles.buttonText}>Get Started !</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Rendre l'image ronde (la moitié de la largeur/hauteur)
    marginBottom: 20,
    resizeMode: 'cover', // Ajuste l'image pour bien remplir le cercle
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonLink: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, // Coins arrondis pour le bouton Login aussi
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 10,
  },
});

export default IndexScreen;
