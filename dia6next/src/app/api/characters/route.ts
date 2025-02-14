export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const characterId = searchParams.get("characterId");
  console.log("characterId", characterId);
  try {
    const response = await fetch(
      `https://dragonball-api.com/api/characters/${characterId}`
    );

    const character = await response.json();

    return new Response(JSON.stringify(character), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Se ha producido un error", {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request: Request) {
  const data = await request.json();
  console.log("data", data.characterId);

  const response = await fetch(
    `https://dragonball-api.com/api/characters/${data.characterId}`
  );

  const character = await response.json();

  return new Response(JSON.stringify(character), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// esta constante deberá estar definida en /api/tasks/route.js
const tasks = ["tarea 1", "tarea 2", "tarea 3", "tarea 4"];

//sera consumida desde una página /tasks
//se mostrará un listado de tareas
// se podrá añadir una nueva tarea
// tendremos un input y un boton de guardar para ello
