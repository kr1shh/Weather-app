
export const Search = ({ handleChange }) => {
  return(
    <div>
      <input onChange={ handleChange } type="text" placeholder="Search" required className="font-montserrat text-md py-1 px-2 rounded-full focus:outline-none"/>
    </div>
  )
}



export const Button = ({ handleClick }) => {
  return (
    <div>
        <button onClick={ handleClick } className="bg-white text-black py-2 px-4 rounded-full font-montserrat text-xs hover:bg-slate-100">
            search
        </button>
    </div>
  )
}
