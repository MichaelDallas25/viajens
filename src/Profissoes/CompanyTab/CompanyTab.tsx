
import './CompanyTab.css'

interface ComapanyTabProps {
  itemAtual:number;
  companies:string[];
  setItemAtual:(index:number) => void
}

function CompanyTab({companies,setItemAtual, itemAtual}: ComapanyTabProps) {
  return (

    <div>
    {companies.map((item,index) => (
      <button key={item} onClick={() => setItemAtual(index) }>{item}</button>
    ))}

    </div>
  )
}

export default CompanyTab