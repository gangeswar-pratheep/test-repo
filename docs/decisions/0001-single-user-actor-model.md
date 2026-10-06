# 0001: Single-user actor model

## Status

Decided.

## Context

FND-0001 / category-1-actor_clarity flagged that the kanban app supports
exactly one undifferentiated user: there is no login, no accounts, and no
role distinctions anywhere in the inventory. The app loads and saves tasks
to a single `localStorage` key (`kanban-tasks`) with no owner field on a
task, and no auth/user code exists anywhere in `src/` (see
`src/App.jsx:10-33`).

The PRD's assumption ASM-01 (accounts/auth excluded) and out-of-scope item
OOS-01 (accounts/auth out of scope) treated this as an open assumption
rather than a confirmed product decision.

## Decision

The product owner was asked directly: should the app stay a single-user
tool with no accounts, or grow to support multiple distinct users/roles
later? The recorded answer is **single-user**.

The product therefore remains single-user, with no accounts, no login, and
no roles. This closes FND-0001, and confirms ASM-01 and OOS-01 as final
product decisions rather than open assumptions.

Because the product is single-user, no "user" entity is introduced: there
is no owner field on a task, no account record, and no role model. A task
belongs to the single implicit actor of the browser's local storage, as it
does today.

## Consequences

- No authentication, account, or role code is required or planned.
- Any future task-ownership or persistence work can proceed without
  modeling a "user" entity, since none is needed.
- This decision does not change `src/App.jsx`, the task model, or the
  `kanban-tasks` storage key; it is a documentation record only.
