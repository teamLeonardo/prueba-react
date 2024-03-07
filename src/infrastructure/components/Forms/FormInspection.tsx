import { FaCheckSquare } from "react-icons/fa";
import { ButtonUi } from "../UI/ButtonUi";
import { TextUI } from "../UI/TextUi";
import { useNavigate, useParams } from "react-router-dom";
import { useMyInfo } from "../context/ctxMyInfo";
import { useInspection } from "../context/ctxInspection";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputsInspection } from "../../../dominio/models/inspection";


export const FormInspection = ({ typeForm }: any) => {
    const isAdd = typeForm === "edit" ? false : true;

    const { id: idEdit } = useParams()

    const { state: myInfo } = useMyInfo()

    const { dispatch, state: inspection, getAsk, addInspection, getInspectioByID } = useInspection()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputsInspection>()

    const onSubmit: SubmitHandler<InputsInspection> = () => {
        if (isAdd) {
            addInspection()
        }
    }

    useEffect(() => {
        dispatch({
            type: "CHANGE",
            payload: {
                inspector: myInfo.id
            }
        })
        getAsk()

    }, [])
    useEffect(() => {
        if (idEdit) {
            getInspectioByID(parseInt(idEdit || ""))
        }
    }, [idEdit])
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7 mb-10">
            <div className="w-full sticky top-0 z-10 bg-base-100  py-5">
                <div className="text-end">
                    <ButtonUi type="submit" className="btn-success text-white">
                        <FaCheckSquare size={20} />
                        {isAdd ? "Guardar" : 'Actualizar'}
                    </ButtonUi>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" />
                <div className="collapse-title text-xl font-medium">
                    Personal
                </div>
                <div className="collapse-content w-full">
                    <select
                        onChange={() => {
                            dispatch({
                                type: "CHANGE",
                                payload: {
                                    person: 1
                                }
                            })
                        }}
                        className="select select-bordered  select-lg w-full ">
                        <option disabled selected>Selecione al personal</option>
                        <option value={"1"}>Pepe juan 1</option>
                        <option value={"2"}>Pepe juan 2</option>
                        <option value={"3"}>Pepe juan 3</option>
                    </select>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" />
                <div className="collapse-title text-xl font-medium">
                    Inspector
                </div>
                <div className="collapse-content">
                    {`${myInfo.name} ${myInfo.surname} --- ${myInfo.typeDoc}: ${myInfo.numDoc}`}
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" />
                <div className="collapse-title text-xl font-medium">
                    Datos
                </div>
                <div className="collapse-content">
                    <TextUI
                        labelTitle="Pais"
                        isError={!!errors.Pais}
                        mssError="Este campo es requerido"
                        inputProps={{ "placeholder": "Escribe tus datos... " }}
                        register={register('Pais', {
                            required: true,
                            value: inspection.Pais,
                            onChange: (event) => {
                                dispatch({ type: "CHANGE", payload: { Pais: event.target.value } })
                            }
                        })}
                    />
                    <TextUI
                        isError={!!errors.direccion}
                        mssError="Este campo es requerido"
                        labelTitle="Dirección"
                        inputProps={{ "placeholder": "Escribe tus datos... " }}
                        register={register('direccion', {
                            required: true,
                            value: inspection.direccion,
                            onChange: (event) => {
                                dispatch({ type: "CHANGE", payload: { direccion: event.target.value } })
                            }
                        })}
                    />
                    <TextUI
                        isError={!!errors.cliente}
                        mssError="Este campo es requerido"
                        labelTitle="Cliente"
                        inputProps={{ "placeholder": "Escribe tus datos... " }}
                        register={register('cliente', {
                            required: true,
                            value: inspection.cliente,
                            onChange: (event) => {
                                dispatch({ type: "CHANGE", payload: { cliente: event.target.value } })
                            }
                        })}
                    />
                    <TextUI
                        isError={!!errors.obra}
                        mssError="Este campo es requerido"
                        labelTitle="Obra"
                        inputProps={{ "placeholder": "Escribe tus datos... " }}
                        register={register('obra', {
                            required: true,
                            value: inspection.obra,
                            onChange: (event) => {
                                dispatch({ type: "CHANGE", payload: { obra: event.target.value } })
                            }
                        })}
                    />
                    <TextUI
                        isError={!!errors.fecha}
                        mssError="Este campo es requerido"
                        labelTitle="Fecha"
                        inputProps={{ "placeholder": "Escribe datos ...", type: "date" }}
                        register={register('fecha', {
                            required: true,
                            value: inspection.fecha,
                            onChange: (event) => {
                                dispatch({ type: "CHANGE", payload: { fecha: event.target.value } })
                            }
                        })}
                    />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" />
                <div className="collapse-title text-xl font-medium">
                    Preguntas
                </div>
                <div className="collapse-content">
                    {
                        inspection && inspection.ask.map((value: any, idx: any) => {
                            return <div key={idx} className="border-b-2 pb-2 mb-2 border-gray-800">
                                <div className="label" >
                                    <span className="label-text">{value.ask}</span>
                                    <span className=" text-red-600">*</span>
                                </div>
                                <div
                                    className="flex justify-center gap-10"
                                >
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text mr-3">SI</span>
                                            <input
                                                type="radio"
                                                name={`radio-${idx}`}
                                                className="radio checked:bg-red-500"
                                                value={"true"}
                                                onChange={(event) => {
                                                    dispatch({
                                                        type: "changeAnswer",
                                                        payload: {
                                                            index: value.index,
                                                            ["answer" + value.orden]: true
                                                        }
                                                    })
                                                }}
                                            />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text  mr-3">no</span>
                                            <input
                                                type="radio"
                                                name={`radio-${idx}`}
                                                className="radio checked:bg-blue-500"
                                                value={"false"}
                                                onChange={(event) => {
                                                    dispatch({
                                                        type: "changeAnswer",
                                                        payload: {
                                                            index: value.index,
                                                            ["answer" + value.orden]: false
                                                        }
                                                    })
                                                }}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </form>
    )
}

