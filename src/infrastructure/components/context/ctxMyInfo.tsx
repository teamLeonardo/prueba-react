import { createContext, useContext, useEffect, useReducer } from "react";
import { inspectorRepository } from "../../repositories/inspector.repository";
import { IFinspectorDto } from "../../http/dto/inspector.dto";

const ctxMyInfo = createContext({} as any);

const initialState: IFinspectorDto = {
    name: "",
    surname: "",
    email: "",
    numDoc: 0,
    typeDoc: "",
    phone: "",
    id: ""
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'add':
            return {
                ...action.payload,
            };
        case 'edit':
            return {
                ...action.payload,
            };
        case 'CHANGE':

            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

interface IFvalueProvider {
    state: any, dispatch: (obj: any) => any, addDatos: () => void, editDatos: () => void
}

const ProviderMyInfo = ({ children }: any) => {
    const storedState = JSON.parse(localStorage.getItem('myinfo') || JSON.stringify(initialState)) || initialState;
    const [state, dispatch] = useReducer(reducer, storedState);

    useEffect(() => {
        if (state.id !== "") {
            localStorage.setItem('myinfo', JSON.stringify(state));
        }
    }, [state]);

    const addDatos = async () => {
        const { id, ...newstate } = state
        const respuesta = await inspectorRepository.registerMyInfo(newstate)
        dispatch({ type: "add", payload: respuesta })
    }

    const editDatos = async () => {
        const respuesta = await inspectorRepository.editMyInfo(state)
        dispatch({ type: "edit", payload: respuesta })
    }

    return (
        <ctxMyInfo.Provider
            value={{
                state, dispatch, addDatos, editDatos
            } as IFvalueProvider}
        >
            {children}
        </ctxMyInfo.Provider>
    )
}

const useMyInfo = () => {
    const context = useContext(ctxMyInfo);
    if (!context) {
        throw new Error('useMyContext debe ser utilizado dentro de MyProvider');
    }
    return context as IFvalueProvider;
};

export { ProviderMyInfo, useMyInfo }
