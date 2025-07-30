import Header from "./common/header";
import Sidebar from "./common/sidebar";
import "./globals.scss";
import "@/font/font.scss"
import "@/styles/tailwind.css";

export const metadata = {
  title: "Elstar - React Admin Tailwind",
  description: "Elstar - React Admin Tailwind Template (React 19) Preview - ThemeForest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex h-screen">
          <div className="w-[290px] min-w-[290px]">
            <Sidebar />
          </div>
          <div className="w-full flex flex-col overflow-y-auto border-l border-gray-200">
            <Header />
            <div className="h-[calc(100%-64px)]">
              <div>{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
