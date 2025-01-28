import { useEffect, useState } from "react";

export const Temporizador = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [intervalState, setIntervalState] = useState<any>(null)

  useEffect(() => {
    const handleInterval = (activo: boolean) => {
        console.log('activo', activo)
      if (!activo) {
        clearInterval(intervalState);
      }

      if (activo) {
        setIntervalState(setInterval(() => {
          setSegundos((s) => s + 1);
        }, 1000));
      }
    };
    console.log('modificado activo', activo)
    handleInterval(activo);
  }, [activo]);

  return (
    <div>
      <h1>Tiempo: {segundos} segundos</h1>
      <div>Activo {JSON.stringify(activo)}</div>
      <button onClick={() => setActivo(true)}>Iniciar</button>
      <button onClick={() => setActivo(false)}>Detener</button>
    </div>
  );
};
