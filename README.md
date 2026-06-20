Project Blueprint: Smaller Stronger Shredded
A Multimedia Blog Experiment

Creator/Athlete: Adam Bentley (Veteran fitness influencer, father of 2, tree surgeon, internet business operator)

Objective: Track the journey to a sub-10% body fat reset, dominate the summer, and get shredded to a razor-sharp 8% by his 38th birthday in September.

Tech Stack: Astro (Minimal Starter), Sanity Studio, pnpm Workspaces (Monorepo architecture).

🛠️ What We’ve Built So Far
We successfully established the core backend data layers and connected them to our high-performance frontend framework using pnpm workspace commands.

1. The Content Engine (/studio)
We designed and registered the first custom Sanity schema tailored specifically to the "Bigger Smaller Bigger" style format.

Document Type: dailyLog

Tracking Metrics: Captures critical daily metadata including Date, Slug, Body Weight (kg), and Calorie Intake (kcal).

The Vibe Slider: Integrated a 1–10 satisfaction rating directly into the Studio to measure daily energy and grit.

Rich Text Stream: Configured a standard block layout ready to take on daily long-form journal updates.

Custom "Knowledge Bomb" Block: Built a dedicated schema block inside the rich-text stream to allow Adam to drop sudden, high-impact tactical fitness or business takeaways.

First Entry Status: Officially created and stored in the database!

2. The Bridge Setup (/frontend)
Using targeted monorepo filters (pnpm --filter frontend exec astro add @sanity/astro), we clean-installed the official Sanity integration into our Astro application without breaking the root lockfile.

Configured .env variables to tap securely into the Sanity dataset.

Wired up astro.config.mjs with an API version timestamp to handle data fetching.

Wrote the initial GROQ query on the Astro homepage (index.astro) to successfully test pulling the latest real-time metrics down from the studio.

🚀 Where We Are Heading Next
To turn this from a skeleton setup into a killer, production-ready multimedia destination, here is our immediate roadmap:

Phase 1: Rendering & Polish
Portable Text Integration: Install and configure the @portabletext/toolkit or standard Astro components to render Adam's rich text journal entries, explicitly styling the custom Knowledge Bomb component (e.g., giving it an aggressive, high-contrast, tree-surgeon-approved blockquote design).

Dynamic Routing ([slug].astro): Move away from just showing the latest log on the homepage. We will build an archive page and dynamic routes so every single day has its own dedicated, fast-loading URL (e.g., /logs/day-1).

Phase 2: Expanding the Schema
Workout Logs: Create a standalone workout schema (exercises, sets, reps, RPE) that can be linked directly inside a dailyLog entry via a Sanity reference field.

Media Handling: Add support for daily photo uploads or video embeds so users can visually watch the 38th birthday 8% shred progress in real-time.