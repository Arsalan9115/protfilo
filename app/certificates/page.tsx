import Image from "next/image";
import Link from "next/link";
import { certificates } from "./certificate-data";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-[#08080a] px-4 py-8 text-white md:px-6">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a996ff]">Credentials</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">Certificates &amp; Letters</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
              Professional certificates, internship letters, and other credentials.
            </p>
          </div>
          <Link
            href="/resume"
            className="inline-flex h-11 items-center rounded-full border border-white/10 px-5 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/50 hover:bg-white/5 hover:text-white"
          >
            ← Back to Resume
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <figure
              key={certificate.image}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111114] transition duration-200 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_16px_34px_rgba(139,92,246,0.08)]"
            >
              <Link
                href={`/certificates/view/${certificate.image}`}
                className="relative block h-[260px]"
                aria-label={`View ${certificate.title}`}
              >
                <Image
                  src={`/certificates/${certificate.image}`}
                  alt={certificate.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="bg-white object-contain p-2"
                />
              </Link>
              <figcaption className="border-t border-white/5 px-4 py-3 text-sm font-semibold text-zinc-200">
                {certificate.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
