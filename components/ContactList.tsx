import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'John Doe',
      status: 'active',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      uid: 2,
      name: 'Jane Smith',
      status: 'inactive',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      uid: 3,
      name: 'Alice Johnson',
      status: 'active',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      uid: 4,
      name: 'Bob Brown',
      status: 'inactive',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      uid: 5,
      name: 'Charlie Davis',
      status: 'active',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      uid: 6,
      name: 'David Evans',
      status: 'inactive',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      uid: 7,
      name: 'Eva Green',
      status: 'active',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      uid: 8,
      name: 'Frank Harris',
      status: 'inactive',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      uid: 9,
      name: 'Grace Lewis',
      status: 'active',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      uid: 10,
      name: 'Henry White',
      status: 'inactive',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <View>
      <Text>ContactList</Text>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({});
