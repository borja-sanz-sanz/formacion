import { Form } from "./Form"
import { PersonData } from "./PersonData"
import { PersonProvider } from "./PersonProvider"

export const PersonApp = () => {
    return <PersonProvider>
        <Form />
        <PersonData/>
    </PersonProvider>
}