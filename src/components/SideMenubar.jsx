import { IoHomeSharp } from "react-icons/io5";
import { RiChatSmileAiFill } from "react-icons/ri";
import { BsFire } from "react-icons/bs";
import { BsFillFileMusicFill } from "react-icons/bs";
import { FaTowerCell } from "react-icons/fa6";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";

const Label = ({ icon, name, title }) => {
  return (
    <div className="flex cursor-pointer items-center gap-5 p-1 italic hover:text-purple-500">
      <span title={title} className="text-2xl">
        {icon}
      </span>
      <p className="hidden text-xl font-semibold md:block">{name}</p>
    </div>
  );
};

const SideMenubar = () => {
  return (
    <div className="border-1 m-1 grid h-full w-1/6 place-content-center gap-2 rounded-md border">
      <Label icon={<IoHomeSharp />} name="Home" title="Home" />
      <Label icon={<RiChatSmileAiFill />} name="About" title="About" />
      <Label icon={<BsFire />} name="Trending" title="Trending" />
      <Label icon={<FaTowerCell />} name="Live" title="Live" />
      <Label icon={<BsFillFileMusicFill />} name="Music" title="Music" />
      <Label icon={<IoGameController />} name="Games" title="Games" />
      <Label icon={<BiSolidMoviePlay />} name="Movies" title="Movies" />
    </div>
  );
};

export default SideMenubar;
