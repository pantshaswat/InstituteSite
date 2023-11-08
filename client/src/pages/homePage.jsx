import Carousel from "../components/carousel"
import WelcomeBoard from "../components/welcome";
import Footer from "../components/footer";
import NoticePreview from "../components/notices";
function HomePage(){
    return(
        <>
        <Carousel/>
        <div style={{height:'40px'}}></div>
        <WelcomeBoard/>
        <div style={{height:'40px'}}></div>

        <NoticePreview/>
        
        </>
      
            )
}
export default HomePage;