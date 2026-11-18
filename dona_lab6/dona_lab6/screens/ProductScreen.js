import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductScreen({ route }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text>Key: {item.key}</Text>
      <Text>{item.title}</Text>
      <Text>{item.rating}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});