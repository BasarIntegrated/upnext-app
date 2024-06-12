import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="text-white bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between">
      <Link href={"/"}>
        <Image src={logo} width={40} alt="Company here" />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User name here"
            />
            <AvatarFallback className="text-black">T</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-1">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/profile"}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/auth"}>Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
