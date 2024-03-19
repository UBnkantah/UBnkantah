import {  RotatingLines } from "react-loader-spinner"


const SpinnerLoad = () => {
  return (
    <div className="bg-[#f1f1f1] dark:bg-[#1f2937] w-full h-screen flex justify-center items-center">
        <RotatingLines strokeColor="#ffb400" width="96"/>
    </div>
  )
}

export default SpinnerLoad