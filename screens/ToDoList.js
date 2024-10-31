import React from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task, styles.incomplete]}>
            <Text style={styles.taskText}>{task}</Text>
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
  },
  completed: {
    backgroundColor: '#FF9800',
  },
  incomplete: {
    backgroundColor: '#f0f0f0',
  },
  taskText: {
    fontSize: 16,
  },
});
