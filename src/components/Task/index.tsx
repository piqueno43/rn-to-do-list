import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import Trash from "../../../assets/trash.png";
import { styles } from "./styles";

type TaskProps = {
  task: {
    id: number;
    title: string;
    done: boolean;
  };
  handleRemoveTask: (id: number) => void;
  handleTaskDone: (id: number) => void;
};

export function Task({ task, handleRemoveTask, handleTaskDone }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.unFinishedContainer}
        activeOpacity={0.7}
        onPress={() => handleTaskDone(task.id)}
      >
        {task.done && (
          <View style={styles.finishedContainer}>
            <Text style={styles.finishedText}>
              ✓
            </Text>
          </View>
        )}
        {!task.done && (
          <View style={styles.unFinishedContainer} />
        )}

      </TouchableOpacity>
      {task.done ? (
        <Text style={[
          styles.title,
          styles.titleDone,
        ]}>
          {task.title}
        </Text>
      ) : (
        <Text style={styles.title}>
          {task.title}
        </Text>
      )}
      <View style={styles.trashContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => {
            if (task.done) {
              Alert.alert("Remover item", "Tem certeza que você deseja remover esse item?", [
                {
                  text: "Não",
                  style: "cancel"
                },
                {
                  text: "Sim",
                  onPress: () => handleRemoveTask(task.id)
                }
              ])
            } else {
              handleRemoveTask(task.id)
            }
          }}
        >
          <Image
            source={Trash}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View >
  )
}