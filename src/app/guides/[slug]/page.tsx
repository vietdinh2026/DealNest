{guide.sections.map((s: GuideSection) => (
  <section key={s.heading} className="mt-10 max-w-3xl">
    <h2 className="text-2xl font-extrabold">{s.heading}</h2>
    <div className="mt-3 space-y-4 leading-relaxed text-slate-700">
      {s.paragraphs.map((p: string, idx: number) => (
        <p key={`${s.heading}-p-${idx}`}>{p}</p>
      ))}
    </div>
    {s.bullets && (
      <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-slate-700">
        {s.bullets.map((b: string, idx: number) => (
          <li key={`${s.heading}-b-${idx}`}>{b}</li>
        ))}
      </ul>
    )}
  </section>
))}
