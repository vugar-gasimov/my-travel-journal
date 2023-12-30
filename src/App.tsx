import { CategoryPill } from "./components/CategoryPill";
import { Data } from "./components/Data";
import { Header } from "./layouts/Header";

export default function App() {
  const pills = Data.map((pill) => {
    return <CategoryPill {...pill} key={pill.id} />;
  });
  return (
    <>
      <Header />
      <main className="p-10">{pills}</main>
    </>
  );
}
