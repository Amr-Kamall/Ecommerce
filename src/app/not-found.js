import Link from "next/link";
function PageNotFound() {
  return (
    <section class="bg-white dark:bg-gray-900 pt-32">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-lama">
            404
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-lama md:text-4xl dark:text-white">
            Something&apos;s missing.
          </p>
          <p class="mb-4 text-lg font-light text-lama ">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.{" "}
          </p>
          <Link
            href="/"
            class="inline-flex text-white bg-lama hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
