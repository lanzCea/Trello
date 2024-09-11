import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTask] = useState([
    { description: "First Task" },
    { description: "Second Task" },
    // { description: "third Task" },
  ]);

  const [newTask, setNewtask] = useState("");

  const createTask = () => {
    setTask([...tasks, { description: newTask }]);
    //setNewtask("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      {/*the list of task */}

      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />

      {/* New Task input */}
      <TextInput
        value={newTask}
        onChangeText={setNewtask}
        placeholder="New task"
        placeholderTextColor="gray"
        style={styles.imput}
      />
      <Button title="Add Task" onPress={createTask} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    padding: 10,
    borderRadius: 5,
    gap: 5,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    padding: 5,
    marginVertical: 10,
  },
  imput: {
    color: "white",
    padding: 15,
    backgroundColor: "#1D2125",
    borderRadius: 5,
  },
});
