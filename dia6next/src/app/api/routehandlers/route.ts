export async function GET(request: Request, { params }) {
  const { searchParams } = new URL(request.url);
  const param1 = searchParams.get("param1");
  const param2 = searchParams.get("param2");

  console.log("request", request);
  console.log("param1", param1);
  console.log("param2", param2);

  const datosDePrueba = [
    { name: "test", age: 10 },
    { name: "test", age: 10 },
    { name: "test", age: 10 },
  ];

  return new Response(JSON.stringify(datosDePrueba), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  const name = data.name;
  console.log("recibiendo peticion post", name);

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
