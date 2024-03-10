import { attach,send } from "../assets"

export const SendMessage = () => {
  return (
    <div className="p-2 relative mb-4">
      <input type="text" placeholder="Reply" className="p-2 w-[100%] outline-none border-none bg-gray-100 rounded-lg"/>
      <img src={attach} alt="attach" className="w-6 h-6 absolute right-16 bottom-4 cursor-pointer"/>
      <img src={send} alt="send" className="w-6 h-6 absolute right-8 bottom-4 cursor-pointer"/>
    </div>
  )
}
