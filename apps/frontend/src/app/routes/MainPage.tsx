import CallToAction from "@/features/main-page/components/CallToAction.tsx";
import Intro from "@/features/main-page/components/Intro";

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-screen">
      <main className="flex flex-col flex-1 justify-center bg-[#F7F4FB] xl:flex-row">
        <Intro />
        <CallToAction />
      </main>
    </div>
  );
};

export { MainPage };
