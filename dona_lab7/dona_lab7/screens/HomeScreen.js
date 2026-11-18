import * as React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://randomuser.me/api');
      const json = await response.json();
      setUser(json.results[0]);
    } catch (e) {
      setError('Could not load a user. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error || !user) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
        <Button title="Try Again" onPress={fetchUser} />
      </View>
    );
  }

  const fullName = `${user.name.first} ${user.name.last}`;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile', { user })}>
        <Image source={{ uri: user.picture.large }} style={styles.picture} />
      </TouchableOpacity>
      <Text style={styles.name}>{fullName}</Text>
      <Button title="Random User" onPress={fetchUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  picture: { width: 160, height: 160, borderRadius: 8 },
  name: { fontSize: 20, fontWeight: 'bold', marginVertical: 12 },
});