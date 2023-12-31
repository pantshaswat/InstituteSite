import { useState, useEffect } from "react";

function Carousel(){
    const totalSlides = 5;
    const [currentSlide, setCurrentSlide] = useState(1);
    const activeSlideClass = "duration-700 ease-in-out "
    const inactiveSlideClass = "hidden duration-700 ease-in-out"
    const activeDotColor = "dark:bg-gray-800/50"
    const inactiveDotColor = "bg-white/70 dark"
    const[carouselbackendImage, setCarouselBackendImage] = useState([]);
    
    useEffect(()=>{
        fetch(`https://institute-site.vercel.app/api/images`)
        .then((res)=> res.json())
        .then((data)=> setCarouselBackendImage(data.homeImages))
        
    },[])
    

    const handlePrevClick = ()=>{
        setCurrentSlide((prevSlide)=>{
            return prevSlide > 1 ? prevSlide - 1 : totalSlides;
        });
    };
    const handleNextClick = ()=>{
        setCurrentSlide((prevSlide)=>{
            return prevSlide < totalSlides ? prevSlide + 1 : 1;
        });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentSlide((prevSlide) => {
            return prevSlide < totalSlides ? prevSlide + 1 : 1;
          });
        }, 4000);
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []); //runs only once when the component mounts
    return(
        <>
       
    <div id="default-carousel" className="relative w-full" data-carousel="slide" >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative  carousel-height overflow-hidden rounded-[50px] ">
             
            {
                carouselbackendImage.length != 0 ? (
                    carouselbackendImage.map((image,index)=>( 
                        <div key={index} className={currentSlide === index+1?activeSlideClass:inactiveSlideClass} data-carousel-item>
                            <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 img-container "  alt="images" onError={(e)=>{
                                e.target.src = "photos/imgPlaceHolder.jpg"
                            }}/>
                        </div>
                    
                    ))
                ): (
                    <img src="photos/imgPlaceHolder.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 img-container "  alt="images" 
                    />
                )
                
            }
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 ">
            <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 1?activeDotColor:inactiveDotColor}`}  ></button>
            <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 2?activeDotColor:inactiveDotColor}`} ></button>
            <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 3?activeDotColor:inactiveDotColor}`} ></button>
            <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 4?activeDotColor:inactiveDotColor}`} ></button>
            <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 5?activeDotColor:inactiveDotColor}`} ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrevClick}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/80 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-1000" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none " data-carousel-next onClick={handleNextClick}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-gray-800/80 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-1000" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
    
        </>
    )
    }
    export default Carousel