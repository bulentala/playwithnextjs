import React from "react";
import Link from "next/link";
const Nav = () => {
  return (
    <>
      <div className='py-6 px-6 mb-6 flex flext-ıtems space-x-6 border-b border-gray-300'>
        <div>
          <Link href='/'>
            <a>HOME</a>
          </Link>
        </div>
        <div>
          <Link href='/filter'>
            <a>Filter Test</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
