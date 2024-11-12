import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';

const TaskCard = ({task}) => {
  const formattedTime = task?.time
    ? moment(task.time).format('hh:mm A, DD MMM YYYY')
    : 'N/A';

  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftSection}>
        <Text style={styles.time}>05:00 pm</Text>
        <Text style={styles.date}>23 Aug</Text>
        <View style={styles.labContainer}>
          <Text style={styles.labText}>{task?.lab_name || 'unknown lab'}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.address}>{task?.address || 'unknown Address'}</Text>
        <View style={styles.row}>
          <Text style={styles.tag}>{task?.patient_reference_type}</Text>
        </View>

        <View style={styles.personContainer}>
          <Text style={styles.personText}>
            {task?.patient_name || 'Unknown Patient'}
          </Text>
          <Text style={styles.sampleRecollection}>
            {task?.sample_recollection ? 'Yes' : ' No'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f1f5f9',
    margin: 10,
    elevation: 2,
  },
  leftSection: {
    width: '30%',
    backgroundColor: '#d2ebff',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  labContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  labText: {
    fontSize: 14,
    color: '#333',
  },
  rightSection: {
    width: '70%',
    padding: 15,
  },
  address: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 5,
    direction: 'rtl',
  },
  tag: {
    backgroundColor: '#394049',
    color: '#ffffff',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  personText: {
    fontSize: 14,
    color: '#333',
    marginRight: 10,
  },
  sampleRecollection: {
    fontSize: 14,
    color: '#333',
    direction: 'rtl',
  },
});

export default TaskCard;
