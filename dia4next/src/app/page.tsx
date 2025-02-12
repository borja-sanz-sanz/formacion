import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Estados } from "@/components/Estados";
import { Flex } from "@/components/Flex";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Estados />
      <Flex />

      <Button size="sm" variant="">
        Boton sm
      </Button>

      <Button size="md" variant="primary">
        Boton md
      </Button>

      <Button size="lg" variant="secondary">
        Boton lg
      </Button>
      <Card />
      <Card direction={"vertical"} />

      <Card direction={"vertical"} variant={"light"} />
      <Card direction={"vertical"} variant={"dark"} />

      <div className={clsx({ test: true, test2: false })}>test</div>
      {/*    <Card direction="vertical" variant="light"></Card>
      <Card direction="horizontal" variant="dark"></Card> */}
    </div>
  );
}

//Realizar un componente card
//prop direction vertical u horizontal
// variant: dos variantes con distintos colores
