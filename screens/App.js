import ToDoForm from "../screens/ToDoForm";
import ToDoList from "../screens/ToDoList";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          < ToDoList />
          < ToDoForm />
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