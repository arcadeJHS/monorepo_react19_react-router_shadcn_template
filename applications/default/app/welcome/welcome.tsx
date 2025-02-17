import logoLight from "./logo-light.svg";
import { Button } from '@discharge/ui';
import { add } from '@discharge/utils';

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">



      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full"
            />
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-center">
              What&apos;s next?
            </p>

            <Button
              variant="outline" 
              onClick={ () => { console.log(add(Number(3), Number(5))); }}>
              Add
            </Button>

          </nav>
        </div>
      </div>
    </main>
  );
}
