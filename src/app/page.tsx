import Image from 'next/image';
import Header from './components/Header';

export default function Home() {
  return (
    <><Header /><main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-6 py-20 gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            BlogGen AI
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Generate high-quality blog posts instantly with AI. Fast, smart, and fully customizable.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#generate"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
            >
              Try it Now
            </a>
            <a
              href="#learn-more"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/bloggen-preview.png"
            alt="BlogGen AI Preview"
            width={500}
            height={400}
            className="rounded-xl shadow-xl" />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="learn-more"
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10"
      >
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-3">AI Powered</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Leverage state-of-the-art AI to generate engaging and readable content in seconds.
          </p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-3">Customizable</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Tailor tone, style, and structure to match your brand or personal voice.
          </p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-3">Fast & Efficient</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Generate full posts instantly without waiting, saving hours of manual writing.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-10 mt-20 text-center text-gray-600 dark:text-gray-400">
        © 2025 BlogGen AI — Built with Next.js & Tailwind CSS
      </footer>
    </main></>
  );
}
