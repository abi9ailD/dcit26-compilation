import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet,
} from 'react-native';

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at urna condimentum mattis pellentesque. Ut diam quam nulla porttitor massa id neque. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Tortor aliquam nulla facilisi cras fermentum. Nibh nisl condimentum id venenatis. Id aliquet risus feugiat in. Suspendisse in est ante in nibh mauris. Auctor elit sed vulputate mi sit amet mauris commodo quis.

Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Quam elementum pulvinar etiam non quam. Sed augue lacus viverra vitae congue eu. Enim neque volutpat ac tincidunt vitae semper quis. Pretium fusce id velit ut tortor pretium. Rhoncus dolor purus non enim praesent elementum facilisis leo. Scelerisque mauris pellentesque pulvinar pellentesque habitant.

Pellentesque elit eget gravida cum sociis natoque penatibus. Tincidunt lobortis feugiat vivamus at.`;

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />

        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>{longText}</Text>
          <Text style={styles.text}>{longText}</Text>
        </ScrollView>

        <View style={styles.closeButton}>
          <Button title="CLOSE" color="red" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, paddingTop: 50, backgroundColor: '#fff' },
  image: { width: 100, height: 100, marginBottom: 15 },
  scroll: { flex: 1, width: '100%' },
  text: { fontSize: 13, textAlign: 'justify', marginBottom: 12 },
  closeButton: { marginTop: 15, marginBottom: 10 },
});