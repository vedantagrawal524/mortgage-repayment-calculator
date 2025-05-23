import ResultEmpty from "./ResultEmpty";
import ResultContain from "./ResultContain";

export default function Result(props) {
  return (
    <section className="bg-sslate-900 xs:rounded-tr-[1.2rem] xs:rounded-br-[1.2rem] xs:rounded-bl-[3.5rem] flex p-6">
      {props.showResult ? (
        <ResultContain results={props.results} />
      ) : (
        <ResultEmpty />
      )}
    </section>
  );
}
