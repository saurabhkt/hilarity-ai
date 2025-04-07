import { Sidebar } from "./_ui/app/sidebar";
import { Viewer } from "./_ui/app/viewer";

export default function Home() {
  return (
    <div className="bg-neutral-100 h-screen">
      <main className="flex flex-row h-full p-4 antialiased">
        <Sidebar/>
        <Viewer/>
      </main>
    </div>
  );
}
