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
            level in Lahaul, Spiti district of Himachal Pradesh in north India.
          </Text>
          <Text style={styles.cardFooter}>A dream Place for Travelers!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  cardElevated: {},
  cardImage: {
    height: 200,
  },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});
