import { Todo } from 'src/classes/todo';

export class AppUtil {
  clearAll(todo: Todo): Todo {
    return (todo = null);
  }
}
