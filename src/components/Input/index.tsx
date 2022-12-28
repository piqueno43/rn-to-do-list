import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  handleAddTask: () => void;
} & TextInput['props']

export function Input({ handleAddTask, ...props }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        {...props}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}