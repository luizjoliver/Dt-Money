import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable";

export default function Dashboard() {
  return (
    <main className="w-9/12 mx-auto my-0 py-10 px-4">
        <Summary/>
        <TransactionsTable/>
    </main> 
  )
}
