import { useState,useEffect } from 'react';
import { verified } from '../assets';

type Chats = {
  message: string,
  sender: {
    image: string,
    is_kyc_verified: boolean,
    self: boolean,
  },
  time: string,
}

export const Chats = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const [chats, setChats] = useState<Chats[]>([])

  let dateString = chats[0]?.time
  let dateObj = new Date(dateString);
  let formattedDate = dateObj.toLocaleString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })

  const handleScroll = (e:any) =>{
    const { scrollTop } = e.target;
    if (scrollTop == 0) {
      fetchMessages();
    }
  }

  const fetchMessages = () =>{
    fetch(`https://qa.corider.in/assignment/chat?page=${pageNumber}`)
    .then((res) => res.json())
    .then(({chats}) => {
      setChats(prevChats => [...prevChats,...chats])
      setPageNumber(pageNumber => pageNumber+1)
    })
  }

  useEffect(() => {
   fetchMessages()
  }, [])
  
  
  return (
    <div className='p-2 overflow-y-auto h-[70vh]' onScroll={handleScroll}>
      <div className="flex gap-2 items-center justify-between">
          <div className="w-[40%] bg-gray-400 h-[2px]"></div>
          <div className="text-gray-400 w-[30%] flex justify-center">{formattedDate.slice(0,8)}</div>
          <div className="w-[40%] bg-gray-400 h-[2px]"></div>
        </div>
     {chats.map((chat,i:number) => (
        <div className="mt-2"key={i}>
            <div className={`flex gap-4 m-4 ${chat?.sender?.self && 'justify-end'}`} key={i}>
              {!chat?.sender?.self && (
                <div className="flex justify-center h-[30%] w-[30%] bg-orange-300 sm:w-[4rem] sm:h-[4rem] items-center rounded-full relative">
                  <img src={chat?.sender?.image} alt="user-photo" className='w-[100%] h-[100%] rounded-full' />
                    {chat?.sender?.is_kyc_verified && (
                      <img src={verified} alt="verified" className='w-4 h-4 absolute right-0 -bottom-1' />
                    )}
                </div>
              )}
              <div className={`flex flex-col p-2 pl-4 pr-4 rounded-2xl sm:w-[50%] ${chat?.sender?.self ? 'bg-blue-400 text-white rounded-br-none' : 'bg-gray-100 rounded-tl-none'}`}><p>{chat?.message}</p><p className='mt-2 self-end'>{chat?.time.slice(10,)}</p></div>
            </div>
        </div>
     ))}
    </div>
  )
}
