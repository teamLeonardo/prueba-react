import { FormInspection } from "../../Forms/FormInspection"
import { AppLayout } from "../../layout/AppLayout"

export const EditInspection = () => {
    return (
        <AppLayout title={"Editar una Inspección"}>
            <FormInspection typeForm={"edit"} />
        </AppLayout>
    )   
}

