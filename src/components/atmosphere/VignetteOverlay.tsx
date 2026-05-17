export function VignetteOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[998]"
      style={{
        background:
          "radial-gradient(circle at center, transparent 30%, rgba(6, 6, 6, 0.85) 100%)",
      }}
    />
  );
}
