import { Sidebar } from "@/components/Sidebar";
import { Introduction } from "@/components/Introduction";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div id="top">
      <Sidebar />
      <div className="pl-40 sm:pl-56 md:pl-64 lg:pl-[19rem]">
        <main>
          <Introduction />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="border-t border-line px-6 py-10 text-sm text-muted sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <p>
              &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <p className="mt-1">
              이 사이트는 포트폴리오 용도로 제작하였으며 상업적인 용도로 사용하지 않습니다.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
