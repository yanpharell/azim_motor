import React from "react";

const brand = { primary: "#000000", primaryDark: "#000000" };

export const PrimaryButton = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 ${className}`}
    style={{ backgroundImage: `linear-gradient(135deg, ${brand.primary}, ${brand.primaryDark})` }}
  >
    {children}
  </button>
);

export const OutlineButton = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`rounded-2xl border border-neutral-300 px-5 py-3 text-base font-semibold text-neutral-800 transition hover:bg-neutral-50 ${className}`}
  >
    {children}
  </button>
);
