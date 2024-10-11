import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
  } from 'react-native';
  
  export default function ToDoList() {
    return (
      <ScrollView>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Wash Vehicle</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.task}>
            <Text style={styles.taskText}>Finish Assignment</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Go Grocery Shopping</Text>
          </View>
        </Pressable>
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
    taskText: {
      fontSize: 16,
    },
  });