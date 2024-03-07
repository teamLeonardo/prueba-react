import { createContext, useContext, useReducer } from "react";
import { askRepository } from "../../repositories/ask.repository";
import { IFinspectionDto } from "../../http/dto/inspection.dto";
import { inspectionRepository } from "../../repositories/inspection.repository";
import { SUPA } from "../../supabase/supabase.config";

const ctxInspection = createContext({} as any);

const initialState = {
    id: "",
    inspector: null,
    person: null,
    Pais: "",
    direccion: "",
    cliente: "",
    obra: "",
    fecha: "",
    statusText: "",
    ask: []
} as IFinspectionDto;


const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'getAsk':
            return {
                ...state,
                ask: [
                    ...(action.payload as any[])
                        .reduce((previousValue: any,
                            currentValue: any, idx) => {
                            return [
                                ...previousValue,
                                {
                                    ...currentValue,
                                    index: idx,
                                    ["answer" + currentValue.orden]: null
                                }
                            ]
                        }, [])
                ],
            };
        case 'CHANGE':
            return {
                ...state,
                ...action.payload
            };
        case 'changeAnswer':
            const cloneArray: any[] = state.ask

            cloneArray[action.payload.index] = {
                ...cloneArray[action.payload.index],
                ...action.payload
            }

            return {
                ...state,
                ask: cloneArray
            };
        case "setInfo":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

interface IFvalueProvider {
    state: any,
    dispatch: (obj: any) => any,
    getAsk: () => any,
    addInspection: () => any,
    getInspectioByID: (id: number) => any
}

const ProviderInspection = ({ children }: any) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getAsk = async () => {
        dispatch({ type: "getAsk", payload: await askRepository.getAllAsk() })
    }

    const getInspectioByID = async (id: number) => {
        const EditInspection = await Promise.all([
            await inspectionRepository.getInspectioByID(id),
            await inspectionRepository.getAnswer(id)
        ])
        console.log(EditInspection);

        // dispatch({ type: "setInfo", payload: EditInspection })
    }

    const addInspection = async () => {
        try {
            const { ask, id, ...newState } = state

            const askSendPack = (ask as any[]).reduce((
                previousValue: any,
                currentValue: any
            ) => {
                return { ...previousValue, ["answer" + currentValue.orden]: currentValue["answer" + currentValue.orden] }
            }, {})

            const valuesFalse = Object.values(askSendPack).filter(value => value === false);

            const { id: idInspection } = await inspectionRepository.registerAdd({
                ...newState,
                statusText: valuesFalse.length > 3 ? "OBSERVADO" : "CORRECTA"
            });

            await inspectionRepository.registerAnswer({ ...askSendPack, inspection: idInspection });

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <ctxInspection.Provider
            value={{
                state, dispatch, getAsk, addInspection, getInspectioByID
            } as IFvalueProvider}
        >
            {children}
        </ctxInspection.Provider>
    )
}

const useInspection = () => {
    const context = useContext(ctxInspection);
    if (!context) {
        throw new Error('useInspection debe ser utilizado dentro de MyProvider');
    }
    return context as IFvalueProvider;
};

export { ProviderInspection, useInspection }
