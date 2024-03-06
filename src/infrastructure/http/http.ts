import { SUPA } from "../supabase/supabase.config"


const get = async <T>(url: string) => {
    const response = await SUPA.from(url).select("*")
    return response.data as T[]
}

const getBy = async <T>(url: string, id: string) => {
    const response = await SUPA.from(url).select("*")
        .eq('id', id)
        .single();
    return response.data as T
}

const post = async <T>(url: string, body: any) => {
    const response = (await SUPA
        .from(url)
        .insert([
            { ...body },
        ])
        .select()).data || []

    return response[0] as T
}

const put = async <T>(url: string, { id, ...body }: any) => {
    const response = await SUPA
        .from(url)
        .update({ ...body })
        .eq('id', id)
        .select().single()
    return response.data as T
}

const _delete = async <T>(url: string, id: string) => {
    const response = await SUPA
        .from(url)
        .delete()
        .eq('id', id)
    return response.data as T
}

export const http = {
    get,
    getBy,
    post,
    put,
    delete: _delete
}
