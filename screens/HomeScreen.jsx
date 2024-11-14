import {View, Text, FlatList} from 'react-native';
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

      <FlatList
        data={data?.data?.appointemnts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <TaskCard task={item} />}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

export default HomeScreen;
