import { View, StyleSheet, SafeAreaView } from "react-native";
import TaskList from "./TaskList";
import { LinearGradient } from "expo-linear-gradient";

export default function TaskBoard() {
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#8711c1", "#2472fc"]}
        style={styles.absoluteFill}
      />

      <SafeAreaView>
        <TaskList />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  absoluteFill: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 },
});
