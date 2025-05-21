import calculatorIcon from "/images/icon-calculator.svg";

export default function Calculator() {
  return (
    <div className="p-6">
      <form autocomplete="on" className="flex flex-col justify-center gap-2">
        <div className="xs:flex-row xs:justify-between xs:items-center xs:rounded-tl-[1.2rem] xs:rounded-bl-[1.2rem] flex flex-col items-start justify-center gap-0.5">
          <h1 className="text-sslate-900 text-[1.18rem] font-[700]">
            Mortgage Calculator
          </h1>

          <button
            type="reset"
            className="text-sslate-500 hover:text-sslate-900 cursor-pointer text-[0.81rem] font-[500] underline underline-offset-2"
          >
            Clear All
          </button>
        </div>

        <fieldset className="inputFieldset error">
          <label
            htmlFor="mortageAmount"
            className="text-sslate-700 text-[0.82rem] font-[500]"
          >
            Mortgage Amount
          </label>

          <div className="relative mt-1 h-fit w-full">
            <input
              type="number"
              id="mortageAmount"
              name="mortageAmount"
              min={0}
              className="outline-sslate-500 hover:outline-sslate-900 active:outline-new-lime focus:outline-new-lime text-sslate-900 peer error inputField relative w-full rounded-[0.3rem] border-0 py-2 pr-1 pl-11 text-[0.9rem] font-[700] outline-[1.5px] hover:cursor-pointer focus:outline-2 active:outline-2"
            />

            <div className="bg-sslate-100 text-sslate-700 peer-active:bg-new-lime peer-active:text-sslate-900 peer-focus:bg-new-lime peer-focus:text-sslate-900 error errorIcon absolute bottom-0 left-0 flex h-full w-9 items-center justify-center rounded-tl-[0.3rem] rounded-bl-[0.3rem] p-2 text-[0.85rem] font-[600]">
              £
            </div>

            <div className="text-new-red errorMsg error absolute bottom-[-1.05rem] left-0 z-20 hidden text-[0.65rem] font-[600]">
              This field is required
            </div>
          </div>
        </fieldset>

        <div className="xs:flex-row xs:gap-3.5 mt-2 flex flex-col gap-3">
          <fieldset className="inputFieldset error">
            <label
              htmlFor="mortageTerm"
              className="text-sslate-700 text-[0.82rem] font-[500]"
            >
              Mortgage Term
            </label>

            <div className="relative mt-1 h-fit w-full">
              <input
                type="number"
                id="mortageTerm"
                name="mortageTerm"
                min={0}
                className="outline-sslate-500 hover:outline-sslate-900 active:outline-new-lime focus:outline-new-lime text-sslate-900 peer inputField error w-full rounded-[0.3rem] border-0 py-2 pr-[3.7rem] pl-2 text-[0.9rem] font-[700] outline-[1.5px] hover:cursor-pointer focus:outline-2 active:outline-2"
              />

              <div className="bg-sslate-100 text-sslate-700 peer-active:bg-new-lime peer-active:text-sslate-900 peer-focus:bg-new-lime peer-focus:text-sslate-900 errorIcon error absolute right-0 bottom-0 flex h-full w-14 items-center justify-center rounded-tr-[0.3rem] rounded-br-[0.3rem] p-2 text-[0.85rem] font-[600]">
                years
              </div>

              <div className="text-new-red errorMsg error absolute bottom-[-1.05rem] left-0 z-20 hidden text-[0.65rem] font-[600]">
                This field is required
              </div>
            </div>
          </fieldset>

          <fieldset className="inputFieldset error">
            <label
              htmlFor="interestRate"
              className="text-sslate-700 text-[0.82rem] font-[500]"
            >
              Interest Rate
            </label>

            <div className="relative mt-1 h-fit w-full">
              <input
                type="number"
                id="interestRate"
                name="interestRate"
                min={0}
                className="outline-sslate-500 hover:outline-sslate-900 active:outline-new-lime focus:outline-new-lime text-sslate-900 peer inputField error w-full rounded-[0.3rem] border-0 py-2 pr-[3.7rem] pl-2 text-[0.9rem] font-[700] outline-[1.5px] hover:cursor-pointer focus:outline-2 active:outline-2"
              />

              <div className="bg-sslate-100 text-sslate-700 peer-active:bg-new-lime peer-active:text-sslate-900 peer-focus:bg-new-lime peer-focus:text-sslate-900 errorIcon error absolute right-0 bottom-0 flex h-full w-9 items-center justify-center rounded-tr-[0.3rem] rounded-br-[0.3rem] p-2 text-[0.85rem] font-[600]">
                %
              </div>

              <div className="text-new-red errorMsg error absolute bottom-[-1.05rem] left-0 z-20 hidden text-[0.65rem] font-[600]">
                This field is required
              </div>
            </div>
          </fieldset>
        </div>

        <fieldset className="inputFieldset error relative mt-3 rounded-[0.3rem]">
          <legend className="text-sslate-700 text-[0.82rem] font-[500]">
            Mortgage Type
          </legend>

          <div className="relative mt-1">
            <input
              type="radio"
              id="repayment"
              name="mortageType"
              className="peer hidden"
            />

            <label
              htmlFor="repayment"
              className="peer-checked:bg-new-lime/15 peer-checked:outline-new-lime hover:outline-new-lime active:outline-new-lime focus:outline-new-lime relative flex w-full cursor-pointer flex-row items-center rounded-[0.2rem] border-0 px-4 py-2 pl-10 text-[0.8rem] font-[700] text-slate-900 outline-[1.5px] outline-slate-500 peer-checked:outline-2 hover:cursor-pointer focus:outline-2 active:outline-2"
            >
              Repayment
            </label>
            <span className="peer-checked:bg-new-lime peer-checked:ring-new-lime absolute top-3 left-4 h-2.5 w-2.5 rounded-full ring-1 ring-slate-700 peer-checked:ring-offset-2"></span>
          </div>

          <div className="relative mt-2.5">
            <input
              type="radio"
              id="interestOnly"
              name="mortageType"
              className="peer hidden"
            />

            <label
              htmlFor="interestOnly"
              className="peer-checked:bg-new-lime/15 peer-checked:outline-new-lime hover:outline-new-lime active:outline-new-lime focus:outline-new-lime relative flex w-full cursor-pointer flex-row items-center rounded-[0.2rem] border-0 px-4 py-2 pl-10 text-[0.8rem] font-[700] text-slate-900 outline-[1.5px] outline-slate-500 peer-checked:outline-2 hover:cursor-pointer focus:outline-2 active:outline-2"
            >
              Interest Only
            </label>
            <span className="peer-checked:bg-new-lime peer-checked:ring-new-lime absolute top-3 left-4 h-2.5 w-2.5 rounded-full ring-1 ring-slate-700 peer-checked:ring-offset-2"></span>
          </div>

          <div className="text-new-red errorMsg error absolute bottom-[-1.05rem] left-0 z-20 hidden text-[0.65rem] font-[600]">
            This field is required
          </div>
        </fieldset>

        <button
          type="submit"
          className="bg-new-lime text-sslate-900 hover:bg-new-lime/60 mt-3 flex max-w-[15rem] cursor-pointer flex-row items-center justify-center gap-2 rounded-full px-8 py-2 text-[0.85rem] font-[700]"
        >
          <img
            src={calculatorIcon}
            alt="Calculator Icon"
            className="h-auto w-4"
          />
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}
