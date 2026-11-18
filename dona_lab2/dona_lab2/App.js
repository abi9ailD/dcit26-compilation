import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>Abigail B. Doña</Text>

      <Text style={styles.label}>Age:</Text>
      <Text style={styles.value}>20</Text>

      <Text style={styles.label}>Course/Year/Section:</Text>
      <Text style={styles.value}>BS Computer Science, 3rd Year, Section 2</Text>

      <Text style={styles.label}>About Me:</Text>
      <Text style={styles.value}>
        Passionate about doomscrolling and wasting my time bedrotting. I enjoy
        playing Roblox and spending money on unnecessary things.
      </Text>

      <Text style={styles.label}>Achievements:</Text>
      <Text style={styles.value}>- Survived 1st year of BSCS</Text>
      <Text style={styles.value}>- Survived 2nd year of BSCS</Text>

      <Text style={styles.label}>Skills:</Text>
      <Text style={styles.value}>- Time Management</Text>
      <Text style={styles.value}>- Adaptability</Text>
      <Text style={styles.value}>- Teamwork</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
  },
  value: {
    fontSize: 13,
    color: '#333',
    marginTop: 2,
  },
});