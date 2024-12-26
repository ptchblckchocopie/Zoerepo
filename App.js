import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const FamilyConnectivity = () => {
  const [selectedTab, setSelectedTab] = useState('family');

  const renderFamilyMember = (name, email, isYou = false) => (
    <View style={styles.familyCard}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.familyName}>{name} {isYou ? '(You)' : ''}</Text>
          <Text style={styles.familyEmail}>{email}</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialIcons name="edit" size={20} color="#FFF" />
          <MaterialIcons name="delete" size={20} color="#FFF" style={{ marginLeft: 10 }} />
        </View>
      </View>
      <View style={styles.markSafeSection}>
        <Text style={styles.markSafeText}>Mark yourself safe from:</Text>
        <TextInput
          style={styles.dropdown}
          placeholder="Typhoon"
          placeholderTextColor="#000"
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={['#192841', '#1A2B48']} style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Family Connectivity</Text>
      </LinearGradient>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.registerButton}>
          <LinearGradient colors={['#2C4B81', '#3B5E9C']} style={styles.registerGradient}>
            <Text style={styles.registerText}>Register a family</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFF" />
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Family Members</Text>

        {renderFamilyMember('Maddi', 'maambong.christianrey@gmail.com', true)}
        {renderFamilyMember('Ethyl', 'ethyl.example@gmail.com')}

        <TouchableOpacity style={styles.locationsButton}>
          <Text style={styles.locationsButtonText}>See family locations</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.markSafeButton}>
          <Text style={styles.markSafeButtonText}>Mark yourself safe</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => setSelectedTab('home')}>
          <Ionicons
            name="home"
            size={24}
            color={selectedTab === 'home' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('map')}>
          <Ionicons
            name="map"
            size={24}
            color={selectedTab === 'map' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('family')}>
          <Ionicons
            name="people"
            size={24}
            color={selectedTab === 'family' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('alerts')}>
          <Ionicons
            name="notifications"
            size={24}
            color={selectedTab === 'alerts' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('menu')}>
          <Ionicons
            name="menu"
            size={24}
            color={selectedTab === 'menu' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#10203A' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, height: 80 },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  content: { padding: 15 },
  registerButton: { marginBottom: 20 },
  registerGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
  },
  registerText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  sectionTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  familyCard: {
    backgroundColor: '#1A2B48',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  profileSection: { flexDirection: 'row', alignItems: 'center' },
  profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  familyName: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  familyEmail: { color: '#BBB', fontSize: 14 },
  iconContainer: { flexDirection: 'row', marginLeft: 'auto' },
  markSafeSection: { marginTop: 10 },
  markSafeText: { color: '#FFF', fontSize: 14, marginBottom: 5 },
  dropdown: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
  },
  locationsButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  locationsButtonText: { color: '#000', fontSize: 14, fontWeight: 'bold' },
  markSafeButton: {
    backgroundColor: '#2C4B81',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  markSafeButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1A2B48',
    padding: 10,
  },
});

export default FamilyConnectivity;
