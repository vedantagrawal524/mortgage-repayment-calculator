export default function ResultContain(props) {
  return (
    <div className="flex w-full flex-col gap-3">
      <h1 className="text-[1.1rem] font-[600] text-white">Your results</h1>
      <p className="text-sslate-500 text-[0.78rem] font-[500]">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>

      <div className="bg-sslate-950 border-new-lime mt-3 flex max-w-[20rem] flex-col gap-3.5 rounded-[0.4rem] border-t-[3.5px] p-5">
        <div className="flex flex-col gap-0">
          <h2 className="text-sslate-500 text-[0.7rem] font-[500]">
            Your monthly repayments
          </h2>
          <p className="text-new-lime w-full overflow-hidden text-[2.4rem] font-[600] text-ellipsis hover:overflow-visible hover:text-[1.4rem]">
            £{props.results.monthly}
          </p>
        </div>

        <hr className="border-sslate-700 h-0 w-full border opacity-30" />

        <div className="flex flex-col gap-1">
          <h2 className="text-sslate-500 text-[0.7rem] font-[500]">
            Total you'll repay over the term
          </h2>
          <p className="text-[1.05rem] font-[600] text-white">
            £{props.results.total}
          </p>
        </div>
      </div>
    </div>
  );
}
