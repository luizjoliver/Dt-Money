"use client"

import useTransactions from "@/hooks/useTransactions";
import { FormEvent,  useState } from "react";
import Modal from "react-modal" ;



interface NewTransactionModalProps{
    isOpen:boolean,
    onRequestClose : () => void
}

export default function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps) {

  const [title,setTitle] = useState("")
  const [amount,setAmount] = useState(0)
  const [category,setCategory]= useState("")
  const [type,setType] = useState("deposit")

    const {createTransaction}= useTransactions()

    async function handleCreateNewTransaction (event:FormEvent){
      event.preventDefault()

      await createTransaction({title,category,amount,type})


      setTitle("")
      setAmount(0)
      setType("depoist")
      setCategory("")
      onRequestClose()
    }

  return (
    <Modal isOpen = {isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="p-12 max-w-xl w-full relative bg-shape rounded-md">

      <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close">
        <img src="./fechar.svg" alt="fechar modal" />
      </button>
          <form onSubmit={handleCreateNewTransaction}>
            <h2 className="text-dark-gray text-2xl mb-8">Cadastrar transação</h2>

              <input 
              className="w-full px-6 h-16 rounded-md bg-stone-100 border-2
               border-stone-300 font-normal text-lg"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
              placeholder="titulo"
               />

               <input 
              className="w-full px-6 h-16 rounded-md bg-stone-100 border-2
               border-stone-200 font-normal text-lg  mt-4"
              placeholder="valor"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              type="number"
               />

                <div className="my-4 grid grid-cols-2 gap-2 ">

                  <button type="button"
                  onClick={() => { setType("deposit") }}
  
                  className={ type === "deposit" ? "deposit" : "normal"}>

                    <img src="./Entradas.svg" alt="Entrada" className="h-5 w-5" />

                    <span className="inline-block ml-4 text-base text-dark-gray">Entrada</span>

                  </button>

                  <button type="button"
                  onClick={() =>{ setType("withdraw")}}
                  className={ type === "withdraw" ? "withdraw" : "normal"}>

                    <img src="./Saidas.svg" alt="Saida" className="h-5 w-5"  />

                    <span className="inline-block ml-4 text-base text-dark-gray">SaÍda</span>

                  </button>

                </div>

               <input 
              className="w-full px-6 h-16 rounded-md bg-stone-100 border-2
              border-stone-200 font-normal text-lg mt-4"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="categoria"
               />

                <button type="submit"
                className="w-full px-6 h-16 bg-green text-stone-50 rounded border-0
                text-base mt-6 hover:brightness-90 duration-200 font-semibold">
                  Cadastrar
                </button>
          </form>
   </Modal>
  )
}
