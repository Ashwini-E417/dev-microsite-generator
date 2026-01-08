## Microsite Generator Overview

- **What it does**: The dashboard at `index.html` lets a user import project data (Google Sheets CSV/TSV, DOCX/HTML exports, or a live Google Doc), select a marketing microsite template, review the parsed fields, and download a ready-to-host package.
- **How it is structured**: Templates live under `template-*` folders with dedicated assets; the dashboard loads the template metadata from `templates.json` and injects user content into the chosen HTML/CSS bundle before exporting.
- **Why it was built this way**: Keeping templates as static assets means marketing teams can tweak HTML/CSS without touching the dashboard logic, while the dashboard focuses on content ingestion, validation, and packaging.

## Runtime Technologies

- **HTML & Vanilla JS**: The dashboard UI (`index.html` + `dashboard.js`) uses native browser APIs—no frameworks—so it can run purely as a static site.
- **Inline CSS**: Layout and branding for the dashboard are defined inside `<style>` in `index.html`, avoiding extra build steps.
- **Template Styling**: Each template provides its own CSS under `template-*/assets/css/style.css`, ensuring design changes stay isolated per template.
- **Mammoth.js**: Loaded via CDN in `index.html` to convert `.docx` Google Doc exports into HTML for parsing when users upload DOCX files.
- **JSZip**: Also sourced from CDN so the dashboard can bundle the generated microsite (HTML + assets + uploads) into a downloadable `.zip`.

## Key Imports And Their Purpose

- `<script src="https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js">`
  - **Why**: Provides DOCX-to-HTML conversion, letting the dashboard accept .docx inputs directly.
  - **Used in**: `dashboard.js` (`parseDOCX`) to convert the uploaded file and extract the data table.
- `<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js">`
  - **Why**: Supplies client-side ZIP creation so the user receives one download with HTML and assets.
  - **Used in**: `dashboard.js` (`downloadMicrositeZip`, `copyTemplateAssets`, `addUploadedImages`).
- `<script src="dashboard.js">`
  - **Why**: Loads the main application logic controlling template selection, data ingestion, live preview, and export.
  - **Used by**: `index.html` UI via DOM event handlers defined inside `dashboard.js`.

## Build And Runtime Expectations

- **No Node.js build step**: Everything runs in the browser; hosting the root directory on any static file server is sufficient.
- **Static asset serving**: Templates rely on relative paths (images, CSS, thank-you pages). Keep the folder structure intact when deploying.
- **Browser storage**: Dashboard state persists via `localStorage` (`DASHBOARD_STORAGE_KEY`) so users can reload without losing progress.

## Where To Start

- Open `index.html` in a browser to use the dashboard.
- Review `templates.json` to see available template IDs and asset mappings.
- Adjust template CSS or HTML inside the corresponding `template-*` folder to customize the exported microsites.

