import React, { FC, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/TextInput/TextInput';
import styles from './styles';
import Button from '../../components/Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/types';
type TodoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const AddTodo: FC = () => {
  const [toDo, setToDo] = useState('');
  const navigation = useNavigation<TodoScreenNavigationProp>();

  const addTodo = async () => {
    if (!toDo.trim()) {
      Alert.alert('Please add todo');
      return;
    }
    try {
      const existingTodo = await AsyncStorage.getItem('todos');
      const todos = existingTodo ? JSON.parse(existingTodo) : [];
      const newTodo = {
        id: Date.now(),
        title: toDo,
      };
      todos.push(newTodo);
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
      setToDo('');
      navigation.goBack();
      console.log('Todo Saved');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Add Todo</Text>

      <View style={styles.inputContainer}>
        <Input
          value={toDo}
          onChangeText={setToDo}
          placeholder="Enter your todo"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Save"
          onPress={() => {
            addTodo();
          }}
          style={styles.addButton}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddTodo;
