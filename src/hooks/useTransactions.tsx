import { useContext } from "react";
import { TransactionsContext } from "@/context/TransactionsContext";



export default function useTransactions() {

    
const useTransactions = useContext(TransactionsContext)

return useTransactions
}
