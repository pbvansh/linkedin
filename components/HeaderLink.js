import { Avatar } from "@mui/material";

const HeaderLink = ({Icon,text,avtar,feed}) =>{
   return(
    <>
   
   <div className={'cursor-pointer flex flex-col justify-center items-center ${feed ? "text-black hover:text-blue-300 dark:text-white/75 dark:hover:text-white/75 lg:-mb-1.5 space-y-1 " : "text-gray-500 hover:text-gray-500"}}'}>
    {
        avtar? <Icon className="!h-7 !w-8 lg:!-mb-1"/>:<Icon/>
      
    }
    
    <h4 className="sm:text">{text}</h4>
  </div>
 
  </>
   );
}
export default HeaderLink