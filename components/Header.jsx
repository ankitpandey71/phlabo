import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>theranize</Text>
      </View>
      <View style={styles.gaSection}>
        <View style={styles.emptyBox}></View>
        <Text style={styles.gaText}>GA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  headerSection: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  gaSection: {marginTop: 20, marginLeft: 20, flexDirection: 'row'},
  emptyBox: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
  },
  gaText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
  },
});

export default Header;
