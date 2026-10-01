<div align="center">

<img src="assets/project-banner.svg" alt="Animated Relay support inbox banner" width="900" />

# Relay — Customer Support Inbox

**A shared inbox for thoughtful replies, clear ownership, and support teams that keep their promises.**

[![Next.js](https://img.shields.io/badge/Next.js-15-171717?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-2d6a58.svg)](LICENSE)

</div>

## Product scope

Relay makes the conversation the center of the support workflow. Agents can triage a queue, see SLA context, review customer history, write a reply or a private note, and resolve a ticket.

## Current release

This release is an interactive UI prototype. Demo tickets and replies persist in the current browser with `localStorage`. Assignment, customer profile actions, SLA deadlines, email transport, authentication, and database writes are visual demo controls; they are not connected to a backend. Use sample data only.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Planned production architecture

- Supabase Auth and Postgres row-level security for tenant-scoped tickets and teammates.
- Next.js server routes for ticket mutations, assignment, and idempotent reply handling.
- Resend for outbound email, with delivery records linked to immutable conversation events.
- SLA policies calculated server-side using workspace calendars and priority rules.
- Auditable assignment, status, and message events; no secrets in browser code.

## Data model sketch

`tickets(id, tenant_id, customer_id, assignee_id, status, priority, first_response_due_at)`

`messages(id, ticket_id, author_id, body, visibility, delivery_state, created_at)`

`ticket_events(id, ticket_id, actor_id, action, payload, created_at)`

## Stack

Next.js App Router · React · TypeScript · Lucide · CSS · browser `localStorage`

## Accessibility and responsive behavior

Queue actions have visible focus states, icon-only controls carry labels, the ticket list collapses to a conversation view on narrow screens, and motion respects `prefers-reduced-motion`.

## License

MIT. See [LICENSE](LICENSE).

