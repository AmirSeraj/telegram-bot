import { Slider } from "@material-tailwind/react";
import { BsLightningFill } from "react-icons/bs";

const ScoreBar = ({coinNum}) => {
  return (
    <div className='flex flex-col gap-1 items-center justify-center'>
        <div className="flex gap-2 justify-center items-center">
            <BsLightningFill color="yellow" />
            <span className="text-white text-2xl">{coinNum}</span> / 1500       
        </div>
        <div className="w-96">
            <Slider defaultValue={60} size="md" color="amber" />
        </div>
    </div>
  )
}

export default ScoreBar