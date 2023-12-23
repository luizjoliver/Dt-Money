"use client"

import useTransactions from "@/hooks/useTransactions"
import {Model, createServer } from "miragejs"



createServer({
  models:{
    transaction:Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:"Freelancer website",
          type:"deposit",
          category:"dev",
          amount:1000,
          createdAt: "2021-04-11 09:00:00"
        },
        {
          id:2,
          title:"Hamburguer",
          type:"withdraw",
          category:"casa",
          amount:59,
          createdAt: "2021-04-12 09:00:00"
        }
      ]
    })
  },

  routes() {
    this.namespace = "api"

    this.get("/transactions",() =>{

      return this.schema.all("transaction")

    }),
    this.post("/transactions", (schema,request) =>{
      
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction",data)
      
    })
  }
})


export default function TransactionsTable() {

    const {transactions} = useTransactions()

  return (
    <div className="my-16">
      <table className="w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="text-gray text-left">
            <th className="text-gray py-4 px-8">Titulo</th>
            <th className="py-4 px-8">Valor</th>
            <th className="py-4 px-8">Categoria</th>
            <th className="py-4 px-8">Data</th>
          </tr>
        </thead>
        <tbody className="text-gray rounded-md">
          {transactions.map((transaction) => (
            <tr  className="bg-shape" key={transaction.id}>

              <td className="py-2 px-4 font-bold text-dark-gray">{transaction.title}</td>

              <td className={transaction.type === "deposit" 
              ? "py-2 px-4 text-green"
              :"py-2 px-4 text-red"}>
                {new Intl.NumberFormat("pt-BR", {
                  style:"currency",
                  currency:"BRL"
                }).format(transaction.amount)}
                </td>

              <td className="py-2 px-4">{transaction.category}</td>

              <td className="py-2 px-4 ">
                {new Intl.DateTimeFormat("pt-BR")
                .format(new Date(transaction.createdAt))
                }
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}