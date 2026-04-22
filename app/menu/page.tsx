import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menü — Oma Balat",
  description: "Taze kahveler, ev yapımı tatlar ve daha fazlası.",
};

type Item = { name: string; desc?: string; price: string; badge?: string };
type Section = {
  title: string;
  emoji: string;
  color: string;
  items: Item[];
};

const menu: Section[] = [
  {
    title: "Sıcak Kahveler",
    emoji: "☕",
    color: "bg-amber-200",
    items: [
      { name: "Türk Kahvesi", desc: "Bol köpüklü, lokumla", price: "₺75" },
      {
        name: "Espresso",
        desc: "Tek shot enerji bombası",
        price: "₺65",
        badge: "mis kokulu",
      },
      { name: "Americano", desc: "Klasik, sade, huzur", price: "₺80" },
      { name: "Cappuccino", desc: "Süt köpüğüyle sarıl sarmalan", price: "₺95" },
      { name: "Latte", desc: "Yumuşacık, dostça", price: "₺95" },
      {
        name: "Flat White",
        desc: "Sütlü ama espresso hissi güçlü",
        price: "₺100",
      },
      { name: "Mocha", desc: "Çikolata + kahve = ❤️", price: "₺110" },
    ],
  },
  {
    title: "Soğuk Kahveler",
    emoji: "🧊",
    color: "bg-sky-200",
    items: [
      { name: "Ice Latte", desc: "Buzla, sütle, keyifle", price: "₺100" },
      {
        name: "Cold Brew",
        desc: "12 saat demlenmiş sabır",
        price: "₺110",
        badge: "şef önerisi",
      },
      { name: "Iced Americano", desc: "Serinletir, uyandırır", price: "₺90" },
      { name: "Frappe", desc: "Bulut gibi, tatlı tatlı", price: "₺115" },
    ],
  },
  {
    title: "Kahve Dışı",
    emoji: "🍵",
    color: "bg-emerald-200",
    items: [
      { name: "Matcha Latte", desc: "Yeşilin en güzel hali", price: "₺120" },
      { name: "Sıcak Çikolata", desc: "İçini ısıtır", price: "₺95" },
      { name: "Bitki Çayları", desc: "Papatya, ıhlamur, adaçayı", price: "₺55" },
      { name: "Limonata", desc: "Ev yapımı, taze naneyle", price: "₺70" },
    ],
  },
  {
    title: "Tatlı Köşesi",
    emoji: "🍰",
    color: "bg-pink-200",
    items: [
      {
        name: "Oma'nın Cheesecake'i",
        desc: "Frambuazlı, efsane",
        price: "₺145",
        badge: "bestseller",
      },
      { name: "Havuçlu Kek", desc: "Cevizli, tarçınlı", price: "₺110" },
      { name: "Brownie", desc: "İçi akışkan, üstü tatlı", price: "₺120" },
      { name: "Cookies", desc: "Damla çikolatalı, sıcak sıcak", price: "₺65" },
      { name: "Tarçınlı Çörek", desc: "Sabahın en tatlı yanı", price: "₺95" },
    ],
  },
  {
    title: "Tuzlular",
    emoji: "🥐",
    color: "bg-orange-200",
    items: [
      { name: "Tereyağlı Kruvasan", desc: "Çıtır çıtır", price: "₺85" },
      { name: "Avokado Toast", desc: "Çeri domates, nar ekşisi", price: "₺165" },
      {
        name: "Oma Kahvaltı Tabağı",
        desc: "İki kişilik, bol çeşit",
        price: "₺395",
        badge: "paylaş",
      },
      { name: "Günün Çorbası", desc: "Sor ki söyleyelim", price: "₺90" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <section className="bg-[var(--primary)] border-b-[3px] border-[var(--coffee)] relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative max-w-6xl mx-auto px-5 py-16 text-center">
          <span className="inline-block bg-[var(--coffee)] text-[var(--primary)] px-3 py-1 rounded-full text-xs font-black uppercase sticker-sm">
            Menü 📜
          </span>
          <h1 className="mt-4 text-5xl md:text-7xl font-black text-[var(--coffee)]">
            Ne ikram edelim?
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-[var(--coffee)]/90">
            Seçmekte zorlanabilirsin — uyarmadı deme! 😋
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16 grid gap-10">
        {menu.map((sec, idx) => (
          <section key={sec.title}>
            <div className="flex items-center gap-3 mb-5">
              <span
                className={`text-5xl ${idx % 2 === 0 ? "-rotate-6" : "rotate-6"} inline-block`}
              >
                {sec.emoji}
              </span>
              <h2 className="text-3xl md:text-4xl font-black">{sec.title}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sec.items.map((it) => (
                <div
                  key={it.name}
                  className={`sticker rounded-2xl p-5 ${sec.color} transition`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-black text-lg leading-tight">
                      {it.name}
                    </h3>
                    <span className="font-black bg-[var(--coffee)] text-[var(--primary)] px-2 py-1 rounded-full text-sm whitespace-nowrap">
                      {it.price}
                    </span>
                  </div>
                  {it.desc && (
                    <p className="mt-1 text-sm text-[var(--coffee)]/80">
                      {it.desc}
                    </p>
                  )}
                  {it.badge && (
                    <span className="mt-3 inline-block bg-white sticker-sm px-2 py-0.5 rounded-full text-xs font-black -rotate-2">
                      ✨ {it.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="sticker rounded-3xl bg-[var(--coffee)] text-[var(--primary)] p-8 text-center">
          <p className="text-2xl md:text-3xl font-black">
            Özel bir isteğin var mı? 💛
          </p>
          <p className="mt-2 text-[var(--cream)]">
            Vegan, glutensiz, laktozsuz alternatifler için bize sor — çözüm
            buluruz!
          </p>
        </div>
      </div>
    </>
  );
}
