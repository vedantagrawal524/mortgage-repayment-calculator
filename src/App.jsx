import Calculator from "./components/Calculator";
import Result from "./components/Result";

export default function App() {
  return (
    <main className="font-plus-jakarta-sans bg-sslate-100 xs:items-center xs:justify-center flex min-h-screen flex-row text-base">
      <div className="xs:grid-cols-2 xs:rounded-[1.2rem] grid max-w-[700px] grid-cols-1 bg-white">
        <Calculator />
        <Result />
      </div>
    </main>
  );
}
