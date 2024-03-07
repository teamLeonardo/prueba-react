import { CiEdit } from "react-icons/ci"
import { ButtonUi } from "../../UI/ButtonUi"
import { AppLayout } from "../../layout/AppLayout"
import { MdDelete } from "react-icons/md"
import { IoIosAdd } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { inspectionRepository } from "../../../repositories/inspection.repository"
import useDataFetching from "../../hooks/useDataFetching"
export const ListInspection = () => {
    const navigate = useNavigate()

    const { data: dataInspection } = useDataFetching(inspectionRepository.getinspection)
    return (
        <AppLayout title={"Lista de Inspección"}>
            <div className="w-full">
                <div className="text-end">
                    <ButtonUi onClick={() => { navigate("agregar") }} className="btn-success text-white">
                        <IoIosAdd size={20} />
                        Agregar
                    </ButtonUi>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Personal</th>
                            <th>Inspector</th>
                            <th>Estado</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataInspection?.map((item: any, idx) => {
                                return (
                                    <tr key={idx}>
                                        <th>{item.id}</th>
                                        <td>{item.person.numDoc}</td>
                                        <td>{item.inspector.numDoc}</td>
                                        <td>{item.statusText}</td>
                                        <td >
                                            <div className="flex gap-2">
                                                <ButtonUi onClick={() => { navigate("editar/" + item.id) }} className="btn-warning text-white btn-circle w-[50px]">
                                                    <CiEdit size={30} />
                                                </ButtonUi>
                                                <ButtonUi className="btn-error text-white btn-circle w-[50px]">
                                                    <MdDelete size={30} />
                                                </ButtonUi>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </AppLayout>
    )
}

