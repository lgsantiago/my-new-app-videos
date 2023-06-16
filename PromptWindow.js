import { Alert } from "react-native";
import { storeData, getItem } from "./helpers/storageHelper";

const PromptWindow = ({ setName }) => {
    Alert.prompt(
        "Welcome",
        "Please enter your name:",
        (name) => setName(name),
        "plain-text",
        null,
        "default"
    );
};

export default PromptWindow;
