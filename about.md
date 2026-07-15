---
layout: page
title: About
permalink: /about/
description: Byamba Enkhbat — data engineer building multi-agent AI systems on Google Cloud.
---

<div class="about-hero reveal">
  <img src="/images/byamba_photo.jpg" alt="Byamba Enkhbat" class="about-photo" loading="lazy">
  <div>
    <p class="kicker">Hello, world</p>
    <h1 class="about-name">I'm Byamba Enkhbat.</h1>
    <p class="about-role">Data Engineer · AI Systems Builder · Father of two · Lifelong learner</p>
    <div class="about-social">
      <a href="https://github.com/byambaa1982" target="_blank" rel="noopener">GitHub</a>
      <a href="https://twitter.com/techtoninc190427" target="_blank" rel="noopener">Twitter</a>
      <a href="mailto:enkhbat@byamba.net">Email</a>
    </div>
  </div>
</div>

I build **production-grade data and AI systems** — the kind that have to survive
real traffic, real budgets, and real failure modes. Lately that means orchestrating
fleets of specialized AI agents on Google Cloud that research, write, and publish
content for cents per piece, without falling over.

By day I'm a data engineer working at the intersection of pipelines, cloud
infrastructure, and machine learning. Off the clock I'm usually with my two kids,
buried in a book, or somewhere outdoors with a camera.

> "Learning about the world and the people in it can broaden our horizons and
> enrich our lives in countless ways."

## What I'm working on

- **Multi-agent AI systems** — coordinated agents for content generation, research, and automation on GCP and Vertex AI.
- **Data engineering** — Spark, Python, SQL, and ETL pipelines that turn raw data into something useful.
- **Writing** — documenting the build in public: the architecture, the costs, and the parts that broke.

## Why this blog exists

I write to think out loud and to leave a trail others can follow. Every essay here
tries to do three things: **show the real numbers**, **explain the trade-offs**, and
**leave the failures in** — because that's where the actual lessons live.

If any of this resonates — or you just want to compare notes — reach out. I'm always
glad to connect with people building in the same space.

<p class="about-quote">"The journey of a thousand miles begins with a single step." — Lao Tzu</p>

<style>
  .about-hero { display: flex; gap: 1.8rem; align-items: center; flex-wrap: wrap; margin-bottom: 2.5rem; padding-bottom: 2.5rem; border-bottom: 1px solid var(--border); font-family: var(--font-sans); }
  .about-photo { width: 132px; height: 132px; border-radius: 22px; object-fit: cover; border: 1px solid var(--border-strong); box-shadow: 0 18px 40px -18px var(--shadow); flex: none; transition: transform 0.4s var(--ease); }
  .about-photo:hover { transform: scale(1.04) rotate(-2deg); }
  .about-name { font-size: clamp(1.9rem, 5vw, 2.7rem); letter-spacing: -0.03em; line-height: 1.05; margin: 0.6rem 0 0.4rem; font-weight: 700; }
  .about-role { color: var(--muted); font-size: 1rem; }
  .about-social { display: flex; gap: 1rem; margin-top: 0.9rem; }
  .about-social a { font-family: var(--font-mono); font-size: 0.82rem; color: var(--accent); box-shadow: none; }
  .about-social a:hover { color: var(--accent-2); }
  .about-quote { text-align: center; font-style: italic; color: var(--faint); margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border); }
</style>
