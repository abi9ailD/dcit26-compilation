import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

// Shades of purple, light to dark. Each new item takes the next shade.
const SHADES = [
  { bg: '#EDE4FA', text: '#4A148C', badge: '#B388EB' },
  { bg: '#D9C2F5', text: '#4A148C', badge: '#9C6ADE' },
  { bg: '#C39BEF', text: '#3B0A73', badge: '#8143D1' },
  { bg: '#A874E0', text: '#FFFFFF', badge: '#6A2DB8' },
  { bg: '#8E4FD0', text: '#FFFFFF', badge: '#4E1A91' },
  { bg: '#7330B8', text: '#FFFFFF', badge: '#3A0F72' },
  { bg: '#58209A', text: '#FFFFFF', badge: '#2A0A55' },
];

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text.trim() === '') return; // ignore empty input
    setItems([...items, text.trim()]); // add to list
    setText(''); // CLEAR the TextInput
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My List</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          placeholderTextColor="#B39DDB"
          value={text}
          onChangeText={setText}
          onSubmitEditing={addItem}
        />
        <View style={styles.buttonWrapper}>
          <Button title="ADD" onPress={addItem} color="#7E3FD6" />
        </View>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const shade = SHADES[index % SHADES.length];
          return (
            <View
              style={[
                styles.listItem,
                { backgroundColor: shade.bg, borderLeftColor: shade.badge },
              ]}
            >
              <View style={[styles.badge, { backgroundColor: shade.badge }]}>
                <Text style={styles.badgeText}>{index + 1}</Text>
              </View>
              <Text style={[styles.listText, { color: shade.text }]}>
                {item}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 55,
    backgroundColor: '#F7F2FD',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4A148C',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 2,
    borderColor: '#9C6ADE',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    color: '#4A148C',
  },
  buttonWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginBottom: 10,
    borderRadius: 12,
    borderLeftWidth: 6,
    shadowColor: '#4A148C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  badge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  badgeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  listText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
});