import { getQuery } from 'ufo'

export default defineEventHandler(async (event) => {

    const req: any = getQuery(event.req.url as string)
    const config = useRuntimeConfig()

    const res = await $fetch(`${config.public.api_netlify_function}/scrap/`, {
        params: {
            id: req.id,
            region: req.region
        }
    })

    return res

})