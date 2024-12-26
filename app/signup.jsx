import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from './firebaseConfig'; // Importer la configuration Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Importer la fonction d'inscription de Firebase Auth

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateAndSubmit = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('The password must contain at least 8 characters.');
      return;
    }
    setError('');

    // Inscription avec Firebase Auth
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Registration successful!');
        // Naviguer vers une autre page après l'inscription
        navigation.navigate('Home'); // Remplacez 'Home' par le nom de votre écran
      })
      .catch((error) => {
        setError(error.message); // Afficher l'erreur si l'inscription échoue
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {password.length < 8 && password.length > 0 && (
        <Text style={styles.error}>The password must contain at least 8 characters.</Text>
      )}

      <Text style={styles.label}>Confirm your password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {confirmPassword && confirmPassword !== password && (
        <Text style={styles.error}>Passwords do not match.</Text>
      )}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.signUpButton} onPress={validateAndSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
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
    backgroundColor: '#fff',
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
  },
  error: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
});

export default SignUp;
