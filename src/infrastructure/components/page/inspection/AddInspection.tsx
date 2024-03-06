import { FormInspection } from "../../Forms/FormInspection"
import { AppLayout } from "../../layout/AppLayout"

export const AddInspection = () => {
    return (
        <AppLayout title={"Agrega un nuevo Inspección"}>
            <FormInspection typeForm={"add"} />
        </AppLayout>
    )
}

