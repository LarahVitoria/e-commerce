
const Pagination =  ({pages,setCurrentPages}) => {
  return (
    <div>
      {Array.from(Array(pages), (itens, index) =>{
        return <button value={index} onClick={(e:any) => setCurrentPages(Number(e.target.value))}>{index}</button>
      })}
    </div>
  )
}
export default Pagination;
