import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ActionCard = (): JSX.Element => {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View>
      <Text>ActionCard</Text>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({});
