import Image from "next/image"
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HeaderLink from "../components/HeaderLink";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
const Home = ()=>{
  return (
    <>
       {/* <h1> This is home page</h1> */}
       <div space-y-10 relative>
        <header className="flex justify-around items-center py-4">
            <div className="relative w-36 h-10 ">
            <Image src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" layout="fill" objectFit="contain" />
            </div>

            
                <div className="flex items-center sm:divide-x divide-gray-100">
                  
                <div className="sm:flex space-x-8 pr-4">
                <HeaderLink Icon={ExploreIcon} text="Discover" />
            <HeaderLink Icon={GroupIcon} text="People" />
            <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
              </div>
              <div className="pl-4">
              <button className="text-blue-500 font-semibold rounded-full border border-blue-600 px-5 py-1.5 transition-all hover:border-2">Sign in</button>

              
              </div>
             </div>
            

        </header>

        <main className="flex flex-col xl:flex-row items-center max-w-screen-lg max-auto">
          

        <div className="space-y-6 ml-20">
          <h1 className="xl:space-x-2 text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0 mx-auto">
            Welcome to your professional community
          </h1>
          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl  text-black hover:text-blue-500">Search for a job</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl  text-black hover:text-blue-500">Find a person you know</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl  text-black hover:text-blue-500">Learn a new skill</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
          </div>
        </div>

        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5">
          <Image src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" height={200} width={200} layout="fill" priority />
        </div>
        
        </main>
       </div>
    </>
  );
}
export default Home