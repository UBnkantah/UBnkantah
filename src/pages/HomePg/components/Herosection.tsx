import { Restcountry } from "../../../assets";

const Herosection = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-8 justify-center items-center">
          <div>
            <p>WELCOME TO MY WORLD</p>
            <p>Hi, I’m Jone Lee a Developer.Professional Coder.Developer.</p>
            <p>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that
            </p>
            <div>
              <button className="border border-black p-2 rounded-xl">DOWNLOAD CV</button>
            </div>
          </div>
          <div>
            <img src={Restcountry} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
