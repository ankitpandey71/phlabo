import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const TaskCard = ({task}) => {
  console.log(task, 'adadada');
  return (
    <View style={styles.taskContainer}>
      {/* Time and Date Section */}
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{task?.time || 'N/A'}</Text>
        <Text style={styles.date}>{task?.date || 'N/A'}</Text>
      </View>

      {/* Task Info Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.location}>
          {task?.location || 'Unknown Location'}
        </Text>
        <Text style={styles.detail}>
          {task?.details || 'No Details Provided'}
        </Text>
      </View>
    </View>
  );
};

// Define PropTypes for better validation
TaskCard.propTypes = {
  task: PropTypes.shape({
    time: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    details: PropTypes.string,
  }),
};

// Define defaultProps to handle missing props
TaskCard.defaultProps = {
  task: {
    time: 'N/A',
    date: 'N/A',
    location: 'Unknown Location',
    details: 'No Details Provided',
  },
};

// StyleSheet for styling the component
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
  date: {
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
  detail: {
    fontSize: 14,
    color: '#555',
  },
});

export default TaskCard;
