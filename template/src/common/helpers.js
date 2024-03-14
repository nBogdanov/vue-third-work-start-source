import { DAY_IN_MILLISEC, TAG_SEPARATOR } from "./constants";
import timeStatuses from "./enums/timeStatuses";
import taskStatuses from "./enums/taskStatuses";

// Функция, которая принимает строку с метками и разделяет её на массив по определённому идентификатору:
export const getTagsArrayFromString = (tags) => {
  const array = tags.split(TAG_SEPARATOR);
  return array.slice(1, array.length);
};

// Функция будет получать первым параметром срок выполнения задачи (дедлайн), сравнивать его с текущим временем и возвращать статус задачи по времени
export const getTimeStatus = (dueDate) => {
  if (!dueDate) {
    return "";
  }
  const currentTime = +new Date();
  const taskTime = Date.parse(dueDate);
  const timeDelta = taskTime - currentTime;
  if (timeDelta > DAY_IN_MILLISEC) {
    return "";
  }
  return timeDelta < 0 ? timeStatuses.DEADLINE : timeStatuses.EXPIRED;
};

// Функция, которая нормализует задачи, приходящие с сервера
export const normalizeTask = (task) => {
  return {
    ...task,
    status: task.statusId ? taskStatuses[task.statusId] : "",
    timeStatus: getTimeStatus(task.dueDate),
  };
};
