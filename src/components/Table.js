import React from "react";
import { useTable } from "react-table";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTable = styled.table`
    ${
        "" /*     width: 100rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; */
    }
    text-align: center;
`;

const StyledTH = styled.th`
    text-align: center;
`;

export const Table = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    });

    return (
        <>
            <StyledTable {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <StyledTH key={column} {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </StyledTH>
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
            </StyledTable>
        </>
    );
};

Table.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
};
