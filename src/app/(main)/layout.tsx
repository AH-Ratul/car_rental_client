import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}
