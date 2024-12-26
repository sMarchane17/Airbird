import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';

const FlightSearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: '/api/placeholder/40/40' }}
            style={styles.profileImage}
          />
          <Text style={styles.greeting}>Hi Tania!</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      {/* Main Title */}
      <Text style={styles.mainTitle}>Where you want to{'\n'}go?</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a flight"
          placeholderTextColor="#8E8E93"
        />
      </View>

      {/* Upcoming Trips */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Trips</Text>
        <View style={styles.tripCard}>
          <View style={styles.tripDetails}>
            <View>
              <Text style={styles.date}>10 May, 12:30 pm</Text>
              <Text style={styles.airport}>ABC</Text>
              <Text style={styles.location}>Albania, Sodiaum</Text>
            </View>
            <View style={styles.flightIcon}>
              <Text style={styles.flightDots}>• • • • •</Text>
              <Text style={styles.planeEmoji}>✈️</Text>
            </View>
            <View>
              <Text style={styles.date}>11 May, 08:15 pm</Text>
              <Text style={styles.airport}>XYZ</Text>
              <Text style={styles.location}>Mysalia, Filante</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Popular Destinations */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destinations</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <DestinationCard
            image="/api/placeholder/160/200"
            city="Paris"
            country="France"
          />
          <DestinationCard
            image="/api/placeholder/160/200"
            city="Rome"
            country="Italy"
          />
          <DestinationCard
            image="/api/placeholder/160/200"
            city="Istanbul"
            country="Turkey"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const DestinationCard = ({ image, city, country }) => (
  <TouchableOpacity style={styles.destinationCard}>
    <Image source={{ uri: image }} style={styles.destinationImage} />
    <Text style={styles.destinationCity}>{city}</Text>
    <Text style={styles.destinationCountry}>{country}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  greeting: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  searchContainer: {
    marginBottom: 24,
  },
  searchInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  viewAll: {
    fontSize: 14,
    color: '#007AFF',
  },
  tripCard: {
    backgroundColor: '#F0F7FF',
    borderRadius: 16,
    padding: 20,
    marginTop: 12,
  },
  tripDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  airport: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  flightIcon: {
    alignItems: 'center',
  },
  flightDots: {
    color: '#007AFF',
    letterSpacing: 2,
    marginBottom: 4,
  },
  planeEmoji: {
    fontSize: 20,
    transform: [{ rotate: '90deg' }],
  },
  destinationCard: {
    marginRight: 16,
    width: 160,
  },
  destinationImage: {
    width: 160,
    height: 200,
    borderRadius: 16,
    marginBottom: 8,
  },
  destinationCity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  destinationCountry: {
    fontSize: 14,
    color: '#666',
  },
});

export default FlightSearchScreen;