import React from "react";
import { useTable } from "react-table";
import PropTypes from "prop-types";

export const Table = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th key={column} {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr key={row} {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td key={cell} {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    {footerGroups.map((footerGroup) => (
                        <tr key={footerGroup} {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map((column) => (
                                <td key={column} {...column.getFooterProps()}>
                                    {column.render("Footer")}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </>
    );
};

Table.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
};
