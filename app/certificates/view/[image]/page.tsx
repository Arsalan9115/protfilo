import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { certificates } from "../../certificate-data";

export default async function CertificateViewer({
  params
}: {
  params: Promise<{ image: string }>;
}) {
  const { image } = await params;
  const certificate = certificates.find((item) => item.image === image);

  if (!certificate) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#08080a] px-4 py-8 text-white md:px-6">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a996ff]">Credential</p>
            <h1 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">{certificate.title}</h1>
          </div>
          <Link
            href="/certificates"
            className="inline-flex h-11 items-center rounded-full border border-white/10 px-5 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/50 hover:bg-white/5 hover:text-white"
          >
            ← Back to Certificates
          </Link>
        </div>

        <div className="relative min-h-[60vh] overflow-hidden rounded-2xl border border-white/10 bg-[#111114] p-2">
          <Image
            src={`/certificates/${certificate.image}`}
            alt={certificate.title}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 900px"
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
