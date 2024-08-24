import Navbar from "@/components/navbar";
// components
export default function Home({children}:{children:React.ReactNode }) {
  return (
    <main >
      <Navbar/>
      {children}
    </main>
  );
}
