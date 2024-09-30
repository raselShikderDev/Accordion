/* eslint-disable react/prop-types */

const Faq = ({ faq, toogle, isActive }) => {
  const { id, question, answer } = faq;

  return (
    <li key={id} className="border-l-2 mb-5 px-3 py-1 bg-gray-700">
      <div className="flex justify-between items-center mb-4">
        <p onClick={toogle} className="text-base ">
          {question}
        </p>
        {/* <button
          onClick={toogle}
          className="uppercase mt-2.5 text-sm rounded-sm py-0.5 px-1.5 bg-green-400 text-black "
        >
          {isActive ? "Close" : "Show"}
        </button> */}
      </div>
      <div>
        <p className="text-sm text-gray-200">{isActive && answer}</p>
      </div>
    </li>
  );
};

export default Faq;
