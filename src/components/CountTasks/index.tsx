import { View, Text } from "react-native";
import { styles } from "./styles";
import { Label } from "../Label";

type CountTaskProps = {
  created: number;
  finished: number;
};

export function CountTask({ created = 0, finished = 0 }: CountTaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.countView}>
          <Text style={styles.createdText}>
            Criadas
          </Text>
          <Label count={created} />
        </View>
        <View style={styles.countView}>
          <Text style={styles.finishedText}>
            Concluídas
          </Text>
          <Label count={finished} />
        </View>
      </View>
    </View>
  )
}