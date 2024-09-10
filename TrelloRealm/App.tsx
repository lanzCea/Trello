import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TaskListItem from "./src/components/TaskListItem";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 20 }}>
        <TaskListItem task={{ description: "Fist Task" }} />
        <TaskListItem task={{ description: "second Task" }} />
        <TaskListItem task={{ description: "third Task" }} />

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
