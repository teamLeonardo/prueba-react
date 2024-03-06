import { FormInspection } from "../../Forms/FormInspection"
import { AppLayout } from "../../layout/AppLayout"

export const AddPerson = () => {
    return (
        <AppLayout title={"Agrega un nueva Personal"}>
            <FormInspection typeForm={"add"} />
        </AppLayout>
    )
}

