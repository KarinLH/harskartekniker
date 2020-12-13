import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { scenarioStyles } from "../../Styles/StyleSheet";

export const ItemList = ({ items, navigation }) => {
  const itemList = items.map((item) => {
    console.log("COLOR", item.color);
    return (
      <TouchableOpacity
        key={`${item.id}`}
        onPress={() => {
          navigation.navigate(item.counterStrategy);
        }}
      >
        <Card
          containerStyle={{
            ...scenarioStyles.item,
            borderLeftColor: item.color,
          }}
        >
          <Text>{item.value}</Text>
        </Card>
      </TouchableOpacity>
    );
  });
  return <View style={scenarioStyles.container}>{itemList}</View>;
};
