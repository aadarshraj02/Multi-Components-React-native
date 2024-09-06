import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
