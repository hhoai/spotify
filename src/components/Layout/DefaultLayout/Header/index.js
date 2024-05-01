import { NavLink } from 'react-router-dom';

import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';

function Header() {
  return (
    <div className="">
      <div className="flex flex-col py-2 px-3 w-[420px] bg-[var(--background-color)] border border-[var(--background-color)] rounded-[8px]">
        <div className="py-1 px-3">
          <img className="w-[78px]" src="./logo1.png" alt="logo" />
        </div>
        <NavLink
          className="flex items-center gap-2 py-1 px-3 font-semibold"
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              color: isActive ? '#fff' : '#b3b3b3',
              viewTransitionName: isTransitioning ? 'slide' : '',
            };
          }}
        >
          <AiOutlineHome className="text-2xl" />
          Home
        </NavLink>
        <NavLink
          className="flex items-center gap-2 py-1 px-3 font-semibold"
          to="/search"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              color: isActive ? '#fff' : '#b3b3b3',
              viewTransitionName: isTransitioning ? 'slide' : '',
            };
          }}
        >
          <AiOutlineSearch className="text-2xl" />
          Search
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
