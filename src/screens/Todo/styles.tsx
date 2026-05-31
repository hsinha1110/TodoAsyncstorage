import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 20,
  },
  todoItem: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: '40%',
  },
  addButton: {
    padding: 20,
    alignSelf: 'flex-end',
  },
  deleteButton: {
    width: 70,
    padding: 10,
    backgroundColor: 'red',
  },
  noTodo: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  noTodoTitle: {
    fontSize: 20,
    fontWeight: '400',
  },
});
export default styles;
