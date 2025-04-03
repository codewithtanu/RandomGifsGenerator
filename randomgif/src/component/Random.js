
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const Random=()=>{
 
    const{fetchdata,gif,loading}=useGif();
    return (
        <div className="w-1/3 h-[450px] bg-green-300 rounded-lg border borde-black flex flex-col items-center gap-y-5 mt-[15px] ">
          <h1 className="mt-[15px] text-2xl undrline uppercase font-bold"> A Random Gif</h1>
          {
           loading ? (<Spinner/>):(<img src={gif} width="450"/>)
          }
          
          <button onClick={()=>fetchdata()}
          className="w-10/12 mb-[20px] bg-yellow-300 text-lg py-2 rounded-lg"
          >
            Generate
          </button>
        </div>
    )
}
export default Random;