import { FaCheckSquare } from "react-icons/fa";
import { ButtonUi } from "../UI/ButtonUi";
import { TextUI } from "../UI/TextUi";
import { useNavigate } from "react-router-dom";
import { useMyInfo } from "../context/ctxMyInfo";
import useDataFetching from "../hooks/useDataFetching";
import { askRepository } from "../../repositories/ask.repository";

export const FormInspection = ({ typeForm }: any) => {
    const isAdd = typeForm === "edit" ? false : true;
    const isEdit = !isAdd
    const navigate = useNavigate()
    const { state: myInfo } = useMyInfo()
    const { data, error, loading } = useDataFetching<any[]>(askRepository.getAllAsk)
    return (
        <div className="flex flex-col gap-7 mb-10">
            <div className="w-full sticky top-0 z-10 bg-base-100  py-5">
                <div className="text-end">
                    <ButtonUi onClick={() => { navigate("/") }} className="btn-success text-white">
                        <FaCheckSquare size={20} />
                        Guardar
                    </ButtonUi>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" />
                <div className="collapse-title text-xl font-medium">
                    Personal
                </div>
                <div className="collapse-content w-full">
                    <select className="select select-bordered  select-lg w-full ">
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
                        isError={false}
                        mssError="Error al codificar"
                        labelTitle="Pais"
                        inputProps={{ "placeholder": "Escribe datos ... " }}
                    />
                    <TextUI
                        isError={false}
                        mssError="Error al codificar"
                        labelTitle="Dirección"
                        inputProps={{ "placeholder": "Escribe datos ... " }}
                    />
                    <TextUI
                        isError={false}
                        mssError="Error al codificar"
                        labelTitle="Cliente"
                        inputProps={{ "placeholder": "Escribe datos ... " }}
                    />
                    <TextUI
                        isError={false}
                        mssError="Error al codificar"
                        labelTitle="Obra"
                        inputProps={{ "placeholder": "Escribe datos ... " }}
                    />
                    <TextUI
                        isError={false}
                        mssError="Error al codificar"
                        labelTitle="Fecha"
                        inputProps={{ "placeholder": "Escribe datos ...", type: "date" }}
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
                        data && data.map((value, idx) => {
                            return <div className="border-b-2 pb-2 mb-2 border-gray-800">
                                <div className="label" key={idx}>
                                    <span className="label-text">{value.ask}</span>
                                    <span className=" text-red-600">*</span>
                                </div>
                                <div className="flex justify-center gap-10">
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text mr-3">SI</span>
                                            <input type="radio" name={`radio-${idx}`} className="radio checked:bg-red-500"/>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text  mr-3">no</span>
                                            <input type="radio" name={`radio-${idx}`} className="radio checked:bg-blue-500" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}

