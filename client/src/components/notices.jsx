
import '../App.css'
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";

export default function NoticePreview() {
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
  
  
  return (
    <div className="py-24 sm:py-32 bg-gray-800 rounded-[50px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight font-bold text-white sm:text-6xl">Notice Preview</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Be up to date with our notices and news
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {notices.map((notice) => (
            <article key={notice.notice_id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="relative">
                <div className=" relative overflow-hidden " style={{height: '400px', width:"350px"}} >
                <img src= {`https://institute-site.vercel.app/uploads/${notice.notice_picture}`} alt="" className='img-container rounded-[15px]'  />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-transparent to-white text-center p-3 ">
                  <h3 className="text-lg font-bold leading-6 text-gray-900">
                    <Link to="/news-events">
                      {notice.notice_title}
                      <p className="mt-2 font-semibold line-clamp-3 text-sm leading-6 text-gray-900">{notice.notice_description}</p>
                    </Link>
                  </h3>
                 
                </div>
              </div>
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
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
