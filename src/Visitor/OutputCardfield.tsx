export default function OutputCardfield(props :any){
    return(<>
        <div className="card text-xl font-mono px-4 py-2 rounded  
        bg-slate-100 mb-2 mx-2">
        {props.attr}:{props.value}
        </div>
    </>)
}