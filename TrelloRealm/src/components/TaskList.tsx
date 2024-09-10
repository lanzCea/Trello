import { View, Text, StyleSheet, FlatList } from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";

export default function TaskList() {
  const [task, setTask] = useState([
    { description: "First Task" },
    { description: "Second Task" },
    { description: "third Task" },
  ]);
  return (
    <View style={{ backgroundColor: "#101112", padding: 10, borderRadius: 5 }}>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 22,
          padding: 5,
          marginVertical: 10,
        }}
      >
        Todo
      </Text>
      {/*the list of task */}

      <FlatList
        data={task}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />

      {/* New Task inpu */}
    </View>
  );
}
