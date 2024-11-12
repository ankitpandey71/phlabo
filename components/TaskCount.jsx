import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TaskCount = ({assignedCount, completedCount}) => (
  <View style={styles.summaryContainer}>
    <View style={styles.card}>
      <Text style={styles.count}>{assignedCount}</Text>
      <Text>Assigned</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.count}>{completedCount}</Text>
      <Text>Completed</Text>
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
    backgroundColor: '#E0F7FA',
    padding: 15,
    borderRadius: 10,
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TaskCount;
