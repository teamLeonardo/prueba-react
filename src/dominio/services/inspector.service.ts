import { InputsInspector } from "../models/inspector"

const registerInspector = (inspector: InputsInspector) => {
    return {
        name: inspector.name,
        surname: inspector.surname,
        email: inspector.email,
        phone: inspector.phone,
        "typeDoc": inspector.typeDoc,
        "numDoc": inspector.numDoc,
    }
}


export const inspectorService = {
    registerInspector
}
