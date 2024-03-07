import { InputsInspection } from "../../dominio/models/inspection"
import { IFinspectionDto } from "../http/dto/inspection.dto"
import { http } from "../http/http"
import { SUPA } from "../supabase/supabase.config";


export const inspectionRepository = {
    getinspection: async () => {
        const info = await SUPA
            .from('inspection')
            .select(`
            id,
            person (
                numDoc
            ),
            inspector (
                numDoc
            ),
            statusText
            `)

        return info.data
    },
    getInspectioByID: async (id: number) => {
        const inspection = await http.getBy<IFinspectionDto>('inspection', id)
        return inspection
    },
    registerAdd: async (body: InputsInspection & IFinspectionDto) => {
        const inspection = await http.post<IFinspectionDto>('inspection', body)
        return inspection
    },
    registerAnswer: async (body: any) => {
        const answer = await http.post('answer', body)
        return answer
    },
    getAnswer: async (idInspection: any) => {
        const answer = await SUPA
            .from('answer')
            .select(`
            *
            `)
            .eq('inspection', idInspection)
            .single();
        return answer
    },
}
