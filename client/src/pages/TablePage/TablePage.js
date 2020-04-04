import React, { useState, useEffect } from "react";
// import TableHeader from "../../components/Tables/TableHeader.js";
import { TableData, TableItem } from "../../components/Tables/TableData.js";
import API from "../../utils/API.js";
import MyNavbar from "../../components/Navbar/Navbar.js";
import ArtistSearch from '../TablePage/ArtistSearch'
import { Container, Table, Button } from 'react-bootstrap';


let oldInputLength = ''
let allPerformances = ''



function TablePage() {

    const [performances, setPerformances] = useState([])
    const [musicData, setMusicData] = useState([])

    //Load all performances within setPerformances
    useEffect(() => {
        loadPerformances();
        loadMusicData();
    }, [])

    //Load all performances and set to performances
    function loadPerformances() {
        API.getPerformances()
            .then(res =>
                setPerformances(res.data)
                    (allPerformances = res.data)
            )
            .catch(error => console.log(error));
    }

    //Load all performances and set to performances
    function loadMusicData() {
        API.getMusicAPI()
            .then(res =>
                setMusicData(res.data)
                // (allPerformances = res.data)
            )
            .catch(error => console.log(error));
    }

    //Reactively handle search as user types in searchbar
    function handleSearchChange(event) {
        const input = event.target.value

        //if input deleted, refilter allperformances 
        if (input.length < oldInputLength) {
            console.log(allPerformances)
            const newArray = allPerformances.filter(performance => {
                return performance.Artist.artist_name.slice(0, input.length) === input
            })
            setPerformances(newArray)
        }

        //else continue filtering current list
        else {
            oldInputLength = input.length
            const newArray = performances.filter(performance => {
                return performance.Artist.artist_name.slice(0, input.length) === input
            })
            setPerformances(newArray)
        }

    }

    function download(data){
        const blob = new Blob([data],{type: 'text/csv'})
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a')
        a.setAttribute('hidden', '')
        a.setAttribute('href',url)
        a.setAttribute('download', 'download.csv')
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

    }

    function csv(data){

        const csvRows = [];
     musicData.map(data =>{

        // console.log("musicdata data",data);

        // csvRows.push(data);

        // console.log("this is rows",csvRows);
        
        download(csvRows)
            
     })

    
    

        
        

    }
    
    return (
        <>
            <MyNavbar>

                <ArtistSearch handleSearchChange={handleSearchChange} />

            </MyNavbar>
            
            <h1>Performance Table</h1>
            {performances.length ? (
                <TableData>
                    {performances.map(performance => {
                        return (
                            <TableItem key={performance.id}>
                                <td>{performance.Artist.artist_name}</td>
                                <td>{performance.date}</td>
                                <td>{performance.total_sold}</td>
                                <td>{performance.total_money}</td>
                                <td>{performance.total_attendance}</td>
                                <td>{performance.average_ticket_price}</td>
                                <td>{performance.percent_sold}</td>
                                <td>{performance.projected_success}</td>
                                <td>{performance.actual_success}</td>
                                <td>{performance.predictability}</td>
                                <td>{performance.marketing_budget}</td>
                            </TableItem>
                        )
                    })}
                </TableData>) : (
                    <h2>No Results</h2>
                )}
                <br/>
            <h1>API Information Table</h1>
            <Button onClick={csv}>CSV EXPORT</Button>
            {musicData.length ? (
                    <Table>
                    <thead>
                    <tr>
                      <th>Artist</th>
                      <th>Youtube Subscribers</th>
                      <th>Instagram Followers</th>
                      <th>Bandsintown Followers</th>
                      <th>Spotify Followers</th>
                      <th>Deezer Followers</th>
                    </tr>
                  </thead>
                    {musicData.map(data => {
                        console.log("here it is",data)
                        return (
                            <TableItem key={data.id}>
                                <td>{data.Artist.artist_name}</td>
                                <td>{data.youtube_subscribers}</td>
                                <td>{data.instagram_followers}</td>
                                <td>{data.bandsintown_followers}</td>
                                <td>{data.spotify_popularity}</td>
                                <td>{data.deezer_popularity}</td>
                            </TableItem>
                        )
                    })}</Table>
                ) : (
                    <h2>No Results</h2>
                )}

        </>
    )
};

export default TablePage;






































// function Tablepage(){


// return(

// <div>

//  <MyGrid/>
// </div>


// )

// }

// export default Tablepage;











































// function TablePage() {

//     const [performances, setPerformances] = useState([])

//     //Load all performances within setPerformances
//     useEffect(() => {
//         loadPerformances()
//     }, [])

//     //Load all performances and set to performances
//     function loadPerformances() {
//         API.getPerformances()
//             .then(res =>
//                 setPerformances(res.data)
//                 (allPerformances = res.data)
//             )
//             .catch(error => console.log(error));
//     }

//     //Reactively handle search as user types in searchbar
//     function handleSearchChange(event) {      
//         const input = event.target.value

//         //if input deleted, refilter allperformances 
//         if(input.length < oldInputLength){
//             console.log(allPerformances)
//            const newArray = allPerformances.filter(performance => {
//                return performance.Artist.artist_name.slice(0, input.length) === input
//            }) 
//            setPerformances(newArray)
//         }

//         //else continue filtering current list
//         else{
//             const newArray = performances.filter(performance => {        
//             oldInputLength = input.length
//             return performance.Artist.artist_name.slice(0, input.length) === input 
//         })
//         setPerformances(newArray)
//         }

//     }      

//     return (
//         <div>
//             <MyNavbar>

//             <ArtistSearch handleSearchChange={handleSearchChange} />

//             </MyNavbar>
//             {/* <TableHeader />
//             <TableDataEntry /> */}

//             {/* <TableHeader /> */}

//             {performances.length ? (
//                 <TableData>
//                     {performances.map(performance => {
//                         return (
//                             <TableItem key={performance.id}>
//                                 <td>{performance.id}</td>
//                                 <td>{performance.Artist.artist_name}</td>
//                                 <td>{performance.date}</td>
//                                 <td>{performance.total_sold}</td>
//                                 <td>{performance.total_money}</td>
//                                 <td>{performance.total_attendance}</td>
//                                 <td>{performance.average_ticket_price}</td>
//                                 <td>{performance.percent_sold}</td>
//                                 <td>{performance.show_success}</td>
//                                 <td>{performance.fiscal_year}</td>
//                                 <td>{performance.genre}</td>
//                             </TableItem>
//                         )
//                     })}
//                 </TableData>) : (
//                     <h2>No Results</h2>
//                 )}

//         </div>
//     )
// };

// export default TablePage;