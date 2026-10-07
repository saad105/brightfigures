# Bright Figures LLC — Website

Static website (HTML/CSS/JS, no build step). Open `index.html` in a browser, or upload the whole folder to any web host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Pages
`index.html` · `about.html` · `services.html` · `industries.html` · `contact.html` · `privacy.html` · `terms.html`

## Before going live — replace placeholders
Search all `.html` files for these and replace them with the real details:

| Placeholder | Where |
|---|---|
| `info@brightfiguresllc.com` | Footer, contact page, privacy/terms, form `data-email`, JSON-LD in `index.html` |
| `(555) 010-0000` / `+15550100000` | Footer, contact page, privacy page, JSON-LD |
| `Mon – Fri, 9:00 AM – 5:00 PM` | Footer, contact page |

## Contact form
In `contact.html`, set `data-endpoint` on `<form id="contact-form">` to a form-handling service URL (for example Formspree: `https://formspree.io/f/xxxxxxx`). Until then, submitting the form opens the visitor's email app with a pre-filled message to `data-email`.

Service buttons across the site link to `contact.html?service=…`, which preselects the matching service in the dropdown.

## Content notes
- Privacy Policy and Terms of Service are templates. Have them reviewed before publishing.
- The footer disclaimer says the firm does not provide legal advice and that registration services are administrative assistance. Keep it unless that changes.
- The dashboard figures on the home page are illustrative and labeled "Sample".
- Remove any industries on `industries.html` (and the home page "Businesses We Serve" chips) that the firm does not plan to serve.
