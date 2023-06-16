import { StyleSheet, Text, View } from "react-native";

const Greeting = () => {
  return (
    <>
      <Text style={styles.greeting}>{"Superhero of the day"}</Text>

      <View></View>
    </>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Greeting;
