import React, { useState } from 'react';
import { menuData } from '../utli/objectData/navdata';
import { Link } from 'react-router-dom';

function NavMenu() {
  const [menu, setMenu] = useState(null);

  return (
    <div className="absolute mt-8 w-[10rem] space-y-4 bg-slate-50 border border-slate-200 rounded-md p-1 pb-1 transition-all">
      {menuData.map((item, index) => (
        <Link
          key={index}
          to={`/${item.to}`}
          onMouseEnter={() => setMenu(index)}
          className="my-1 w-full flex justify-between items-center text-sm text-slate-900 hover:text-pink-500 border-b border-slate-200 p-1"
        >
          <span className="text-md">{item.mainTital}</span>
        </Link>
      ))}
    </div>
  );
}

export default NavMenu;
