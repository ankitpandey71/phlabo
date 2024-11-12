import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.hamburgerIcon}>
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </View>

        <Text style={styles.logoText}>
          <Text style={styles.logoAccent}>t</Text>heranize
        </Text>
      </View>

      <View style={styles.rightSection}>
        <View style={styles.notificationIcon}>
          <Text style={styles.bell}>🔔</Text>
        </View>

        <View style={styles.gaAvatar}>
          <Text style={styles.gaText}>GA</Text>
        </View>
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
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburgerIcon: {
    marginRight: 15,
  },
  hamburgerLine: {
    width: 20,
    height: 2,
    backgroundColor: '#394049',
    marginVertical: 2,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  logoAccent: {
    color: '#00bcd4',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    width: 36,
    height: 36,
    backgroundColor: '#e0e0e0',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  bell: {
    fontSize: 18,
  },
  gaAvatar: {
    width: 36,
    height: 36,
    backgroundColor: '#00bcd4',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
