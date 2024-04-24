import './App.css';
import Cards from './Visitor/Card';

const properties = [
  ["a1-pg", "santkrupa-colony, near dharmaraj-chowk, akurdi-411435", "300sqft", "3000Rs/person", "8999883840", "description here", "./img1.jpg", "./img2.jpeg", ""],
  ["b2-flat", "Shivaji Nagar, Model Colony, Pune-411016", "500sqft", "5000Rs/person", "9876543210", "description here", "./img3.jpg", "./img4.png", ""],
  ["c3-villa", "Baner Road, Near Highway Junction, Pune-411045", "1000sqft", "10000Rs/person", "8765432109", "description here", "./img5.png", "./img6.png", ""],
  ["d4-apartment", "Kothrud, Near Bus Depot, Pune-411029", "700sqft", "7000Rs/person", "7654321098", "description here", "./img7.png", "./img3.jpeg", ""],
  ["e5-studio", "Aundh, Near Shopping Complex, Pune-411007", "400sqft", "4000Rs/person", "6543210987", "description here", "./img19.jpeg", "./img12.jpeg", ""],
  ["f6-condo", "Hadapsar, Near IT Park, Pune-411028", "600sqft", "6000Rs/person", "5432109876", "description here", "./img16.jpeg", "./img17.jpeg", ""],
  ["g7-penthouse", "Koregaon Park, Near Osho Ashram, Pune-411001", "800sqft", "8000Rs/person", "4321098765", "description here", "./img18.jpeg", "./img19.jpeg", ""],
  ["h8-duplex", "Wakad, Near Hinjewadi IT Park, Pune-411057", "900sqft", "9000Rs/person", "3210987654", "description here", "./img15.jpg", "./img16.jpeg", ""],
  ["i9-cottage", "Kalyani Nagar, Near Joggers Park, Pune-411014", "1200sqft", "12000Rs/person", "2109876543", "description here", "./img17.jpeg", "./img18.jpeg", ""],
  ["j10-townhouse", "Magarpatta City, Near Shopping Mall, Pune-411028", "1500sqft", "15000Rs/person", "1098765432", "description here", "./img19.jpeg", "./img20.jpeg", ""]
];


function App() {
  let content=properties.map((item,inasd)=>(
    <Cards addrs={item[1]} key={inasd} pgname={item[0]}
    phone={item[4]} rent={item[3]} area={item[2]}
    im1={item[6]} im2={item[7]} im3={item[8]} className="cardone"
    />
  ));
  return (
    <>
      <div className="w-full bg-black text-white hidden md:block ">
        <div className='h-20'>
          <h1 className='font-mono text-3xl text-center font-bold py-5'>Gharseek</h1>
          <form action="#" method="get" className='search-form bg-black py-5'>
            <input type="text" name="search" placeholder="Search for PG" 
            className='search-box mx-2 w-10/12 rounded-lg px-5 py-2 text-black '/>
            <button type="submit" className='bg-black w-9 h-9 text-2xl rounded'>⫸</button>
          </form>
        </div>
      </div>
      <div className="font-sans  lg:flex card-list bg-black mt-16">
        {content}
      </div>
    </>
  )
}
export default App
