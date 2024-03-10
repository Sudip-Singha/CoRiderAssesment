import {useState,useEffect} from 'react'
import { Header,Chats,SendMessage } from './components'

type HeaderContent = {
  name: string,
  from: string,
  to: string,
}

export const App = () => {
  const [headerContent, setHeaderContent] = useState<HeaderContent|{}>({})
  
  useEffect(() => {
    fetch("https://qa.corider.in/assignment/chat?page=0")
      .then((res) => res.json())
      .then(({from,name,to}) => {
        setHeaderContent({
          from,name,to
        })
      })
  }, [])

  return (
    <div className="p-2">
      <Header headerContent={headerContent}/>
      <Chats/>
      <SendMessage/>
    </div>
  )
}
