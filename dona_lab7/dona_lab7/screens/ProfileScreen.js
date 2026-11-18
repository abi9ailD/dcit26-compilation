import * as React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

function Row({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

export default function ProfileScreen({ route }) {
  const { user } = route.params;
  const { name, picture, dob, gender, location, email, phone, cell, registered, login, nat } = user;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Image source={{ uri: picture.large }} style={styles.picture} />
      <Text style={styles.name}>
        {name.title} {name.first} {name.last}
      </Text>
      <Text style={styles.username}>@{login.username}</Text>

      <Section title="ABOUT">
        <Row label="Age" value={dob.age} />
        <Row label="Birthday" value={dob.date.slice(0, 10)} />
        <Row label="Gender" value={gender} />
        <Row label="Nationality" value={nat} />
        <Row
          label="Address"
          value={`${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`}
        />
      </Section>

      <Section title="CONTACT">
        <Row label="Email" value={email} />
        <Row label="Phone" value={phone} />
        <Row label="Cell" value={cell} />
      </Section>

      <Section title="OTHER">
        <Row label="Registered" value={registered.date.slice(0, 10)} />
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#fff' },
  container: { padding: 24, alignItems: 'center' },
  picture: { width: 120, height: 120, borderRadius: 60, marginBottom: 14 },
  name: { fontSize: 22, fontWeight: '600', color: '#111' },
  username: { fontSize: 14, color: '#888', marginTop: 2, marginBottom: 28 },
  section: { alignSelf: 'stretch', marginBottom: 24 },
  sectionTitle: {
    fontSize: 11,
    letterSpacing: 1.5,
    color: '#999',
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  label: { fontSize: 14, color: '#777' },
  value: { fontSize: 14, color: '#111', flex: 1, textAlign: 'right', marginLeft: 16 },
});