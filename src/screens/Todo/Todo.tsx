import React, { FC, useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Button from '../../components/Button/Button';
import styles from './styles';
import { RootStackParamList } from '../../navigations/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TodoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type TodoItem = {
  id: string;
  title: string;
};

const Todo: FC = () => {
  const navigation = useNavigation<TodoScreenNavigationProp>();
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const getTodos = async () => {
    try {
      const data = await AsyncStorage.getItem('todos');

      if (data) {
        setTodos(JSON.parse(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const updatedTodos = todos.filter(item => item.id !== id);
      setTodos(updatedTodos);
      await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      getTodos();
    }, []),
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View>
            <View style={styles.todoItem}>
              <Text>{item?.title}</Text>
              <Button
                title="Delete"
                onPress={() => deleteTodo(item.id)}
                style={styles.deleteButton}
              />
            </View>
          </View>
        )}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Add Todo"
          onPress={() => navigation.navigate('AddTodo')}
          style={styles.addButton}
        />
      </View>
    </SafeAreaView>
  );
};

export default Todo;
