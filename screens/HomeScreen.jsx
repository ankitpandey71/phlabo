import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import TaskCard from '../components/TaskCard';
import TaskCount from '../components/TaskCount';
import axios from 'axios';

const HomeScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('https://backend.jaljagar.com/test-api')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header />

      <TaskCount
        assignedCount={data?.data.assigned}
        completedCount={data?.data.completed}
      />

      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
        {data?.data?.appointemnts?.map((task, index) => {
          console.log(task);
          return <TaskCard key={index} task={task} />;
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
