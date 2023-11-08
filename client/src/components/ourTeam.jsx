import { useState, useEffect} from "react"


function OurTeam(){
    const [people, setPeople] = useState([]);

    useEffect(()=>{
        const fetchPeoples = async () => {
            try {
              const response = await fetch('http://192.168.1.117:3000/api/peoples');
              if (!response.ok) {
                throw new Error('Failed to fetch notices');
              }
              const data = await response.json();
                setPeople(data);
              console.log(data); // Log the fetched data
            } catch (error) {
              console.error('Error fetching notices:', error);
            }
          };
          fetchPeoples();
    })
    return(
              <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                      suspendisse.
                    </p>
                  </div>
                  <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                      <li key={person.name}>
                        <div className="flex items-center gap-x-6">
                          <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="Photo" />
                          <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">{person.contact.map((contact)=> contact +", ")}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            
          
          
    )

}export default OurTeam;