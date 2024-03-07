import { InputsInspection } from "../../../dominio/models/inspection";

export interface IFinspectionDto extends InputsInspection {
    id: string
    statusText: string
}