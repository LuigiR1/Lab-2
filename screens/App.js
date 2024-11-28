import React, { useState } from "react";
import ToDoForm from "../screens/ToDoForm";
import ToDoList from "../screens/ToDoList";
import { StyleSheet, View } from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([
    "Wash Truck",
    "Buy Groceries",
    "Walk Dog",
  ]);

  const addTask = (taskText) => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
