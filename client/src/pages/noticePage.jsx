
import { useState,useEffect } from 'react';
import '../App.css'

function NoticePage(){
    const [notices, setNotices] = useState([]);
    useEffect(() => {
      const fetchNotices = async () => {
        try {
          const response = await fetch('https://institute-site.vercel.app/api/notices');
          if (!response.ok) {
            throw new Error('Failed to fetch notices');
          }
          const data = await response.json();
          setNotices(data);
          console.log(data); // Log the fetched data
        } catch (error) {
          console.error('Error fetching notices:', error);
        }
      };
    
      fetchNotices();
    }, []);
    return(
        <>
        {notices.map((notice, index)=>(
            <div key={notice.notice_id}>
                 <div  className="  grid border-t border-gray-200   lg:grid-cols-3 flex ">
   <div className="max-w-sm side-margin overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ width:"350px"}}>
    <a href="#">
        <img className="rounded-t-lg img-container rounded-[15px] "style={{height: '400px', width:"350px"}} src={`https://institute-site.vercel.app/uploads/${notice.notice_picture}`} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{notice.notice_title}</h5>
        </a>
        <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={notice.notice_date.split("T")[0]} className="text-gray-500">
                  {notice.notice_date.split("T")[0]}
                </time>
                <div
                  className="relative z-10  bg-gray-800 px-3 py-1.5 font-medium text-gray-600 "
                >
                  {notice.notice_type}
                </div>
              </div>
       
    </div>
</div>

<p className=' side-margin '>
    {notice.notice_description}
</p>

</div>
{index !== notices.length - 1 && <hr />}
            </div>
               
        )

        )}
        
        </>
    )
}
export default NoticePage;