import { FaAngleDown } from "react-icons/fa6";

const SubMenu = () => {
  return (
    <div className="mt-16  p-3 flex max-sm:flex-col  justify-center shadow-md">
      <div className="flex items-center ml-2">
        <h1 className="pr-1">All Categories</h1>
        <FaAngleDown style={{ marginTop: "2px" }} />
      </div>
      <ul className="ml-2 flex gap-3 max-sm:flex-col max-sm:gap-1 *:text-md cursor-pointer ">
        <li className="hover:text-slate-500">Cars</li>
        <li className="hover:text-slate-500">MotorCycles</li>
        <li className="hover:text-slate-500">Mobile</li>
        <li className="hover:text-slate-500">
          For Sale
          <span className="">: House & Apartments</span>
        </li>
        <li className="hover:text-slate-500">Scooters</li>
        <li className="hover:text-slate-500">
          Commercial
          <span className="">& other Vehicles</span>
        </li>
        <li className="hover:text-slate-500">
          For Rent
          <span className="">:House & Apartments</span>
        </li>
      </ul>
    </div>
  );
};

export default SubMenu;
