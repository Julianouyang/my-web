---
title: "Rebuilding junliangouyang.com"
date: 2026-04-02
public: true
tags: ["meta", "design", "openclaw"]
---

This site has been running since 2018. Eight years is a long time on the internet.

The original version was built with Angular 7 — a full JavaScript framework for what is essentially a personal journal. Overkill. It worked, but it was fragile, hard to update, and impossible to maintain without touching code.

So I rebuilt it from scratch in 2026.

## The workflow

This rebuild was coordinated entirely through [OpenClaw](https://openclaw.ai), my AI assistant. I described what I wanted in Discord. OpenClaw (Cello 🎻) planned the architecture, delegated the implementation to Claude Code, reviewed the output, and deployed it to Firebase Hosting — all without me touching a terminal.

The stack is simple by design:

- **Astro** — generates static HTML at build time. No runtime framework, no bloat. The output is just files.
- **Tailwind CSS** — utility classes, no fighting stylesheets.
- **Firebase Hosting** — fast CDN, free tier, custom domain support.
- **Markdown files** — every post is a `.md` file in the repo. No database, no CMS, no SaaS dependency.

## Why this matters

The old site survived 8 years because Firebase Hosting and a domain renewal are the only two dependencies. Nothing else can break.

This new stack has the same philosophy. Static files served from a CDN. Posts are just text files. The build tool (Astro) can be swapped out someday if needed — the content stays.

Some of what I post here might seem meaningless today. That is fine. Compounding is slow and invisible until it is not.

## The workflow going forward

I tell Cello: `/post [content]`

Cello writes the markdown file, commits it, builds the site, and deploys. The site updates in under a minute.

I do not touch a terminal.
