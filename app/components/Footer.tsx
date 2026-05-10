"use client";

const socialLinks = [
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=trydreamlab@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/dreamlab",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/dreamlab",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/dreamlab",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452H16.89v-5.569c0-1.327-.025-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.344V9h3.414v1.561h.048c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.268 2.37 4.268 5.455v6.285zM5.337 7.433a1.98 1.98 0 1 1 0-3.96 1.98 1.98 0 0 1 0 3.96zm1.956 13.019H3.381V9h3.912v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-100">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div>
            <h4 className="font-bold text-navy text-xl mb-1">DreamLab</h4>
            <p className="text-navy text-sm opacity-60">A subsidiary of Spur Nation Group</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="
                  flex items-center justify-center w-10 h-10 rounded-full
                  border border-gray-200 text-navy
                  transition-all duration-200
                  hover:bg-[#39FF14] hover:border-[#39FF14] hover:text-navy
                  hover:scale-110 hover:shadow-md
                "
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-navy text-sm opacity-60">
            © {new Date().getFullYear()} DreamLab. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
