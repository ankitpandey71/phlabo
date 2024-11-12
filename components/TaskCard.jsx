import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

const TaskCard = ({task}) => {
  console.log(task?.time, 'timeeee');
  const formattedTime = task?.time
    ? moment(task.time).format('hh:mm A, DD MMM YYYY')
    : 'N/A';

  return (
    <View style={styles.taskContainer}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>05:00 pm</Text>
        <Text style={styles.time}>23 Aug</Text>
        <Text style={styles.labName}>{task?.lab_name || 'Unknown Lab'}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.location}>
          {task?.address || 'Unknown Address'}
        </Text>
        <Text style={styles.patientName}>
          {task?.patient_name || 'Unknown Patient'}
        </Text>
        <Text style={styles.referenceType}>
          {task?.patient_reference_type || 'N/A'}
        </Text>
        <Text style={styles.sampleRecollection}>
          {task?.sample_recollection ? 'Yes' : 'No'}
        </Text>
      </View>
    </View>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    time: PropTypes.string,
    lab_name: PropTypes.string,
    sample_recollection: PropTypes.bool,
    address: PropTypes.string,
    patient_name: PropTypes.string,
    patient_reference_type: PropTypes.string,
  }),
};

TaskCard.defaultProps = {
  task: {
    time: 'N/A',
    lab_name: 'Unknown Lab',
    sample_recollection: false,
    address: 'Unknown Address',
    patient_name: 'Unknown Patient',
    patient_reference_type: 'N/A',
  },
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#FFF',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  timeContainer: {
    alignItems: 'center',
    paddingRight: 15,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  labName: {
    fontSize: 14,
    color: '#888',
  },
  infoContainer: {
    flex: 1,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  patientName: {
    fontSize: 14,
    color: '#555',
  },
  referenceType: {
    fontSize: 14,
    color: '#555',
  },
  sampleRecollection: {
    fontSize: 14,
    color: '#555',
  },
});

export default TaskCard;
