import { SiteNav } from "./_ui/nav/site-nav";
import { HumourGenerator } from "./_ui/app/humour-generator";
import { Footer } from "./_ui/nav/footer";

export default function Home() {
  return (
    <div className="bg-background h-screen">
      <main className="flex flex-col h-full">
        <SiteNav/>
        <div className="w-xl p-4 text-center m-auto antialiased text-foreground">
          <HumourGenerator/>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
