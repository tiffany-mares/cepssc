# Calendar Page — Design

**Date:** 2026-08-14
**Status:** Approved

## Goal

Give students one place to see all upcoming CCMPSSC and club events, sourced
from the council's published Outlook/Office365 calendar so the page never needs
manual updates.

## Decision

Embed the published Outlook calendar view in an iframe (approved over a
custom-styled react-calendar UI). Rationale: zero maintenance, always in sync,
no backend needed. Microsoft serves the published HTML view for exactly this
purpose; the custom UI would require a serverless ICS proxy that Microsoft's
bot-blocking makes unreliable (direct script fetches of the `.ics` URL return
an HTML placeholder).

Published calendar URL:
`https://outlook.office365.com/calendar/published/b1348913de224d4da022233cb3c66eb0@uoguelph.ca/d074a27cd3ba4a5082c12426e0e8948d2314191237874545725/calendar.html`

## Components

- `src/pages/Calendar/Calendar.jsx` — page component: intro paragraph, iframe
  embed, "Open full calendar" fallback link (`btn dark-btn`, new tab).
- `src/pages/Calendar/Calendar.css` — responsive iframe container: full content
  width, ~75vh tall on desktop, taller minimum height on small screens; rounded
  corners/border to match site cards.
- `src/App.jsx` — new `/calendar` route wrapping the page with the shared
  `Title` component (subtitle "Stay up to date", title "Events Calendar"),
  same pattern as the Contact/Forms routes.
- `src/components/Navbar/Navbar.jsx` — "Calendar" link between "Student Clubs"
  and "Forms & Documents".
- `src/components/Footer/Footer.jsx` — "Calendar" added to Quick Links.

## Error handling

Cross-origin iframes cannot report load failures to the page, so the fallback
is structural: the "Open full calendar" link always offers a direct path to the
same URL. If Microsoft ever disallows framing, the page degrades to a styled
link-out rather than breaking.

## Testing

Manual: run the dev server, confirm the iframe renders the Outlook calendar,
check navbar/footer links, and check layout at mobile widths. No unit tests —
the page is static markup with no logic; the project has no test
infrastructure.

## Out of scope

Custom-themed calendar UI fed by the ICS feed (possible later upgrade if a
reliable proxy is found), event filtering by club, and any backend work.
