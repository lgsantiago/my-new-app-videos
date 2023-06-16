import { Text, StyleSheet, Link } from "react-native";

const GettingStarted = () => (
  <>
    <Text style={styles.firstTime}>First Time Login</Text>
    <Text style={styles.getStarted}>Getting Started Guide</Text>
  </>
);

const styles = StyleSheet.create({
  firstTime: {
    fontSize: "18px",
    marginBottom: 20,
  },
  getStarted: {
    fontSize: "18px",
    marginBottom: 20,
    textDecoration: "underline",
  },
});

export default GettingStarted;
