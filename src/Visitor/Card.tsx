import OutputCardfield from "./OutputCardfield"
export default function Cards() {
    return (
        <div className="flex justify-center items-center h-fit m-5">
            <div className="max-w-4xl w-full px-6 py-8 bg-gray-100 shadow-md rounded-md" >
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <OutputCardfield attr="Owner name" value="output owner name" />
                        <OutputCardfield attr="Address" value="output owner address" />
                        <OutputCardfield attr="Owner phone number" value="output owner number" />
                        <OutputCardfield attr="Rent per person" value="output rent" />
                        <OutputCardfield attr="Area in Sqft" value="output area" />
                        <OutputCardfield attr="Wifi Availability" value="output wifi" />
                        <OutputCardfield attr="Pincode" value="output pincode" />
                        <OutputCardfield attr="Furnished" value="output Furnished" />
                        <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                            <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <div className="flex justify-center">
                                    <div className="flex flex-wrap gap-4">
                                        <img src="./img1.jpg" alt="Image 1" className="w-72 md:w-32 h-min  rounded-md" />
                                        <img src="./img2.jpeg" alt="Image 2" className="w-72 md:w-32 h-min  rounded-md" />
                                        <img src="./img3.jpg" alt="Image 3" className="w-72 md:w-32 h-min rounded-md" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}


async function processData() {
    fetch('https://smpg.onrender.com/retrieveProperties/412434').then(data => {
        return data.json()
    }).then(data => {
        let content=data.map((item:any) => {
            
        })
        return content;
    })
}

processData();
