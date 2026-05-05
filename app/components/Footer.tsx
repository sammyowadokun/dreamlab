"use client";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-white)] py-12 h-[24vh]">
      <div className="container mx-auto px-10 m-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="mb-6 md:mb-0">
            <h4 className="font-bold text-[#0A0F1C] text-xl mb-2">DreamLab</h4>
            <p className="text-[#0A0F1C] text-sm opacity-80">A subsidiary of Spur Nation Group</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[#0A0F1C] text-sm opacity-80 mt-4">
              © {new Date().getFullYear()} DreamLab. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
