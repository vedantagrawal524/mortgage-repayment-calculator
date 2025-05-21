import resultIcon from "/images/illustration-empty.svg";

export default function ResultEmpty() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={resultIcon} alt="Result" className="h-auto w-[8.5rem]" />
      <h1 className="mt-2 text-[1rem] font-[600] text-white">
        Results shown here
      </h1>
      <p className="text-sslate-500 mt-3 text-center text-[0.76rem] font-[500]">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
