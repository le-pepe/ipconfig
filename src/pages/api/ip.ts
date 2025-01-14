import type {APIRoute} from "astro";

export const GET: APIRoute = ({ clientAddress }) => {

    return new Response(
        JSON.stringify({
            ip: clientAddress
        })
    )
}
