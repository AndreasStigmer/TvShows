import { useRouter } from "next/router"
import { FC, FormEventHandler, useState } from "react"


const SearchFormComponent:FC = () => {

    const router=useRouter()
    const [term, setTerm] = useState('')
    const handleSubmit:FormEventHandler=(event)=>{
        event.preventDefault()
        router.push(`/?term=${term}`)
        setTerm('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Sök</label>
            <input onChange={ (e)=>{setTerm(e.target.value)}} className='mx-3 py-1 border-slate-500 border-spacing-1 rounded-md' type={'text'}  />
            <button className='px-6  rounded-md p-1 bg-rose-600  text-rose-200' type='submit'>Sök</button>
        </form>
    )
}

export default SearchFormComponent