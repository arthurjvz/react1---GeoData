import { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalContent"

export default function ListCard({country}) {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <li 
      onClick={() => setShowModal(!showModal)} //Lorsque je click dans une case du li -> on inverse la valeur "showModal"
      className="relative cursor-pointer rounded transition-transform duration-300 hover:-translate-y-1 will-charge-transform">
        <h2 className="absolute left-0 top-0 p-2 bg-gray-50 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] text-xl rounded">{country.name.common}</h2>

        <h2></h2>
        <img 
        className="w-full h-full object-cover rounded"
        src={country.flags.svg} alt="" />
        
    </li>
    {showModal && createPortal (<ModalContent country={country} closeModal={() => setShowModal(!showModal)}/>, document.body)} 
    {/* Si ShowModal est vrai -> exeucter la méthode "createPortal" 
    createPortal prend 2 paramètre : ce qu'il faut afficher "ModalContent" et ou "document.body" */}
    </>
  
  )
}
