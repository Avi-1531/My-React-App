import Content from "./Content";
import Footer from "./Footer";

const Card = () => {
  return (
    <div className="m-auto w-[317px] h-[780px]">
      <img src="src\assets\pic.svg" className="m-auto mt-3 mb-[-9px]" alt="" />
      <Content />
      <Footer />
    </div>
  );
};

export default Card;
