import { Heading } from "./Heading";
import { Section } from "./Section";

export const Context = () => {
    
  return (
    <>
      <Section level={1}>
        <Heading></Heading>
        <Heading></Heading>
        <Heading></Heading>
        <Heading></Heading>
      </Section>
      <Section level={4}>
        <Heading></Heading>
        <Heading></Heading>
        <Heading></Heading>
      </Section>
      <Section level={2}>
        <Heading></Heading>
        <Heading></Heading><Heading></Heading>
      </Section>
    </>
  );
};
