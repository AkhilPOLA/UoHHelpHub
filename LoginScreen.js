import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLostAndFound, setIsLostAndFound] = useState(true);

  const handleToggle = () => {
    setIsLostAndFound(!isLostAndFound);
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log('User ID:', userId);
    console.log('Password:', password);
    console.log('Is Lost and Found:', isLostAndFound);

    // Example: Navigate to ManageLostItem screen
    navigation.navigate('ManageLostItem');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{isLostAndFound ? 'Lost and Found' : 'Donation Hub'}</Text>
      <TextInput
        style={styles.input}
        placeholder="User ID"
        onChangeText={(text) => setUserId(text)}
        value={userId}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={handleToggle}>
        <Text style={styles.toggleButton}>
          Switch to {isLostAndFound ? 'Donation Hub' : 'Lost and Found'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  toggleButton: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
