export const fetcher = async function <D = any, R = any>(url: string, data: D) {
    const response = await fetch(window.location.origin + url, {
        method: data ? 'POST' : 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return (await response.json()) as R;
};
