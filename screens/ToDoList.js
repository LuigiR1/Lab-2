import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';

export default function ToDoList({ tasks }) {
  const [completedTasks, setCompletedTasks] = useState([]); 

  
  const toggleTaskCompletion = (index) => {
    setCompletedTasks((prevCompleted) => {
      if (prevCompleted.includes(index)) {
        return prevCompleted.filter((i) => i !== index); 
      } else {
        return [...prevCompleted, index]; 
      }
    });
  };

  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index} onPress={() => toggleTaskCompletion(index)}>
          <View
            style={[
              styles.task,
              completedTasks.includes(index) ? styles.completed : styles.incomplete,
            ]}
          >
            <Text
              style={[
                styles.taskText,
                completedTasks.includes(index) ? styles.completedText : styles.incompleteText,
              ]}
            >
              {task}
            </Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5,
    borderRadius: 5,
  },
  completed: {
    backgroundColor: '#D4EDDA', 
  },
  incomplete: {
    backgroundColor: '#f8d7da', 
  },
  taskText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#6c757d',
  },
  incompleteText: {
    color: '#000',
  },
});

