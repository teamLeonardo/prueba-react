import { InputsInspector } from "../../dominio/models/inspector"
import { IFinspectorDto } from "../http/dto/inspector.dto"
import { http } from "../http/http"


export const inspectorRepository = {
    getMyInfo: async (id: string) => {
        const info = await http.getBy<IFinspectorDto>('inspector', id)
        return info
    },
    registerMyInfo: async (body: InputsInspector) => {
        const info = await http.post<IFinspectorDto>('inspector', body)
        return info
    },
    editMyInfo: async (body: IFinspectorDto) => {
        const info = await http.put<InputsInspector>('inspector', body)
        return info
    },
}
