import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return <nav className="flex justify-between bg-nav p-4">
    <div className="flex item-center space-x-4">
        <Link href='/'>
            <FontAwesomeIcon icon={faHome} className="icon"/>
        </Link>
        <Link href='/TicketPage/new'>
            <FontAwesomeIcon icon={faTicket} className="icon"/>
        </Link>
    </div>
    <div>
        <p className="text-default-text">anuja.barawkar@gmail.com</p>
    </div>
  </nav>
};

export default Navbar;
