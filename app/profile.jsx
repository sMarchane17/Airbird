import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slot, Stack } from 'expo-router';

const Profile = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false }} />
    </Stack>
  );
};

export default Profile;
const styles = StyleSheet.create({})
