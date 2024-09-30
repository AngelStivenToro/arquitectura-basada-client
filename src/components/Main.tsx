"use client";

import { Button, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import CardTask from "./CardTask";
import InputForm from "./forms/InputForm";
import Icon from "./ui/Icon";
import SelectForm from "./forms/SelectForm";

interface Tasks {
  id: number;
  task: string;
  status: string;
}

const Main = () => {
  const [showAddTask, setshowAddTask] = useState(false);
  const [newNameTask, setnewNameTask] = useState<string | null>(null);
  const [taskStart, setTaskStart] = useState<Tasks[]>([]);
  const [taskProgress, setTaskProgress] = useState<Tasks[]>([]);
  const [taskComplete, setTaskComplete] = useState<Tasks[]>([]);
  const [tasksAll, setTasksAll] = useState<Tasks[]>([]);

  const filterTask = (tasks: Tasks[]) => {
    setTaskStart(tasks.filter((task) => task.status == "NOT_START"));
    setTaskProgress(tasks.filter((task) => task.status == "IN_PROGRESS"));
    setTaskComplete(tasks.filter((task) => task.status == "COMPLETE"));
  };

  useEffect(() => {
    filterTask(tasksAll);
  }, [tasksAll]);

  return (
    <div className="flex justify-between gap-4 w-[90%] max-w-[1000px] mx-auto">
      <div className="flex flex-col w-full gap-2">
        <p className="text-center font-semibold">Sin iniciar</p>
        <div className="bg-foreground-200 justify-center items-center p-2 rounded-md flex w-full">
          {taskStart.length < 1 && (
            <p className="text-default-400 select-none text-lg">
              Sin tareas aún
            </p>
          )}
          {taskStart.length > 0 && (
            <div className="flex flex-col justify-center items-center w-full gap-2">
              {taskStart.map((taskItem, i) => (
                <div
                  key={i}
                  className="bg-soft-blue bg-opacity-20 flex w-full p-2 rounded-md"
                >
                  <p className="w-full">
                    {taskItem.id} - {taskItem.task}
                  </p>
                  <SelectForm name="status" onlySelect>
                    <SelectItem key="IN_PROGRESS" textValue="En progreso">
                      En progreso
                    </SelectItem>
                    <SelectItem key="COMPLETE" textValue="Completado">
                      Completado
                    </SelectItem>
                  </SelectForm>
                </div>
              ))}
            </div>
          )}
        </div>
        {!showAddTask && (
          <button
            onClick={() => setshowAddTask(true)}
            className="w-full bg-primary-100 text-xl font-semibold rounded-lg"
          >
            +
          </button>
        )}
        {showAddTask && (
          <>
            <div className="bg-foreground-200 rounded-large p-2 w-full">
              <InputForm
                name="task_name"
                label={{ value: "Tarea", required: false }}
                placeholder="Ingrese tarea"
                onChange={({ value }) =>
                  value ? setnewNameTask(String(value)) : setnewNameTask(null)
                }
              />
              <Button
                size="sm"
                isDisabled={!newNameTask}
                endContent={<Icon icon="floppy" />}
                className="bg-primary-100 flex mx-auto"
                onClick={() => {
                  if (newNameTask) {
                    setTasksAll([
                      ...tasksAll,
                      {
                        id: tasksAll.length + 1,
                        task: newNameTask,
                        status: "NOT_START",
                      },
                    ]);
                  }
                  setshowAddTask(!showAddTask);
                }}
              >
                Guardar
              </Button>
            </div>
            <Button
              endContent={<Icon icon="x-lg" />}
              size="sm"
              className="bg-soft-red flex w-full mx-auto"
              onClick={() => setshowAddTask(false)}
            >
              Cerrar
            </Button>
          </>
        )}
      </div>
      <div className="flex flex-col w-full gap-2">
        <p className="text-center font-semibold text-soft-blue">En progreso</p>
        <div className="bg-foreground-200 p-2 rounded-md flex w-full">
          {taskProgress.length < 1 && (
            <p className="text-default-400 select-none text-lg">
              Sin tareas aún
            </p>
          )}
          {taskProgress.length > 0 &&
            taskProgress.map((taskItem, i) => (
                <div
                key={i}
                className="bg-soft-blue bg-opacity-20 flex w-full p-2 rounded-md"
              >
                <p className="w-full">
                  {taskItem.id} - {taskItem.task}
                </p>
                <SelectForm name="status" onlySelect>
                  <SelectItem key="IN_PROGRESS" textValue="En progreso">
                    En progreso
                  </SelectItem>
                  <SelectItem key="COMPLETE" textValue="Completado">
                    Completado
                  </SelectItem>
                </SelectForm>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <p className="text-center font-semibold text-green">Completado</p>
        <div className="bg-foreground-200 p-2 rounded-md flex w-full">
          {taskComplete.length < 1 && (
            <p className="text-default-400 select-none text-lg">
              Sin tareas aún
            </p>
          )}
          {taskComplete.length > 0 &&
            taskComplete.map((taskItem, i) => (
              <div key={i} className="bg-divider flex w-full rounded-large">
                <p>
                  {taskItem.id} - {taskItem.task}
                </p>
                <p>{taskItem.status}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
