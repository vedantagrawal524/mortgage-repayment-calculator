import ResultEmpty from "./ResultEmpty";
import ResultContain from "./ResultContain";

export default function Result() {
  return (
    <section className="bg-sslate-900 xs:rounded-tr-[1.2rem] xs:rounded-br-[1.2rem] xs:rounded-bl-[3.5rem] flex p-6">
      {/* <ResultEmpty /> */}
      <ResultContain />
    </section>
  );
}
