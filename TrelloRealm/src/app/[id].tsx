import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: "Task details" }} />
      <Text style={{ color: "white", fontSize: 20 }}>Id : {id}</Text>
    </View>
  );
};

export default TaskDetails;
