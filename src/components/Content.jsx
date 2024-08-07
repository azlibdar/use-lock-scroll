import { useLockScroll } from "react-customs";

function Content() {
  const setLock = useLockScroll();

  const handleLock = () => {
    setLock(true);
  };

  const handleUnlock = () => {
    setLock(false);
  };

  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="my-8 flex flex-col gap-12">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={handleLock}
              className="w-full py-4 bg-rose-400 rounded-lg text-black font-bold transition hover:opacity-90 active:translate-y-[1px]"
            >
              Lock Scroll
            </button>
            <button
              onClick={handleUnlock}
              className="w-full py-4 bg-emerald-400 rounded-lg text-black font-bold transition hover:opacity-90 active:translate-y-[1px]"
            >
              Unlock Scroll
            </button>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="w-full aspect-video bg-zinc-900 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
