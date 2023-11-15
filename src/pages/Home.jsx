import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
      <Main/>
      <Row RowId='1' title="UpComing" fetchUrl={requests.requestUpcoming}/>
      <Row RowId='2' title="popular" fetchUrl={requests.requestPopular}/>
      <Row RowId='3' title="Trending" fetchUrl={requests.requestTrending}/>
      <Row RowId='4' title="Top Rated" fetchUrl={requests.requestTopRated}/>
      <Row RowId='5' title="Horror" fetchUrl={requests.requestHorror}/>
    </>
  )
}

export default Home 