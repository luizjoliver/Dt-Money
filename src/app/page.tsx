"use client"

import { useState } from "react"
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import NewTransactionModal from "@/components/NewTransactionModal";
import TransactionsProvider, { TransactionsContext } from '@/context/TransactionsContext'

export default function Home() {

  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false)

  function handleCloseNewTransactionModal (){
    setIsNewTransactionModalOpen(false)
  }
  function handleOpenNewTransactionModal (){
    setIsNewTransactionModalOpen(true)
  }

  return (
   <>
    <TransactionsProvider>

       <Header openModal={handleOpenNewTransactionModal}/>

        <Dashboard/>

        <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}/>

    </TransactionsProvider>
   </>
  )
}
