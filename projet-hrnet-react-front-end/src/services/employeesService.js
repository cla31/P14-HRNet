import { getDatasEmployees } from './service'
import Employee from '../utils/employee'

export const employeesDatas = async() => {
    try {
        let datas = {}
        datas = await getDatasEmployees()
            // console.log(datas)
        const employeesDatas = datas.map((datas) => new Employee(datas))
            // console.log("***Employees datas", employeesDatas)
        return employeesDatas
    } catch (error) {
        console.log("erreur ds la création d'objets employees", error)
        throw error
    }
}