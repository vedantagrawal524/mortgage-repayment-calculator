import Calculator from "./components/Calculator";
import Result from "./components/Result";

export default function App() {
  return (
    <main className="font-plus-jakarta-sans bg-sslate-100 xs:items-center xs:justify-center flex min-h-screen flex-row text-base">
      <div className="xs:grid-cols-2 grid max-w-[800px] grid-cols-1 bg-white">
        <Calculator />
        <Result />
      </div>
    </main>
  );
}
