import { Text, View } from 'react-native'
import { styles } from './styles'
type LabelProps = {
  count: number
}

export function Label({ count }: LabelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{count}</Text>
    </View>
  )
}