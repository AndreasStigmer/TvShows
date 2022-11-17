import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SearchFormComponent from '../components/SearchFormComponent'
import { TvShow } from '../src/types'
import TvShowListItem from './../components/TvShowListItem';


export const getServerSideProps:GetServerSideProps=async(context)=>{
  
  const {term}=context.query
  let url="https://api.tvMaze.com/"

  //Anpassar urlen beroende på om det finns en sökterm eller inte
  if(term){
    url+=`search/shows?q=${term}`
  }else {
    url+=`shows`
  }
  let res=await fetch(url)

  if(!res.ok){
    throw new Error("Error")
  }
  let data=await res.json()
  let shows:TvShow[]

  if(term){
    shows=data.map((item:any)=> {
      return item.show as TvShow
    })
  }
  else {
    shows=data as TvShow[]
  }



  return {
    props:{
      shows
    }
  }
}

interface TvProps {
  shows:TvShow[]
}

const Home: NextPage<TvProps> = ({shows}) => {

  return (
    <div className='max-w-screen-lg m-auto p-2 bg-pink-50'>
      <h1 className='text-4xl'>TV Shows</h1>

      <div className='mt-5'>
        <SearchFormComponent></SearchFormComponent>
      </div>

      {shows.map((show:TvShow)=>(
        <TvShowListItem key={show.id} tvShow={show}></TvShowListItem>
      ))}
    </div>
  )
}

export default Home
