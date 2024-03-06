import { http } from "../http/http"


export const askRepository = {
    getAllAsk: async () => {
        const info = await http.get('asks')
        return info
    }
}
