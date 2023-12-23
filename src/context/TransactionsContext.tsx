import {ReactNode, createContext, useEffect, useState} from "react";
import api from "@/services/api";

interface TransactionsInterface {
    id:string,
    type:string,
    amount:number,
    createdAt:Date,
    category:string,
    title:string
  };

interface TransactionsContextData {
  transactions: TransactionsInterface[],
  createTransaction: (transaction:TransactionsInput) => Promise<void>
}

interface TransactionsProviderProps{
    children: ReactNode;
} 
type TransactionsInput = Omit<TransactionsInterface,"id"|"createdAt">


export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)


export default function TransactionsProvider({children}:TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<TransactionsInterface[]>([]);

  useEffect(() => {
    api.get("/transactions").then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput:TransactionsInput){
    
    const resp = await api.post("/transactions",{...transactionInput, createdAt: new Date()})
    const {transaction} = resp.data

    setTransactions([...transactions,transaction])

  }


  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
    </TransactionsContext.Provider>
  )
}
