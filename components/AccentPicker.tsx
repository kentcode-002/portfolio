"use client";

import { useSyncExternalStore } from "react";

const PRESETS = [
  { name: "Gray (default)", value: "", swatch: "#808080" },
  { name: "Red", value: "red", swatch: "red" },
  { name: "Green", value: "#23c55e", swatch: "#23c55e" },
  { name: "Purple", value: "#a655f7", swatch: "#a655f7" },
  { name: "Blue", value: "#3a82f6", swatch: "#3a82f6" },
  { name: "Yellow", value: "#e9b308", swatch: "#e9b308" }
];

const STORAGE_KEY = "accent-color";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

// The server has no saved accent, so the first render matches it and React
// updates to the saved value right after hydration.
function getServerSnapshot() {
  return "";
}

function setAccent(value: string) {
  const root = document.documentElement;
  try {
    if (value) localStorage.setItem(STORAGE_KEY, value);
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage can be blocked (private mode); the color still changes for this visit.
  }
  if (value) root.style.setProperty("--accent", value);
  else root.style.removeProperty("--accent");
  listeners.forEach((listener) => listener());
}

export default function AccentPicker() {
  const active = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted">Accent color</span>
      <div className="flex items-center gap-2">
        {PRESETS.map((preset) => {
          const selected = active === preset.value;
          return (
            <button
              key={preset.name}
              type="button"
              onClick={() => setAccent(preset.value)}
              aria-label={preset.name}
              aria-pressed={selected}
              style={{ backgroundColor: preset.swatch }}
              className={`h-5 w-5 rounded-full transition-transform hover:scale-110 ${
                selected ? "ring-2 ring-fg ring-offset-2 ring-offset-bg" : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
