import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TaskCount = ({assignedCount, completedCount}) => (
  <View style={styles.summaryContainer}>
    <View style={styles.card}>
      <View>
        <Text style={styles.icon}>📋</Text>
      </View>
      <View>
        <Text style={styles.label}>Assigned</Text>
        <Text style={styles.count}>{assignedCount}</Text>
      </View>
    </View>
    <View style={styles.card}>
      <View>
        <Text style={styles.icon}>✅</Text>
      </View>
      <View>
        <Text style={styles.label}>Completed</Text>
        <Text style={styles.count}>{completedCount}</Text>
      </View>
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
    minWidth: 100,
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
  },
  icon: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 5,
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default TaskCount;
