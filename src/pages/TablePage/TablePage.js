import React, { useState, useEffect } from "react";
import TableHeader from "../../components/Tables/TableHeader.js";
import { TableData, TableItem } from "../../components/Tables/TableData.js";
import API from "../../utils/API.js";
import MyNavbar from "../../components/Navbar/Navbar.js";
import ArtistSearch from "../../components/Search/ArtistSearch.js"

function TablePage() {

    const [performances, setPerformances] = useState([])
    // const [newperformances, setNewperformances] = useState([])

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

    //Reactively handle search as user types in searchbar
    function handleSearchChange(event) {
        const input = event.target.value
        console.log(performances)
        const newArray = performances.filter(performance => {
            return performance.Artist.artist_name.slice(0, input.length) === input
        })
        setPerformances(newArray)
    }
    return (
        <div>
            <MyNavbar />
            {/* <TableHeader />
            <TableDataEntry /> */}
            <ArtistSearch handleSearchChange={handleSearchChange} />
            <TableHeader/>

            {performances.length ? (
                <TableData>
                    {performances.map(performance => {
                        return (
                            <TableItem key={performance.id}>
                                <td>{performance.id}</td>
                                <td>{performance.Artist.artist_name}</td>
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