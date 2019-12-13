import TaskComponent from '../components/task.js';
import TaskEditComponent from '../components/task-edit.js';
import {render, replace, RenderPosition} from '../utils/render.js';

export default class TaskController {
  constructor(container) {
    this._container = container;
  }

  render(task) {
    const onEscKeyDown = (evt) => {
      const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

      if (isEscKey) {
        replaceEditToTask();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const replaceEditToTask = () => {
      replace(taskComponent, taskEditComponent);
    };

    const replaceTaskToEdit = () => {
      replace(taskEditComponent, taskComponent);
    };

    const taskComponent = new TaskComponent(task);
    taskComponent.setEditButtonClickHandler(() => {
      replaceTaskToEdit();
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    const taskEditComponent = new TaskEditComponent(task);
    taskEditComponent.setSubmitHandler(replaceEditToTask);

    render(this._container, taskComponent, RenderPosition.BEFOREEND);
  }
}
