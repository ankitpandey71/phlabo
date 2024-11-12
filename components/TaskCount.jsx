import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TaskCount = ({assignedCount, completedCount}) => (
  <View style={styles.summaryContainer}>
    <View style={styles.card}>
      <Text style={{color: '#ffffff'}}>Assigned</Text>
      <Text style={styles.count}>{assignedCount}</Text>
    </View>
    <View style={styles.card}>
      <Text style={{color: '#ffffff'}}>Completed</Text>
      <Text style={styles.count}>{completedCount}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#2e4451',
    padding: 15,
    borderRadius: 10,
    color: '#ffffff',
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default TaskCount;
