const tasks = ["tarea 1", "tarea 2", "tarea 3", "tarea 4"];

export async function GET(request: Request) {
  return new Response(JSON.stringify(tasks), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const data = await request.json();

  console.log("data:", data);

  return new Response(JSON.stringify([...tasks, data.newTask]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
