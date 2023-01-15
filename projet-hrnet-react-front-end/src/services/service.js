export const getDatasEmployees = async() => {
    try {
        const fetchJson = await fetch('/employeesDatas.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        const backFetch = await fetchJson.json()
            // console.log("réponse de backFetch", backFetch)  
        return backFetch;
    } catch (error) {
        // console.log("erreur ds le fetch", error)
        throw error
    }
}