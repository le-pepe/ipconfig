import type {APIRoute} from "astro";
export const prerender = false;

export const GET: APIRoute = ({ clientAddress }) => {
    console.log(clientAddress)
    return new Response(
        clientAddress
    )
}
