import { leftarrow,note,ellipsevertical } from '../assets'

export const Header = ({headerContent}:{headerContent:any}) => {
  
  return (
    <div className='p-8 flex flex-col gap-6 border-b-2'>
      <div className="flex items-center justify-between">
        <div className="flex gap-4 justify-center items-center">
          <img src={leftarrow} alt="back" className='w-6 h-6 text-black cursor-pointer' />
          <h1 className='text-2xl font-bold'>{headerContent.name}</h1>
        </div>
        <div className="">
          <img src={note} alt="note" className='w-6 h-6 text-black cursor-pointer' />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex justify-center items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-500"></div>
          <div className="flex flex-col">
            <div className="flex gap-2"><span className='text-gray-400 font-semibold text-xl'>From</span><h2 className='text-xl font-semibold'>{headerContent.from}</h2></div>
            <div className="flex gap-2"><span className='text-gray-400 font-semibold text-xl'>To</span><h2 className='text-xl font-semibold'>{headerContent.to}</h2></div>
          </div>
        </div>
        <div className="">
          <img src={ellipsevertical} alt="options" className='w-6 h-6 text-black cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}
