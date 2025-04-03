import './App.css';
import Tag from './component/Tag';
import Random from './component/Random';


// npm i axios= for API call fetching the data fetch bhi use hota hai lekin hume ye direct json form mai deta hai data.
export default function App() {
  return (
    <div className='w-full h-screen flex flex-col relative background items-center'>
     <h1 className='bg-white w-11/12  rounded-lg mt-[40px] px-10 py-2 text-4xl font-bold text-center'>Random Gifs</h1>
     <div className='flex flex-col w-full items-center'>
      <Random/>
      <Tag/>
     </div>
    </div>
  );
}

