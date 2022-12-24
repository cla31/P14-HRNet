import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CurrentEmployee = () => {
  const tableData = useSelector((state) => state.table)
  // console.log("tableData",tableData)
  return (
    <div>
      <p>Ici c'est la page des employées... </p>

      <div id="employee-div" className="container">
        <h1>Current Employees</h1>

        <Link to="/">Home</Link>
        <form>
          <input type="text" placeholder="Rechercher..." />
          <button type="submit">Rechercher</button>
        </form>
        <button>Show entries</button>
        <ul>
          <li>10</li>
          <li>25</li>
          <li>50</li>
          <li>100</li>
        </ul>
      </div>

      <table>
        <tbody>
          <tr>
            <th>Fist Name</th>
            <th>Last Name</th>
            <th>Sart Date</th>
            <th>Department</th>
            <th>Date of birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
          </tr>
        </tbody>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={item + index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.startDate}</td>
              <td>{item.department}</td>
              <td>{item.birthDate}</td>
              <td>{item.street}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CurrentEmployee
