'use client'
import { useState } from 'react'
import { SearchManufacturer } from './SearchManufacturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const router = useRouter()
    const SearchButton =({otherClass}:{otherClass:string}) =>(
      <button type='submit' className={`-ml-3 z-10 ${otherClass}`}>
        <Image src='/magnifying-glass.svg' alt='search icon' width={40} height={40} className='object-contain'/>
      </button>
    )
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault()
      if(manufacturer === '' && model ===''){
        return alert('please fill in the search')
      }
      updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
    }
    const updateSearchParams =(model:string ,manufacturer:string) => {
      const searchParams = new URLSearchParams(window.location.search)
      if(model) searchParams.set('model',model)
      else searchParams.delete('model')

      if(manufacturer) searchParams.set('manufacturer',manufacturer)
      else searchParams.delete('manufacturer')

      const newPathName = `${window.location.pathname}?${searchParams.toString()}`

      router.push(newPathName)
    }
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
            <SearchButton otherClass='sm:hidden'/>
        </div>
        <div className="searchbar__item">
          <Image src='/model-icon.png' alt='model icon' width={20} height={20} className='absolute w-[20px] h-[20px] ml-4' />
          <input 
            type='text'
            name='model'
            value={model}
            onChange={(e) =>{setModel(e.target.value)}}
            placeholder='Tiguan'
            className='searchbar__input'
          />
          <SearchButton otherClass='sm:hidden'/>
        </div>
        <SearchButton otherClass='max-sm:hidden'/>

    </form>
  )
}
