import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center my-3 items-">
      <h1 className="text-center text-3xl font-semibold">Tareas</h1>
      <Main />
    </div>
  );
}
