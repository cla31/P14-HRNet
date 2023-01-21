import { format } from "date-fns"

/**
 * @file Columns configuration for the table 
 */
export const COLUMNS = [{
        Header: 'First Name',
        accessor: 'firstName',
        // disableFilters: true,
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
        // disableFilters: true,
    },
    {
        Header: 'Start Date',
        accessor: 'startDate',
        // disableFilters: true,
        Cell: ({ value }) => {
            return format(new Date(value), "dd/MM/yyyy");
        },
    },
    {
        Header: 'Department',
        accessor: 'department',
        // disableFilters: true,
    },
    {
        Header: 'Date of birth',
        accessor: 'birthDate',
        // disableFilters: true,
        Cell: ({ value }) => {
            return format(new Date(value), "dd/MM/yyyy");
        },
    },
    {
        Header: 'Street',
        accessor: 'street',
        // disableFilters: true,
    },
    {
        Header: 'City',
        accessor: 'city',
        // disableFilters: true,
    },
    {
        Header: 'State',
        accessor: 'state',
        // disableFilters: true,
    },
    {
        Header: 'Zipcod',
        accessor: 'zipcod',
        // disableFilters: true,
    },
]