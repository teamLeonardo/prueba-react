import { createContext, useContext, useReducer } from "react";

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
    state: any,
    dispatch: (obj: any) => any,
}

const ProviderInspection = ({ children }: any) => {

    const [state, dispatch] = useReducer(reducer, initialState);




    return (
        <ctxInspection.Provider
            value={{
                state, dispatch
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
