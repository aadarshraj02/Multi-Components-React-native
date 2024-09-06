import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Contact = {
  uid: number;
  name: string;
  status: 'active' | 'inactive';
  imageUrl: string;
};

const ContactList = (): JSX.Element => {
  const contacts: Contact[] = [
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
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <Text style={styles.username}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  container: {},
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: '500',
  },
  userStatus: {
    color: 'gray',
  },
});
