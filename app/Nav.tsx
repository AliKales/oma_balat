"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#atolye", label: "Atölyeler" },
  { href: "/#galeri", label: "Galeri" },
  { href: "/#iletisim", label: "İletişim" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "px-3 py-2 rounded-full hover:bg-[var(--coffee)] hover:text-[var(--primary)] transition";

  return (
    <nav className="max-w-6xl mx-auto px-5 py-3">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 group"
        >
          <span className="relative inline-block h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border-[2px] border-[var(--coffee)] animate-wiggle">
            <Image
              src="/logo_oma.jpg"
              alt="Oma Balat logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-black text-2xl tracking-tight group-hover:-rotate-2 transition">
            Oma Balat
          </span>
        </Link>

        <ul className="hidden md:flex gap-1 sm:gap-3 items-center font-bold text-sm sm:text-base">
          <li>
            <Link href="/" className={linkClass}>
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link href="/menu" className={linkClass}>
              Menü
            </Link>
          </li>
          <li>
            <Link href="/#atolye" className={linkClass}>
              Atölyeler
            </Link>
          </li>
          <li>
            <Link href="/#galeri" className={linkClass}>
              Galeri
            </Link>
          </li>
          <li>
            <Link href="/#iletisim" className={linkClass}>
              İletişim
            </Link>
          </li>
        </ul>

        <div className="flex md:hidden items-center gap-2 font-bold">
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="sticker-sm bg-[var(--coffee)] text-[var(--primary)] px-4 py-2 rounded-full text-sm font-black"
          >
            Menü
          </Link>
          <button
            type="button"
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="sticker-sm bg-white rounded-full h-10 w-10 flex flex-col items-center justify-center gap-[5px] border-[2px] border-[var(--coffee)]"
          >
            <span
              className={`block h-[3px] w-5 bg-[var(--coffee)] rounded-full transition ${
                open ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-5 bg-[var(--coffee)] rounded-full transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-5 bg-[var(--coffee)] rounded-full transition ${
                open ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden mt-3 flex flex-col gap-1 font-bold text-base bg-white sticker rounded-2xl p-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 rounded-xl hover:bg-[var(--coffee)] hover:text-[var(--primary)] transition"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
