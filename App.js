import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { uid: Math.random().toString(), goal: goalTitle }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        // keyExtractor gets a custom named key/id from data
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={itemData => <GoalItem goal={itemData.item.goal} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});
