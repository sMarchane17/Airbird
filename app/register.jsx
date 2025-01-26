import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');
  const avatarAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

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

  // Connexion de l'utilisateur
  const handleSignIn = () => {
    setError('');
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
        if (!user.emailVerified) {
          setError("Please verify your email before logging in.");
          return;
        }
  
        router.push('/home'); // Redirection après connexion réussie
      })
      .catch(() => {
        setError("Email ou mot de passe incorrect.");
      });
  };
  
  // Redirection vers la page d'inscription
  const goToSignUpPage = () => {
    router.push('/signup');
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.avatarContainer, { transform: [{ translateY: avatarAnim }] }]}>
        <Image
          source={require('../assets/images/Leonardo_Phoenix_a_vibrant_yet_subdued_3D_animated_cartoon_sty_3.jpg')}
          style={styles.avatar}
        />
      </Animated.View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre mot de passe"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        {/* Bouton Sign In */}
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Bouton Sign Up qui redirige vers la page d'inscription */}
        <TouchableOpacity style={styles.signUpButton} onPress={goToSignUpPage}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
    backgroundColor: '#007bff',
    width: '100%',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#000',
    width: '100%',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 15,
  },
});

export default SignUp;
