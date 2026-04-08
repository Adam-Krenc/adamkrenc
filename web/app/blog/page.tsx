import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Adam Krenc – Realitní trh a moderní přístup",
  description:
    "Články a postřehy Adama Krence o moderním realitním trhu, technologiích, AI a efektivitě v prodeji nemovitostí.",
  alternates: {
    canonical: "https://www.adamkrenc.cz/blog",
  },
  openGraph: {
    type: "website",
    title: "Blog | Adam Krenc – Realitní trh a moderní přístup",
    description:
      "Články a postřehy Adama Krence o moderním realitním trhu, technologiích, AI a efektivitě v prodeji nemovitostí.",
    url: "https://www.adamkrenc.cz/blog",
    images: [{ url: "/images/adam-remax.png", width: 1200, height: 630, alt: "Adam Krenc Blog" }],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="min-h-screen bg-[#0a0f1e] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B8FBF] mb-3">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Články o realitním trhu v éře AI
          </h1>
          <p className="text-[#94a3b8] text-base lg:text-lg">
            Sdílím pohled na prodej nemovitostí, moderní marketing a využití
            technologií v realitách. Vše prakticky, bez zbytečných frází.
          </p>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          style={{ gridTemplateRows: "repeat(1, 1fr)" }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden bg-[#0f172a] border border-[#1e2d47] hover:border-[#6B8FBF] transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E02020] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
            >
              <article className="flex flex-col h-full">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent" />
                </div>

                <div className="flex-1 flex flex-col p-6 space-y-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#64748b]">
                    {new Date(post.date).toLocaleDateString("cs-CZ", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#E02020] transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#94a3b8] line-clamp-3">{post.perex}</p>
                  <div className="pt-2">
                    <span className="inline-flex items-center text-sm font-semibold text-[#E02020] group-hover:text-[#f97373] transition-colors">
                      Číst celý článek
                      <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

