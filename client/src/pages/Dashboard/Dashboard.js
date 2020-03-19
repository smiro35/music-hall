import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import { Row, Col } from 'reactstrap';
import numeral from 'numeral';
import axios from 'axios';
import SearchBar from '../../components/Search/SearchBar';
import MyNavbar from '../../components/Navbar/Navbar';
import { Card, CardDeck, Button, Container, Table, Image, Figure, ListGroupItem, CardGroup } from 'react-bootstrap';
import MyCard from '../../components/Card';
import TopCard from '../../components/Cardimage';
import ApiTable from '../../components/APiTable';
import Logo from '../../music_hall.jpg'



import API from '../../utils/API';
let apiData = '';
let newVal = "";
let text = ""

function Dashboard(props) {
  const [state, setState] = useState({
    search: "",
    value: "",
  });
  const [data, setData] = useState(null);
  const [tableData, setTabledata] = useState()
  const { isAuth, logout } = useContext(AuthContext);
  console.log("dashboard user: ", isAuth)


  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log("this value", value)
    console.log("state", state);
    setState(
      {
        ...state,
        [name]: value
      }
    )
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("submitted");
    let url = `http://localhost:3001/api/dashboard/${state.search}`
    axios.get(url)
      .then(response => {

        if (response === undefined) {
          alert('undefined')
        }

        console.log("our response", response);

        //   const newData = data.data
        // console.log("this is rout",newData.push(data.data));
        // console.log(state.search)
        newVal = response.data

        console.log("our newVal", newVal);


        let MyBio = response.data.Bio;
        console.log("my Bio", MyBio);

        console.log(response.data.results)

        const bandsintown = response.data.results.bandsintown.obj.followers[19];
        // manipulating bandsintown api data
        if (bandsintown) {
          // bandsintown['artist'] = state.search;
          bandsintown['bandsintown_followers'] = bandsintown['value']
          bandsintown['bandsintown_timestp'] = bandsintown['timestp']
          bandsintown.bandsintown_timestp = Date.parse(bandsintown.bandsintown_timestp)
          delete bandsintown.value
          delete bandsintown.channel_id
          delete bandsintown.interpolation
          delete bandsintown.daily_diff
          delete bandsintown.timestp
        }

        const spotifyFollowers = response.data.results.spotify.obj.followers.reverse()[0]
        // manipulating spotify api data
        if (spotifyFollowers) {
          spotifyFollowers['spotify_timestp'] = spotifyFollowers['timestp']
          spotifyFollowers['spotify_popularity'] = spotifyFollowers['value']
          spotifyFollowers.spotify_timestp = Date.parse(spotifyFollowers.spotify_timestp)
          delete spotifyFollowers.timestp
          delete spotifyFollowers.value
        }

        const deezerFans = response.data.results.deezer.obj.fans.reverse()[0]
        // manipulating deezer fans api data
        if (deezerFans) {
          deezerFans['deezer_timestp'] = deezerFans['timestp']
          deezerFans['deezer_popularity'] = deezerFans['value']
          deezerFans.deezer_timestp = Date.parse(deezerFans.deezer_timestp)
          delete deezerFans.timestp
          delete deezerFans.value
          delete deezerFans.daily_diff
          delete deezerFans.interpolation
        }


        const instagramFollowers = response.data.results.instagram.obj.followers.reverse()[0]
        // manipulating instagram api data
        if (instagramFollowers) {
          instagramFollowers['instagram_timestp'] = instagramFollowers['timestp']
          instagramFollowers['instagram_followers'] = instagramFollowers['value']
          instagramFollowers.instagram_timestp = Date.parse(instagramFollowers.instagram_timestp)
          delete instagramFollowers['timestp']
          delete instagramFollowers['value']
          delete instagramFollowers['flags']
          delete instagramFollowers['daily_diff']
          delete instagramFollowers['interpolation']
        }


        const youtubeSubscribers = response.data.results.youtube.obj.subscribers.reverse()[0]
        // manipulating youtube subscribers api data
        if (youtubeSubscribers) {
          youtubeSubscribers['youtube_subscribers_timestp'] = youtubeSubscribers['timestp']
          youtubeSubscribers['youtube_subscribers'] = youtubeSubscribers['value']
          youtubeSubscribers.youtube_subscribers_timestp = Date.parse(youtubeSubscribers.youtube_subscribers_timestp)
          delete youtubeSubscribers['timestp']
          delete youtubeSubscribers['value']
          delete youtubeSubscribers['daily_diff']
          delete youtubeSubscribers['interpolation']
        }


        const youtubeViews = response.data.results.youtube.obj.views.reverse()[0]
        // manipulating youtube views api data
        if (youtubeViews) {
          youtubeViews['youtube_views_timestp'] = youtubeViews['timestp']
          youtubeViews['youtube_views'] = youtubeViews['value']
          youtubeViews.youtube_views_timestp = Date.parse(youtubeViews.youtube_views_timestp)
          delete youtubeViews['timestp']
          delete youtubeViews['value']
          delete youtubeViews['daily_diff']
          delete youtubeViews['interpolation']
        }


        //combining api data into object
        apiData = { ...bandsintown, ...spotifyFollowers, ...deezerFans, ...instagramFollowers, ...youtubeSubscribers, ...youtubeViews };
        apiData['artist'] = state.search;
        console.log(apiData);

        setData(
          newVal
        )
      })
      .catch(err => {
        if(err)
        

        console.log(err.message)
    })

  }



  useEffect((e) => { console.log("this is our new data", data) }, [data])
  useEffect((e => {
    console.log("this is text", text);

  }), text);


  function tableDisplay(event) {
    console.log("table data:", data);

  }



  // Pass apiData to API util
  function handlePostArtist(event) {


    console.log("this is apiData", apiData)
    API.postMusicAPI(apiData)

    setTabledata(
      newVal
    )


  }


  useEffect((e) => { console.log("this is our new tabledata", tableData) }, [tableData])


  return (
    <>
      <MyNavbar>
        <SearchBar
          name="search"
          value={state.value}
          search={state.search}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit} />
      </MyNavbar>

      {!data ? <>
        <container fluid> <img
          src="https://www.nhpr.org/sites/nhpr/files/styles/x_large/public/201909/Telluride.jpg"
          width="100%"



          alt=" Welcome to the Music Hall Dashboard! "></img>

        </container>

      </>




        :
        <Container fluid style={{ background: "linear-gradient(135deg, #8363a1 0%, #74a8c3 100%)", backgroundImage: `url${Logo} width:"100%, height:100%` }}>

          <Container fluid style={{ opacity: "1", marginBlock: "2rem", marginTop: "2rem" }} >

            <Row>
              <Col>

                {data && 'bio' in data &&
                  <TopCard
                    image={data.bio.obj.image_url}
                    rank={data.bio.obj.cm_artist_rank}
                    genre={data.bio.obj.tags[0].name}
                    artist_name={data.bio.obj.name}
                    handlePostArtist={handlePostArtist}

                  >

                  </TopCard>
                }
              </Col>



              {Object.keys(data.results).map((Api_name) => {
                let time = ""
                let text = numeral("").format('0,0');
                let image = ""

                switch (Api_name) {
                  case "bandsintown":
                    image = "https://darkskychoir.com/wp-content/uploads/2019/04/bandsintown.png"
                    if (data.results[Api_name].obj.followers.reverse()[1] !== undefined) {
                      time = data.results[Api_name].obj.followers.reverse()[1].timestp
                      text = <><h4 >Followers:</h4><br /><ListGroupItem style={{ borderRadius: "30rem", backgroundColor: "#9063cd", color: "white" }}> {data.results[Api_name].obj.followers.reverse()[1].value}</ListGroupItem></>
                    }




                    break;
                  case "instagram":
                    image = "https://pluspng.com/img-png/instagram-png-instagram-png-icon-1024.png"
                    if (data.results[Api_name].obj.followers.reverse()[1] !== undefined) {
                      time = data.results[Api_name].obj.followers.reverse()[1].timestp
                      text = <><h4 >Followers:</h4><br /><ListGroupItem style={{ borderRadius: "30rem", backgroundColor: "#9063cd", color: "white" }}> {data.results[Api_name].obj.followers.reverse()[1].value}</ListGroupItem></>
                    }
                    break;

                  case "spotify":
                    image = "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                    if (data.results[Api_name].obj.followers.reverse()[1] !== undefined) {
                      time = data.results[Api_name].obj.followers.reverse()[1].timestp
                      text = <><h4 >Followers:</h4><br /><ListGroupItem style={{ borderRadius: "30rem", backgroundColor: "#9063cd", color: "white" }}> {data.results[Api_name].obj.followers.reverse()[1].value}</ListGroupItem></>
                    }
                    break;

                  case "youtube":
                    image = "https://lh6.googleusercontent.com/proxy/opjltYFTlI3C9bRRpxCBbRPh37Rd_DumhkwtE__adClUzJje1zDU8rpx5BVd1LFQasztUHMEA_s8CCNp2hmtWLNB"
                    if (data.results[Api_name].obj.subscribers.reverse()[1] !== undefined) {
                      text = <><h4 >Subs:</h4><br /><ListGroupItem style={{ borderRadius: "30rem", backgroundColor: "#9063cd", color: "white" }}> {data.results[Api_name].obj.subscribers.reverse()[1].value}</ListGroupItem></>
                      time = data.results[Api_name].obj.subscribers.reverse()[1].timestp
                    }

                    break;
                  case "deezer":
                    image = "https://i.pinimg.com/originals/11/23/82/112382d6b0e0e47461fb55f03e597e9d.png"
                    if (data.results[Api_name].obj.fans.reverse()[1] !== undefined) {
                      time = data.results[Api_name].obj.fans.reverse()[1].timestp
                      text = <><h4 >Fans:</h4><br /><ListGroupItem style={{ borderRadius: "30rem", backgroundColor: "#9063cd", color: "white" }}>{data.results[Api_name].obj.fans.reverse()[1].value}</ListGroupItem></>
                    }

                    break;

                }
                return (





                  <CardGroup >


                    <MyCard title={Api_name} timestp={time} image={image}>
                      {text}
                    </MyCard>


                  </CardGroup>


                )
              })}



            </Row>
          </Container>





          {!tableData ?

            <Container fluid>
              <Row>

                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>

                      <th>BandsinTown</th>
                      <th>Instagram</th>
                      <th>Spotify</th>
                      <th>Youtube</th>
                      <th>Deezer</th>
                    </tr>
                  </thead>

                </Table>
              </Row>
            </Container>

            :

            <Container fluid>
              <Row>

                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>

                      <th>BandsinTown</th>
                      <th>Instagram</th>
                      <th>Spotify</th>
                      <th>Youtube</th>
                      <th>Deezer</th>
                    </tr>
                  </thead>
                  <tbody>


                    <tr>


                      {Object.keys(tableData.results).map((Api_name) => {
                        console.log(tableData.results)
                        let text = ""

                        switch (Api_name) {
                          case "bandsintown":
                            if (tableData.results[Api_name].obj.followers[1] !== undefined) {
                              text = <>{tableData.results[Api_name].obj.followers[1].value}</>
                            }
                            else {
                              text = 'undefined'
                            }

                            break;
                          case "instagram":
                            if (tableData.results[Api_name].obj.followers[1] !== undefined) {
                              text = <>{tableData.results[Api_name].obj.followers[1].value}</>
                            }
                            else {
                              text = 'undefined'
                            }

                            break;

                          case "spotify":
                            if (tableData.results[Api_name].obj.followers[1] !== undefined) {
                              text = <>{tableData.results[Api_name].obj.followers[1].value}</>
                            }
                            else {
                              text = 'undefined'
                            }

                            break;
                          case "youtube":
                            if (tableData.results[Api_name].obj.subscribers[1] !== undefined) {
                              text = <>{tableData.results[Api_name].obj.subscribers[1].value}</>
                            }
                            else {
                              text = 'undefined'
                            }
                            break;
                          case "deezer":
                            if (tableData.results[Api_name].obj.fans[1] !== undefined) {
                              text = <>{tableData.results[Api_name].obj.fans[1].value}</>
                            }
                            else {
                              text = 'undefined'
                            }
                            break;

                        }
                        return (
                          <>
                            <td>{text}</td>
                            {/* <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td> */}
                          </>
                        )
                      })}

                    </tr>

                  </tbody>
                </Table>

              </Row>




            </Container>

          }


        </Container>
      }
    </>
  );
}
export default Dashboard;




