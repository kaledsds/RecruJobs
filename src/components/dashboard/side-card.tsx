import Footer from "./footer";

const SideCard = () => {
  return (
    <div className="h-full space-y-4 ">
      <div className="card rounded-box grid place-items-center bg-base-300 px-4 py-4">
        <div className="card rounded-box grid h-20 place-items-center bg-base-100 px-4 py-4">
          content
        </div>
        <div className="card rounded-box grid h-20 place-items-center bg-base-100 px-4 py-4">
          content
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SideCard;
