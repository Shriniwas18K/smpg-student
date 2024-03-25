export default function OutputCardfield(props :any){
    return(<>
        <div className="card text-xl font-mono px-4 py-2 rounded  
        bg-slate-100 mb-2 mx-2">
        <div className="card-content">
            <h1>{props.address}</h1>
            <p className="rent">{props.rentPerPerson}</p>
            <img src={props.imlink} alt="" />
        </div>
        </div>
    </>)
}