import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ListItem bgColor="#2aa198" text="Cyan #2aa198" />
      </View>
    </SafeAreaView>
  );
};

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.text} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  listItem: {
    backgroundColor: 'pink',
    marginVertical: 10,
    paddingVertical: 10,
  },
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
export default App;
