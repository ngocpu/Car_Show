'use client'
import { CustomFilterProp } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Fragment,useState } from 'react'
import { Listbox,Transition } from '@headlessui/react'
import {updateSearchParams} from '@/utils/fetchData'
export const CustomFilter = ({title,options}:CustomFilterProp) => {
  const router = useRouter()
  const [selected, setSelected]  = useState(options[0])
  
  const handleUpdatePrams = (e:{title:string, value:string}) =>{
    const newPathName = updateSearchParams(title.toLowerCase(), e.value.toLowerCase())
    router.push(newPathName)
  }
  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e)
          handleUpdatePrams(e)
        }}
        
      >
        <div className="relative  w-fit z-10">
          <Listbox.Button className='custom-filter__btn'>
              <span className='block truncate'>{selected.title}</span>
              <Image src='/chevron-up-down.svg' alt='icon' width={20} height={20} className='object-contain ml-4'/>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {options.map(option =>(
                <Listbox.Option
                  value={option}
                  key={option.title}
                  className={({active}) =>`relative cursor-default, select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                >
                  {({selected}) =>(
                    <span className={`block truncate ${selected ?'font-bold' :'font-normal'}`}>{option.title}</span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
function updateSearchPrams(arg0: string, arg1: string) {
  throw new Error('Function not implemented.')
}

