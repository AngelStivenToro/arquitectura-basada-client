"use client";

interface Tasks {
  id: number;
  task: string;
  status: string;
}

const CardTask = (task : any) => {

console.log(task)

  return (<div className="bg-divider flex w-full rounded-large">
    <p>{task.id} - {task.task}</p>
    <p>{task.status}</p>
  </div>);
};

export default CardTask;
