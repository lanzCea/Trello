import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View, TextInput } from "react-native";
import { useObject, useRealm } from "@realm/react";
import { Task } from "../models/Task";
import { BSON } from "realm";
import React, { useState } from "react";
import { update } from "lodash";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));
  const [updatedDescription, setUpdateDescription] = useState(
    task?.description
  );
  const realm = useRealm();

  const updateDescription = () => {
    if (!task) {
      return;
    }
    realm.write(() => {
      task.description = updatedDescription;
    });
  };

  if (!task) {
    return <Text>Not foud</Text>;
  }

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: "Task details" }} />
      <TextInput
        value={updatedDescription}
        onChangeText={setUpdateDescription}
        onEndEditing={updateDescription}
        style={{ color: "white", fontSize: 20 }}
      />
    </View>
  );
};

export default TaskDetails;
