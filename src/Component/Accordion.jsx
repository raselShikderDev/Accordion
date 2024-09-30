import { useEffect, useState } from "react";
import faqData from "../API/faq.json";
import Faq from "../UI/Faq";

const Accordion = () => {
  const [faq, setFaq] = useState([]);
  
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setFaq(faqData);
  }, []);

  const handletoggleBtn = (id) => {
    setIsActive((prevId) => (prevId === id ? false : id));
    // setIsActive((prevId) => (prevId === id ? false : id));
  };

  return (
    <section className="bg-slate-800 text-white py-5 w-full h-screen ">
      <div className="w-full text-center sm:w-1/3 m-auto">
        <h1 className="text-center inline-block text-3xl my-3 text-slate-200 font-bold border-b-2">
          My Accordion
        </h1>
      </div>
      <div className="w-full py-2">
        <ul className="w-10/12 m-auto py-5">
          {faq.map((currFaq) => {
            return (
              <Faq
                key={currFaq.id}
                faq={currFaq}
                toogle={()=> handletoggleBtn(currFaq.id)}
                isActive={isActive === currFaq.id}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Accordion;
