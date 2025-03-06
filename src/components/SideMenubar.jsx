import { IoHomeSharp } from "react-icons/io5";
import { RiChatSmileAiFill } from "react-icons/ri";
import { BsFire } from "react-icons/bs";
import { BsFillFileMusicFill } from "react-icons/bs";
import { FaTowerCell } from "react-icons/fa6";
import { MdOutlineSportsHandball } from "react-icons/md";

import { IoGameController } from "react-icons/io5";

import { Link } from "react-router-dom";

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
    <div className="border-1 m-1 grid h-full w-1/6 place-content-center gap-2 rounded-md border py-4">
      <Link to="/">
        <Label icon={<IoHomeSharp />} name="Home" title="Home" />{" "}
      </Link>
      <Link to="about">
        <Label icon={<RiChatSmileAiFill />} name="About" title="About" />
      </Link>
      <Link to="trending">
        <Label icon={<BsFire />} name="Trending" title="Trending" />
      </Link>
      <Link to="live">
        <Label icon={<FaTowerCell />} name="Live" title="Live" />
      </Link>
      <Link to="music">
        <Label icon={<BsFillFileMusicFill />} name="Music" title="Music" />
      </Link>
      <Link to="gaming">
        <Label icon={<IoGameController />} name="Gaming" title="Gaming" />
      </Link>
      <Link to="sports">
        <Label
          icon={<MdOutlineSportsHandball />}
          name="Sports"
          title="Sports"
        />
      </Link>
    </div>
  );
};

export default SideMenubar;
