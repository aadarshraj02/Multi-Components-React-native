import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Place</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/5324312/pexels-photo-5324312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Key Monastery</Text>
          <Text style={styles.cardLabel}>Key Monastery, Spiti Valley, HP</Text>
          <Text style={styles.cardDescription}>
            The biggest centre of Buddhist learning in Spiti Valley, Key
            Monastery is over 1000-year-old. It is the oldest training centre
            for Lamas. It is located at a height of 13,668 feet above mean sea
            level in Lahaul.
          </Text>
          <Text style={styles.cardFooter}>A dream Place for Travelers!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  cardLabel: {
    color: '#1d1d1d',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
  },
  cardDescription: {
    color: '#5a5a5a',
    fontSize: 12,
    marginBottom: 8,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#868686',
    textAlign: 'center',
  },
});
