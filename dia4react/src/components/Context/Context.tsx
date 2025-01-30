import { Heading } from "./Heading";
import { Section } from "./Section";

export const Context = () => {
    
  return (
    <>
      <Section level={5}>
        <Heading></Heading>
        <Heading></Heading>
        <Heading></Heading>
        <Heading></Heading>
      </Section>
      <Section level={2}>
        <Heading></Heading>
        <Heading></Heading>
        <Heading></Heading>
      </Section>
      <Section level={3}>
        <Heading></Heading>
        <Heading></Heading><Heading></Heading>
      </Section>
    </>
  );
};
