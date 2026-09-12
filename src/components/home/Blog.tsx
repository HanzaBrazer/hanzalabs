"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Blog() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="mb-10 lg:mb-14">
          <Reveal>
            <p className="eyebrow mb-6">Blogs</p>
          </Reveal>
          <Reveal variant="mask">
            <h2 className="max-w-[820px] text-h3 lg:text-h2">
              Stories behind our design process
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.06 }}
            >
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                data-cursor="hover"
                className="group block"
              >
                <div className="overflow-hidden rounded-card">
                  <Media
                    src={post.image}
                    alt={post.title}
                    className="aspect-[4/3] w-full transition-transform duration-[800ms] ease-smooth group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-pill border border-ink/15 px-2.5 py-1 text-[12px] text-ink/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-[20px] font-medium leading-snug tracking-tight">
                    {post.title}
                  </h3>
                  <div className="mt-6">
                    <p className="text-[13px] text-ink/40">Published</p>
                    <p className="mt-1 text-[14px] text-ink/70">{post.date}</p>
                    <div className="mt-4 h-px w-full bg-ink/12" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
