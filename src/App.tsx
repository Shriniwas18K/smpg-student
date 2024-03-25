import './App.css';
import OutputCardfield from './Visitor/OutputCardfield';
const products=[
  ['a1-PG,Tilak Colony,sector-26,akurdi,Pune',2500,"./img1.jpg",10123],
  ['Rajesh-PG,satpura road,akurdi,Pune',2000,"./img2.jpg",23141],
  ['Opposite PCCOE campus , Sector-26 , Akurdi',3000,"./img3.jpg",12413],
  ['Gat-24,sector-27,akurdi,Pune',1000,"",43323]
]
function App() {
  const searchForm = document.querySelector('.search-form');
  const searchBox = document.querySelector('.search-box');
  const cardContainer = document.querySelector('.card-container');
  searchForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchBox.value.toLowerCase();
    Array.from(cardContainer.querySelectorAll('.card')).forEach(card => {
      const cardContent = card.textContent.toLowerCase();
      if (cardContent.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  let content=products.map((item,inasd)=>(
    <OutputCardfield address={item[0]} key={inasd}
    imlink={item[2]} rentPerPerson={item[1]} 
    pid={item[3]}/>
  ));
  return (
    <>
      <div className="w-full bg-slate-900 text-white">
        <div className='h-20'>
          <h1 className='font-mono text-2xl text-center font-bold py-5'>Gharseek</h1>
          <form action="#" method="get" className='search-form bg-black py-5'>
            <input type="text" name="search" placeholder="Search for PG" 
            className='search-box mx-2 w-10/12 rounded-lg px-5 py-2 text-black'/>
            <button type="submit" className='bg-black w-9 h-9 text-2xl rounded'>⫸</button>
          </form>
        </div>
      </div>
      <div className="card-container font-sans mt-20 lg:flex">
        {content}
      </div>
    </>
  )
}
export default App
