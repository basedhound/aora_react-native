import { StyleSheet, Text, View } from "react-native";
import { Slot } from "expo-router";

const RootLayout = () => {
  return (
    <>
    Header
      <Slot />
      Footer
    </>
  );
};

export default RootLayout;
