import resultIcon from "/images/illustration-empty.svg";

export default function ResultEmpty() {
  return (
    <div>
      <img src={resultIcon} alt="Result" />
      <h1>Results shown here</h1>
      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
