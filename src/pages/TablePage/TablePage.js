import React, { useState, useEffect } from "react";
import TableHeader from "../../components/Tables/TableHeader.js";
import { TableData, TableItem } from "../../components/Tables/TableData.js";
import TableDataEntry from "../../components/Tables/TableDataEntry.js"
import API from "../../utils/API.js";

function TablePage() {

    const [performances, setPerformances] = useState([])
    // const [formObject, setFormObject] = useState({})

    //Load all performances within setPerformances
    useEffect(() => {
        loadPerformances()
    }, [])

    //Load all performances and set to performances
    function loadPerformances() {
        API.getPerformances()
            .then(res =>
                setPerformances(res.data)
            )
            .catch(error => console.log(error));
    }

    return (
        <div>
            <TableHeader />
            <TableDataEntry />
            {performances.length ? (
                <TableData>
                    {performances.map(performance => {
                        return (
                            <TableItem key={performance.id}>
                                <td>{performance.id}</td>
                                <td>{performance.performance}</td>
                                <td>{performance.date}</td>
                                <td>{performance.total_sold}</td>
                                <td>{performance.total_money}</td>
                                <td>{performance.total_attendance}</td>
                                <td>{performance.average_ticket_price}</td>
                                <td>{performance.percent_sold}</td>
                                <td>{performance.show_success}</td>
                                <td>{performance.fiscal_year}</td>
                                <td>{performance.genre}</td>
                            </TableItem>
                        )
                    })}
                </TableData>) : (
                    <h2>No Results</h2>
                )}

        </div>
    )
};

export default TablePage;