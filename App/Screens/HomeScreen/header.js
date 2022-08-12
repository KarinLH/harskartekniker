import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";
import { cardStyles, assetStyles, textStyles } from "../../Styles/StyleSheet";
import translations from "../../translations";

const { headerText } = textStyles;

export const MiunHeader = () => (
  <Card containerStyle={cardStyles.header}>
    <Text style={headerText}>{translations.t("miunHeaderText")}</Text>
  </Card>
);
