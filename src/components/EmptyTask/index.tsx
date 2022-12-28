import { View, Text, Image } from "react-native"
import { styles } from "./styles"

import Clip from '../../../assets/clipboard.png';

export function EmptyTask() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={Clip}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[
          styles.text,
          { fontSize: 24, fontWeight: 'bold' }
        ]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={[styles.text]}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}