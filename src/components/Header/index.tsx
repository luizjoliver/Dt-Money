export default function Header(
  {
    openModal
  }:{
  openModal : () => void
}) {



  return (
    <header className="w-full bg-blue">
        <div className="flex items-center justify-between my-0 mx-auto w-9/12 pr-4 pt-2 pb-44">
            <img src="/Logo.svg" alt="dt money" />
            <button type="button" 
            onClick={openModal} 
            className="text-xl text-white bg-blue-light border-0 px-8
            rounded-md h-10 hover:brightness-90 duration-300 transition"
            > Nova transação 
            </button>

          

        </div>
    </header>
  )
}
