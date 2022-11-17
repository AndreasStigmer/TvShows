import Link from "next/link"
import { FC } from "react"
import { TvShow } from "../src/types"

interface TvProps {
    tvShow:TvShow
}

const TvShowListItem:FC<TvProps> = ({ tvShow }: { tvShow: TvShow }) => {
    return (
        <div key={tvShow.id} className='bg-rose-900 rounded-lg shadow-md'>
            <div className=' grid grid-cols-4 mt-5 p-2 ' >
                <div className=' rounded-l-lg bg-rose-100'>
                    <img src={tvShow.image.medium} alt={tvShow.name} className='w-max rounded-l-lg'/>
                </div>
                <div className='bg-rose-100 pt-2 p-5 rounded-r-lg col-span-2'>
                    <h2 className='text-3xl uppercase  font-semibold tracking-wide text-slate-800'>{tvShow.name}</h2>
                    <p className='text-slate-700'>{tvShow.summary.replace(/(<([^>]+)>)/gi,"")}</p>
                </div>
                <div></div>
                
            </div>

            <div className='flex justify-end p-3'>
                <Link className='rounded-sm block p-2 bg-rose-300'  href={tvShow.url}> <span className=' text-white'>To TvMaze</span></Link>
            </div>
            </div>
            )
}

export default TvShowListItem