/**
    @file Service to fetch data from the backend
    @function getDatasEmployees
*/

export const getDatasEmployees = async() => {
    try {
        const fetchEmployees = await fetch('/employeesDatas.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        const employeesFromBackEnd = await fetchEmployees.json()
            // console.log("réponse de backFetch", backFetch)  
        return employeesFromBackEnd;
    } catch (error) {
        // console.log("erreur ds le fetch", error)
        throw error
    }
}