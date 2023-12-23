

import useTransactions from "@/hooks/useTransactions"


export default function Summary() {

    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc,transaction) =>{

        if(transaction.type === "deposit"){
           acc.deposits += transaction.amount
           acc.total +=  transaction.amount
        } else{
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    },{ deposits:0 , withdraws:0 , total:0})
    

  return (

    <div className="grid grid-cols-3 gap-8 -mt-40">

        <div className="bg-shape py-6 px-8 rounded text-dark-gray">

            <header className="flex items-center justify-between">
                <p>Entradas</p>
                <img src="/Entradas.svg" alt="Entradas" />
            </header>
            <strong className="block text-3xl font-normal leading-10">+{new Intl.NumberFormat("pt-BR", {
                  style:"currency",
                  currency:"BRL"
                }).format(summary.deposits)}</strong>
        </div>

        <div className="bg-shape py-6 px-8 rounded text-dark-gray">
            <header className="flex items-center justify-between">
                <p>Saidas</p>
                <img src="/Saidas.svg" alt="Entradas" />
            </header>
            <strong className="block mt-4 text-3xl font-normal leading-10">-{new Intl.NumberFormat("pt-BR", {
                  style:"currency",
                  currency:"BRL"
                }).format(summary.withdraws)}</strong>
        </div>

        <div className="bg-green py-6 px-8 rounded text-white">
            <header className="flex items-center justify-between">
                <p>Total</p>
                <img src="/Total.svg" alt="Entradas" />
            </header>
            <strong className="block text-3xl font-normal leading-10">{new Intl.NumberFormat("pt-BR", {
                  style:"currency",
                  currency:"BRL"
                }).format(summary.total)}</strong>

        </div>

    </div>
  )
}
