
export default function Footer(){
    const email = "icsdhangadhi64@gmail.com";
    const contacts = ["9848487997","091-526818"]
    return(
      
<footer id="footer"
  className="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600">
   <div style={{marginTop:'20px', fontFamily:'Fjalla One'}}>Contact Us</div> 
  <div className="container pt-9">
    <div className="mb-9 flex justify-center">
     
      <a href="https://www.facebook.com/ics.dhangadhi" target="_blank" style={{marginRight:"20px", marginLeft:"20px"}} className="text-neutral-800 dark:text-neutral-200">
        <img src="photos/facebook.png" alt="" />
      </a>
     
      <a href={`mailto:${email}`} target="_blank" style={{marginRight:"20px"}} className="text-neutral-800 dark:text-neutral-200">
        <img src="photos/gmail1.png" alt="" />
      </a>
      <a href={`tel:${contacts[0]}`} target="_blank" style={{marginRight:"20px"}} className="text-neutral-800 dark:text-neutral-200">
        <img src="photos/contact.png" alt="" />
      </a>
    </div>
    <div>
        Phone:  
      <a href={`tel:${contacts[0]}`} className="text-neutral-800 dark:text-neutral-200">
        {` ${contacts[0]}`}
      </a>
      <a href={`tel:${contacts[1]}`} className="text-neutral-800 dark:text-neutral-200">
        , {contacts[1]}
      </a>
      </div>
    <div>
        Email:  
      <a href={`mailto:${email}`} className="text-neutral-800 dark:text-neutral-200">
        {` ${email}`}
      </a>
      
      </div>
  </div>

  {/* <!--Copyright section--> */}
  <div
    className="w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:
    <a
      className="text-neutral-800 dark:text-neutral-400"
      href="http://localhost:5173/"
      > Institute of Community Services</a
    >
  </div>
</footer>
)
   } 
