export function getClientIpFromHeaders(headers: Headers, fallback?: string | null) {
    const forwardedFor = headers.get('x-forwarded-for');
    if (forwardedFor) {
        const firstIp = forwardedFor.split(',')[0]?.trim();
        if (firstIp) {
            return firstIp;
        }
    }

    const headerCandidates = [
        headers.get('cf-connecting-ip'),
        headers.get('x-real-ip'),
        headers.get('x-client-ip'),
        headers.get('true-client-ip'),
    ];

    for (const candidate of headerCandidates) {
        if (candidate?.trim()) {
            return candidate.trim();
        }
    }

    return fallback ?? 'No disponible';
}
