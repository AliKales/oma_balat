import Image from "next/image";
import Link from "next/link";

const gallery = [
  { src: "/photos/1.jpg", rotate: "-2deg", tag: "mis kokulu ☕" },
  { src: "/photos/2.jpg", rotate: "1.5deg", tag: "ev yapımı 🍰" },
  { src: "/photos/3.jpg", rotate: "-1deg", tag: "balat günleri 🌈" },
  { src: "/photos/4.jpg", rotate: "2deg", tag: "köşemiz 💛" },
  { src: "/photos/5.jpg", rotate: "-1.5deg", tag: "tatlı mola 🧁" },
  { src: "/photos/6.jpg", rotate: "1deg", tag: "atölye keyfi 🎨" },
  { src: "/photos/7.webp", rotate: "-2deg", tag: "dost meclisi 👯" },
];

const workshops = [
  {
    emoji: "🎨",
    title: "Seramik Boyama",
    desc: "Kendi fincanını boya, kahveni ondan iç!",
    day: "Cumartesi · 14:00",
    color: "bg-pink-200",
  },
  {
    emoji: "☕",
    title: "Kahve Demleme",
    desc: "V60, Chemex, French Press — üçünü de tadacaksın.",
    day: "Perşembe · 17:00",
    color: "bg-amber-200",
  },
  {
    emoji: "🧁",
    title: "Cupcake Atölyesi",
    desc: "Minik kekler, büyük mutluluklar.",
    day: "Cuma · 16:00",
    color: "bg-rose-200",
  },
  {
    emoji: "📷",
    title: "Balat Fotoğraf Turu",
    desc: "Rengarenk sokaklarda objektif şenliği.",
    day: "Cumartesi · 11:00",
    color: "bg-sky-200",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--primary)] border-b-[3px] border-[var(--coffee)]">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[var(--coffee)] text-[var(--primary)] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider sticker-sm">
              Balat&apos;tan Merhaba 👋
            </span>
            <h1 className="mt-4 text-5xl md:text-7xl font-black leading-[0.95] text-[var(--coffee)]">
              Kahve koksun,
              <br />
              <span className="inline-block bg-[var(--coffee)] text-[var(--primary)] px-3 rounded-xl -rotate-2">
                keyif
              </span>{" "}
              patlasın!
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-lg text-[var(--coffee)]/90">
              Taze öğütülmüş mis kokulu kahveler, leziz tatlar, renkli
              etkinlikler… Oma Balat&apos;ta her gün bir başka güzel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="sticker bg-[var(--coffee)] text-[var(--primary)] font-black px-6 py-3 rounded-full transition"
              >
                Menüye Göz At →
              </Link>
              <Link
                href="#atolye"
                className="sticker bg-white text-[var(--coffee)] font-black px-6 py-3 rounded-full transition"
              >
                Atölyeleri Gör 🎨
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <div className="text-[11rem] md:text-[15rem] leading-none animate-float select-none">
                ☕
              </div>
              <span className="absolute -top-4 left-10 text-4xl animate-steam">
                ☁️
              </span>
              <span
                className="absolute -top-2 left-24 text-3xl animate-steam"
                style={{ animationDelay: "0.8s" }}
              >
                ☁️
              </span>
              <span className="absolute -bottom-2 -right-4 bg-white sticker px-3 py-2 rounded-2xl rotate-6 font-black text-sm">
                mis kokulu 💛
              </span>
              <span className="absolute top-4 -left-6 bg-pink-200 sticker-sm px-3 py-1 rounded-2xl -rotate-12 font-black text-xs">
                ev yapımı
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-3 gap-8">
        {[
          {
            e: "☕",
            t: "Taze Kahve",
            d: "Her sabah öğütülen çekirdekler, el yapımı demlemelerle buluşur.",
          },
          {
            e: "🍰",
            t: "Leziz Tatlar",
            d: "Kendi mutfağımızdan, annemin tarifiyle çıkan ev yapımı lezzetler.",
          },
          {
            e: "🎉",
            t: "Renkli Etkinlikler",
            d: "Her hafta farklı bir atölye, küçük bir şenlik havası.",
          },
        ].map((c) => (
          <div
            key={c.t}
            className="sticker bg-white rounded-3xl p-6 transition"
          >
            <div className="text-5xl animate-pop inline-block">{c.e}</div>
            <h3 className="mt-3 text-2xl font-black">{c.t}</h3>
            <p className="mt-1 text-[var(--coffee)]/80">{c.d}</p>
          </div>
        ))}
      </section>

      {/* WORKSHOPS */}
      <section
        id="atolye"
        className="bg-[var(--cream)] border-y-[3px] border-[var(--coffee)]"
      >
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="inline-block bg-[var(--primary)] sticker-sm px-3 py-1 rounded-full text-xs font-black uppercase">
                Atölyeler 🎨
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-black">
                Her hafta yeni bir macera!
              </h2>
            </div>
            <p className="max-w-md text-[var(--coffee)]/80">
              Kahve yudumlarken bir şeyler öğrenmek ister misin? Kontenjan
              sınırlı, kayıt için dükkana uğra ya da bizi ara ☎️
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workshops.map((w, i) => (
              <div
                key={w.title}
                className={`sticker ${w.color} rounded-3xl p-5 transition`}
                style={{ rotate: `${i % 2 === 0 ? "-1.5deg" : "1.5deg"}` }}
              >
                <div className="text-5xl">{w.emoji}</div>
                <h3 className="mt-3 text-xl font-black">{w.title}</h3>
                <p className="mt-1 text-sm text-[var(--coffee)]/80">{w.desc}</p>
                <p className="mt-4 inline-block bg-[var(--coffee)] text-[var(--primary)] px-3 py-1 rounded-full text-xs font-black">
                  {w.day}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeri" className="max-w-6xl mx-auto px-5 py-16 md:py-24">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="inline-block bg-pink-200 sticker-sm px-3 py-1 rounded-full text-xs font-black uppercase">
              Galeri 📷
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black">
              Oma&apos;dan karelerimiz.
            </h2>
          </div>
          <p className="max-w-md text-[var(--coffee)]/80">
            Kahve kokulu sabahlar, rengarenk tabaklar, gülen yüzler… İşte bizim
            küçük dünyamız 💛
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-5">
          {gallery.map((g, i) => (
            <div
              key={g.src}
              className={`sticker bg-white rounded-3xl overflow-hidden transition ${
                i === 0 ? "md:row-span-2 md:col-span-2" : ""
              }`}
              style={{ rotate: g.rotate }}
            >
              <div
                className={`relative w-full ${
                  i === 0 ? "aspect-square md:aspect-[4/3]" : "aspect-square"
                }`}
              >
                <Image
                  src={g.src}
                  alt={g.tag}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-[var(--coffee)] text-[var(--primary)] px-3 py-1 rounded-full text-xs font-black">
                  {g.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / MAP */}
      <section id="iletisim" className="max-w-6xl mx-auto px-5 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[var(--primary)] sticker-sm px-3 py-1 rounded-full text-xs font-black uppercase">
              Bizi Bul 📍
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black">
              Balat&apos;ın rengarenk sokaklarında.
            </h2>
            <p className="mt-4 text-lg text-[var(--coffee)]/80">
              Kapıdan içeri girince kahve kokusu, çıkarken kalbinde bir
              gülümseme. Seni bekliyoruz!
            </p>

            <div className="mt-6 space-y-3">
              <div className="sticker bg-white rounded-2xl p-4 flex items-center gap-3">
                <span className="text-3xl">🕒</span>
                <div className="text-sm">
                  <p>
                    <b>Pzt – Cuma</b> · 10:00 – 18:30
                  </p>
                  <p>
                    <b>Cumartesi</b> · 10:00 – 19:00
                  </p>
                  <p>
                    <b>Pazar</b> · Kapalı 🚫
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/JMfK28yW2AqjruRK9"
                target="_blank"
                rel="noreferrer"
                className="sticker bg-[var(--primary)] rounded-2xl p-4 flex items-center gap-3 font-black"
              >
                <span className="text-3xl">📍</span>
                <span>Google Haritalar&apos;da Aç →</span>
              </a>
            </div>
          </div>

          <div className="sticker rounded-3xl overflow-hidden bg-white">
            <iframe
              title="Oma Balat Harita"
              src="https://www.google.com/maps?q=Balat+Istanbul&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>
      </section>
    </>
  );
}
