const Content = () => {
  return (
    <div className="w-[317px] h-[399px] bg-[#1A1B21]">
      <div>
        <h1 className="text-white font-bold text-center pt-[21px] text-[25px]">
          Avi Chauhan
        </h1>
        <h1 className="text-[#F3BF99] text-center text-[12.8px] ">
          Frontend Developer
        </h1>
        <h1 className="text-[#F5F5F5] text-center text-[10.24px]">
          New to this world
        </h1>
      </div>
      <div id="emailbox" className="hover:bg-blue-300">
        <img src="src/assets/email.svg" alt="" />
        <h1 className="headingemail">Email</h1>
      </div>
      <div
        id="content"
        className="h-[201px] w-[247px] m-auto mt-7 text-[#DCDCDC]"
      >
        <h1 className="text-[16px] font-bold mb-2">About</h1>
        <p className="text-[10.24px] font-normal">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h1 className="text-[16px] font-bold mt-2 mb-2">Interests</h1>
        <p className="text-[10.24px] font-normal">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
};

export default Content;
