import { FormInspection } from "../../Forms/FormInspection"
import { AppLayout } from "../../layout/AppLayout"

export const EditPerson = () => {
    return (
        <AppLayout title={"Editar una Personal"}>
            <FormInspection typeForm={"edit"} />
        </AppLayout>
    )   
}

