import { FaCheckSquare } from "react-icons/fa"
import { ButtonUi } from "../../UI/ButtonUi"
import { AppLayout } from "../../layout/AppLayout"
import { TextUI } from "../../UI/TextUi"
import { SubmitHandler, useForm } from "react-hook-form"
import { InputsInspector } from "../../../../dominio/models/inspector"
import { useMyInfo } from "../../context/ctxMyInfo"


export const InfoInspector = () => {
    const { state, dispatch, addDatos, editDatos } = useMyInfo();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputsInspector>()

    const onSubmit: SubmitHandler<InputsInspector> = () => {
        if (!state.created_at) {
            addDatos()
        } else {
            editDatos()
        }

    }
    return (
        <AppLayout title={"Mi informacion de inspector"}>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
                <TextUI
                    isError={!!errors.typeDoc}
                    mssError="Este campo es requerido"
                    labelTitle="Tipo Documento Identidad"
                    inputProps={{ "placeholder": "Escribe tus datos... " }}
                    register={register('typeDoc', {
                        required: true,
                        value: state.typeDoc,
                        onChange: (event) => {
                            dispatch({ type: "CHANGE", payload: { typeDoc: event.target.value } })
                        }
                    })}
                />
                <TextUI
                    isError={!!errors.numDoc}
                    mssError="Este campo es requerido"
                    labelTitle="Número Documento Identidad"
                    inputProps={{ "placeholder": "Escribe tus datos... ", type: "number" }}
                    register={register('numDoc', {
                        required: true,
                        valueAsNumber: true,
                        value: state.numDoc,
                        onChange: (event) => {
                            dispatch({ type: "CHANGE", payload: { numDoc: event.target.value } })
                        }
                    })}
                />
                <TextUI
                    isError={!!errors.surname}
                    mssError="Este campo es requerido"
                    labelTitle="Apellidos"
                    inputProps={{ "placeholder": "Escribe tus datos... " }}
                    register={register('surname', {
                        required: true,
                        value: state.surname,
                        onChange: (event) => {
                            dispatch({ type: "CHANGE", payload: { surname: event.target.value } })
                        }
                    })}
                />
                <TextUI
                    isError={!!errors.name}
                    mssError="Este campo es requerido"
                    labelTitle="Nombres"
                    inputProps={{ "placeholder": "Escribe tus datos... " }}
                    register={register('name', {
                        required: true,
                        value: state.name,
                        onChange: (event) => {
                            dispatch({ type: "CHANGE", payload: { name: event.target.value } })
                        }
                    })}
                />
                <TextUI
                    isError={!!errors.phone}
                    mssError="Este campo es requerido"
                    labelTitle="Telefono Celular"
                    inputProps={{ "placeholder": "Escribe tus datos... " }}
                    register={register('phone', {
                        required: true,
                        value: state.phone,
                        onChange: (event) => {
                            dispatch({ type: "CHANGE", payload: { phone: event.target.value } })
                        }
                    })}
                />
                <TextUI
                    isError={!!errors.email}
                    mssError="Este campo es requerido"
                    labelTitle="Email"
                    inputProps={{ "placeholder": "Escribe tus datos... " }}
                    register={register('email', {
                        required: true,
                        value: state.email,
                        onChange: (event) => {
                            dispatch({ type: "CHANGE", payload: { email: event.target.value } })
                        }
                    })}
                />
                <ButtonUi
                    type="submit"
                    className="btn-success w-[300px] text-white"
                >
                    <FaCheckSquare size={20} />
                    {
                        !state.created_at ? "Guardar" : "Actualizar"
                    }

                </ButtonUi>
            </form>

        </AppLayout>
    )
}

