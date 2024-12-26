import React, { useState, useRef } from 'react';
import { Link } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';

const App = () => {
  const [isFocused, setIsFocused] = useState(false);
  const avatarAnim = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.spring(avatarAnim, {
      toValue: -20,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.spring(avatarAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Avatar animé */}
      <Animated.View style={[styles.avatarContainer, { transform: [{ translateY: avatarAnim }] }]}>
        <Image
          source={require('../assets/images/Leonardo_Phoenix_a_vibrant_yet_subdued_3D_animated_cartoon_sty_3.jpg')}
          style={styles.avatar}
        />
      </Animated.View>

      {/* Formulaire */}
      <View style={styles.formContainer}>
        {/* Champ Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre email"
          placeholderTextColor="#aaa"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {/* Champ Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre mot de passe"
          placeholderTextColor="#aaa"
          secureTextEntry
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {/* Bouton Sign In */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Bouton Sign Up */}
        <Link href="/signup" style={[styles.signInButton, styles.signUpButton]}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Link>

        {/* Lien Forgot password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a6c1ee',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderColor: '#a96bff',
    borderWidth: 1,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  signInButton: {
    backgroundColor: '#000',
    width: '100%',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpButton: {
    marginTop: 0, // Vous pouvez personnaliser ici si besoin.
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center', // Assure l'alignement au centre.
  },
  forgotPassword: {
    marginVertical: 10,
    color: '#0000EE',
    textDecorationLine: 'underline',
  },
});

export default App;
