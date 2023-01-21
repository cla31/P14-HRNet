/**
 * @file Service to fetch data from the backend
 * @function getDatasEmployees
 */
export const getDatasEmployees = async() => {
    return new Promise(async(resolve) => {
        setTimeout(async() => {
            try {
                const fetchEmployees = await fetch('/employeesDatas.json', {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                })
                const employeesFromBackEnd = await fetchEmployees.json()
                resolve(employeesFromBackEnd)
            } catch (error) {
                throw error
            }

        }, 2000)
    });
}