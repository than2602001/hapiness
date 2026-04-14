interface Props {
  script: string;
  title: string;
  desc: string;
}

export default function SectionTitle({ script, title, desc }: Props) {
  return (
    <div className="text-center mb-14 animate-on-scroll">
      <span className="font-[family-name:var(--font-script)] text-xl text-gold block mb-2">
        {script}
      </span>
      <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-brown-deep mb-4">
        {title}
      </h2>
      <p className="text-base text-brown-medium/70 max-w-xl mx-auto">{desc}</p>
      <div className="w-14 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-light mx-auto mt-4 rounded" />
    </div>
  );
}
