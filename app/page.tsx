import Content from "@/components/content/Content";
import HeadLine from "@/components/main/HeadLine";
import HeadTitle from "@/components/main/HeadTitle";

import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-20 flex items-center flex-col bg-muted/40">
      <section className="w-10/12">
        <div>
          <HeadLine />
          <HeadTitle />
        </div>
      </section>
      <section className="w-10/12 py-10">
        <div>
          <Content />
        </div>
      </section>
    </main>);
}
