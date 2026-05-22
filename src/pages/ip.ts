import type { APIRoute } from "astro";
import { getClientIpFromHeaders } from "../lib/client-ip";
// export const prerender = false;

export const GET: APIRoute = ({ clientAddress, request }) => {
    const clientIp = getClientIpFromHeaders(request.headers, clientAddress);
    console.log(clientIp);
    return new Response(clientIp);
}
