import React from "react";
import { useTable } from "react-table";
import PropTypes from "prop-types";

export const Table = ({ columns, data }) => {
    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups // headerGroups, if your table has groupings
        // prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable({
        columns,
        data
    });

    // Render the UI for the table
    // react-table doesn't have UI, it's headless. You just need to put the react-table props from the Hooks, and it will do its magic automatically

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th key={column} {...column.getHeaderProps}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {/*    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: "10px",
                                                border: "solid 1px gray",
                                                background: "papayawhip"
                                            }}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })} */}
                </tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    columns: PropTypes.string,
    data: PropTypes.string
};
