import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const ManageLostItemScreen = () => {
  const [selectedOption, setSelectedOption] = useState('upload');
  const [itemName, setItemName] = useState('');
  const [itemPhoto, setItemPhoto] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [location, setLocation] = useState('');
  const [lostItems, setLostItems] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmission = () => {
    // Handle the submission based on the selected option
    if (selectedOption === 'upload') {
      // Perform the logic for uploading a new item
      const newItem = {
        id: String(Date.now()), // Generate a unique ID (for simplicity, using timestamp)
        name: itemName,
        description: itemDescription,
        location,
        status: 'reported',
      };

      setLostItems([...lostItems, newItem]);

      // Reset the form fields
      setItemName('');
      setItemPhoto('');
      setItemDescription('');
      setLocation('');
    } else if (selectedOption === 'view') {
      // Perform the logic for viewing items
      // This could involve displaying a list of items
      // and allowing the user to manage their own items
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>Location: {item.location}</Text>
      <Text>Status: {item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Manage Lost Items</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.optionButton, selectedOption === 'upload' && styles.selectedOption]}
          onPress={() => handleOptionChange('upload')}
        >
          <Text>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, selectedOption === 'view' && styles.selectedOption]}
          onPress={() => handleOptionChange('view')}
        >
          <Text>View</Text>
        </TouchableOpacity>
      </View>

      {selectedOption === 'upload' && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Item Name"
            onChangeText={(text) => setItemName(text)}
            value={itemName}
          />
          <TextInput
            style={styles.input}
            placeholder="Item Photo URL"
            onChangeText={(text) => setItemPhoto(text)}
            value={itemPhoto}
          />
          <TextInput
            style={styles.input}
            placeholder="Item Description"
            onChangeText={(text) => setItemDescription(text)}
            value={itemDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            onChangeText={(text) => setLocation(text)}
            value={location}
          />
          <Button title="Submit" onPress={handleSubmission} />
        </View>
      )}

      {selectedOption === 'view' && (
        <FlatList
          data={lostItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.itemList}
        />
      )}
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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  optionButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  itemList: {
    width: '100%',
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
});

export default ManageLostItemScreen;
