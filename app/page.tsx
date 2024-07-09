import Content from "@/components/content/Content";
import HeadLine from "@/components/main/HeadLine";
import HeadTitle from "@/components/main/HeadTitle";

import Image from "next/image";

export default async function Home() {
  const historyAPIreq = await fetch("http://localhost:3000/api", { cache: 'no-store' })
  const historyAPI = await historyAPIreq.json()
  return (
    <main className="pt-20 flex items-center flex-col ">
      <section className="w-10/12">
        <div>
          <HeadLine />
          <HeadTitle />
        </div>
      </section>
      <section className="w-10/12 py-10">
        <div>
          <Content historyAPI={historyAPI.data} />
        </div>
      </section>
    </main>);
}
