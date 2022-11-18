import React from 'react'
import Main from '../component/Main'
import Row from '../component/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title='Up coming' fetchURL={requests.RequestUpcoming} />
      <Row rowID='2' title='Top Rated' fetchURL={requests.RequestTopRated} />
      <Row rowID='3' title='Popular' fetchURL={requests.RequestPopular} />
      <Row rowID='4' title='Movies' fetchURL={requests.RequestMovies} />
     </>
  )
}

export default Home