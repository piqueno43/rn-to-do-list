import Logo from '../../assets/logo.png'
import { Alert, FlatList, Image, View } from 'react-native'
import { styles } from './styles'
import { Input } from '../components/Input'
import { CountTask } from '../components/CountTasks'
import { EmptyTask } from '../components/EmptyTask'
import { useState } from 'react'
import { Task } from '../components/Task'

type Task = {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])
  const totalCreated = tasks.length
  const totalFinished = tasks.filter(task => task.done).length



  function handleAddTask() {
    if (task.length === 0) {
      return Alert.alert('Opa', 'Digite uma tarefa para adicionar')
    }

    if (tasks.find(taskItem => taskItem.title === task)) {
      return Alert.alert('Opa', 'Você já tem essa tarefa cadastrada')
    }

    const data = {
      id: new Date().getTime(),
      title: task,
      done: false,
    }
    setTasks(prevState => [...prevState, data])
    setTask('')
  }

  function handleRemoveTask(id: number) {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }

  function handleTaskDone(id: number) {
    const newTasks = tasks.map(task => task.id === id ? {
      ...task,
      done: !task.done
    } : task)
    setTasks(newTasks)
  }

  return (
    <View style={
      styles.container
    }>
      <View
        style={styles.content}
      >
        <Image
          source={Logo}
          style={styles.logo}
        />
        <Input
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={task}
          onChangeText={setTask}
          handleAddTask={handleAddTask}
        />
        <CountTask created={totalCreated} finished={totalFinished} />
        {totalCreated === 0 && <EmptyTask />}
        {<FlatList
          data={tasks}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              task={item}
              handleRemoveTask={handleRemoveTask}
              handleTaskDone={handleTaskDone}
            />
          )}
          style={{ marginTop: 32 }}
          showsVerticalScrollIndicator={false}
        />

        }
      </View>
    </View>
  )
}