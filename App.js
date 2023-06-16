import { StyleSheet, View, Image } from "react-native";
import Greeting from "./Greeting";
import GettingStarted from "./GettingStarted";
import { storeData, getItemFor } from "./helpers/storageHelper";
import { useEffect, useState } from "react";

const HAS_LAUNCHED = "HAS_LAUNCHED";

export default App = () => {
  const [hasLaunched, setHasLaunched] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const hasLaunched = await getItemFor(HAS_LAUNCHED);
      if (hasLaunched) {
        setHasLaunched(true);
      } else {
        await storeData(HAS_LAUNCHED, "true");
      }
    };

    getData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/myNewApp.png")}
        style={{ width: "100%", height: 300 }}
      />

      {hasLaunched ? <Greeting /> : <GettingStarted />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
