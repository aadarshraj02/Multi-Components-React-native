import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = (): JSX.Element => {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Learning React Native CLI</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G',
          }}></Image>
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            React Native is a popular open-source framework developed by
            Facebook for building mobile applications using JavaScript and
            React. It allows developers to create apps for both Android and iOS
            platforms with a single codebase, using native components for
            performance optimization. React Native uses the same design
            principles as React, such as reusable components and a declarative
            UI, making it easier for web developers to transition into mobile
            app development.{' '}
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://github.com/aadarshraj02')}>
            <Text style={styles.socialLink}>About Me...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  card: {
    height: 400,
    width: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#034b86',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {},
  cardImage: {
    height: 200,
  },
  bodyContainer: {},
  footerContainer: {},
  socialLink: {},
});
