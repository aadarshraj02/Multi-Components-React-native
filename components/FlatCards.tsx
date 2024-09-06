import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
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
  container: {},
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardOne: {
    backgroundColor: '#ef5354',
  },
});
