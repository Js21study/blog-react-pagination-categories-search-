import { useEffect, useState } from 'react'
import './App.css'
import Block from './components/Block'
// import { dataDB  } from './assets/db'
import img from './assets/img/img.svg'


function App() {
  const [data, setData] = useState([])
  const [category, setCategory] = useState(0)
  const [pagination, setPagination] = useState(1)
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://638f44004ddca317d7f333ea.mockapi.io/data?page=${pagination}&limit=3&${
      Number(category) > 0 ? `category=${category}`: ''}&${search ? `&search=${search}` : ''} `)
    .then(res => res.json())
    .then(res => {
      setData(res)
      setIsLoading(false)
    })
    

  }, [category, pagination, search])
  console.log(pagination);
  
  const categories = [ 'All', 'London', 'Italy', 'Paris']
  const paginations = [ 1, 2, 3, 4]

  return (
    <div className="wrapper">
      <div className='title'><h1>My blog from different countries</h1> <img  width={'64px'} src={img} alt="image" /> </div>
      <div className='categories'>
        <ul>
          {categories.map((cat, i)=> <li className={category === i ? 'active' : ''} onClick={() =>{ 
            setSearch('')
            setCategory(i)}
            } key={cat}>{cat}</li>)}
          </ul>

        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
      </div>
      {!isLoading
      ?
      <div className='card-block'>
        {data
        // .filter(obj => {
        //   return obj.name.toLowerCase().includes(search.toLowerCase())
        // })
        .map( obj => <Block key={obj.id} images={obj.images} name={obj.name}/>)}
      </div>
      :
      'Loading...'
      }
      <div className='pagination'>
      <ul>
          {paginations.map((pag, i)=> <li className={ pagination -1  === i  ? 'active' : ''} onClick={() => setPagination(i + 1)} key={i}>{pag}</li>)}
          </ul>
        </div>
      
    </div>
  )
}

export default App
