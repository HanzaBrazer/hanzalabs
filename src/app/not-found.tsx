import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[80vh] flex-col items-center justify-center py-32 text-center">
      <p className="eyebrow mb-6">Error</p>
      <h1 className="text-[clamp(6rem,22vw,16rem)] font-medium leading-none tracking-tightest">
        404
      </h1>
      <p className="mt-6 max-w-[420px] text-[17px] text-ink/60">
        The page you&apos;re looking for drifted off the canvas. Let&apos;s get
        you back to something beautiful.
      </p>
      <div className="mt-10">
        <Button href="/">Back to Home</Button>
      </div>
    </section>
  );
}
