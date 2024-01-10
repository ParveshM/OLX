import Cards from "./Cards";

const Body = () => {
  return (
    <>
      <h1 className="text-2xl font-medium pl-5 my-5">Fresh Recommedation </h1>
      <div className="max-w-[1324px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-2 px-[25px] ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default Body;
