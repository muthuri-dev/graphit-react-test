import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800 p-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div>
          <img
            src={logoLight}
            alt="Logo Light"
            className="w-32 mx-auto dark:hidden"
          />
          <img
            src={logoDark}
            alt="Logo Dark"
            className="w-32 mx-auto hidden dark:block"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Testing Graphit Software
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          This simple React app uses Tailwind CSS to create a clean and
          responsive welcome page.
        </p>
        <nav>
          <ul className="space-y-4">
            <li>
              <a
                href="https://rmx.as/discord"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Join our Discord Community
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
