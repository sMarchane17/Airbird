import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
//import localImage from './assets/AirBird.PNG';
import { Link } from 'expo-router'; 



//Test de commit 
const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        //source={localImage} 
        //style={styles.image} 
      />
      <Text style={styles.text}>Let's enjoy a new world!</Text>
      <Button 
        title="Get Started" 
        color="#1E90FF" 
        onPress={() => alert('Button pressed!')} 
      />
      <Link href="/profile" style={{color: 'white'}}> Profile </Link>
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
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default IndexScreen;
