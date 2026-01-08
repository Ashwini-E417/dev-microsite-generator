# Process Flow

## 1. Template Selection

**What happens:**
- Dashboard loads `templates.json` from root (line 2323)
- Shows available templates (template-1, template-2, etc.)
- User clicks template → `selectedTemplate` variable updated (line 2551)
- Stored in `localStorage` for next visit (line 38-74)

**Code:** `dashboard.js` lines 2478-2598

---

## 2. Upload Data File

**What happens:**
- User uploads CSV/TSV/HTML/DOCX or pastes Google Docs URL
- File parsed based on type:
  - **CSV/TSV**: `parseCSV()` line 1119
  - **HTML**: `parseHTML()` line 1159  
  - **DOCX**: `parseDOCX()` line 1211 (uses Mammoth.js line 1244)
  - **Google Docs**: Downloads as DOCX, then parses (line 1340)
- Data extracted into `parsedData` object (line 4)
- Field mapping checked against template's `data-field` attributes (line 977-1040)

**Storage:** `parsedData` variable + `localStorage` (line 151)

**Code:** `dashboard.js` lines 900-975

---

## 3. Add GTM / Images / Iframe

**What happens:**
- User types GTM code → stored in `gtmHeadCode` / `gtmBodyCode` variables (lines 803-816)
- User uploads images → converted to data URLs, stored in `uploadedImages` object (line 6)
- User pastes iframe → stored in `customLocationIframe` variable (line 823)
- All saved to `localStorage` automatically (line 139-161)

**Storage:** 
- GTM: `gtmHeadCode`, `gtmBodyCode` (lines 10-11)
- Images: `uploadedImages` object (line 6)
- Iframe: `customLocationIframe` (line 12)

**Code:** `dashboard.js` lines 803-830

---

## 4. Inject Data into Template HTML

**What happens:**
- `generateMicrositeHTML()` function called (line 2688)
- Loads template HTML from `templates.json` path (line 2697)
- Finds all `data-field="field_name"` attributes in HTML (line 988)
- Replaces content matching field names from `parsedData`:
  - Meta tags: line 2753-2759
  - Title tags: line 2762-2768
  - Other elements: line 2775-2837
- Adds GTM code to `<head>` and `<body>` (lines 2643-2675)
- Replaces location iframe (line 3752)
- Replaces images using `imageMapping` from `templates.json` (line 3419)

**Code:** `dashboard.js` lines 2688-2860

---

## 4a. How GTM / Images / Iframe Find Their Place

### GTM (Google Tag Manager)
**How it finds place:**
- Uses DOM parser to find `<head>` and `<body>` tags (line 2640)
- **Head GTM**: Finds `<head>` element → inserts at start (line 2644-2660)
- **Body GTM**: Finds `<body>` element → inserts at start (line 2665-2680)
- No search needed - always inserts at beginning of head/body

**Code:** `dashboard.js` lines 2635-2686 (`addGTMToHTML()`)

### Images
**How it finds place:**
- Uses `imageMapping` from `templates.json` (line 3422)
- Each image category has `replacePatterns` array
- Searches HTML for elements matching patterns:

**Logo** (line 3425-3440):
- Finds: `img[src*="logo"]`, `link[href*="logo"]`, `a[href*="logo"]`
- Checks if path matches `replacePatterns` (e.g., `/logo.webp`, `logo.webp`)
- Updates `src` or `href` attribute

**Banner** (line 3443-3468):
- Finds: `#bannerSlides` container and preload links
- Updates banner slides and preload tags

**Favicon** (line 3471-3494):
- Finds: `link[rel="icon"]`, `link[rel="shortcut icon"]`
- Updates existing or creates new favicon link in `<head>`

**Virtual Tour** (line 3497-3512):
- Finds: `img[src]`, `iframe[src]`, `a[href]`
- Checks if path matches `replacePatterns` (e.g., `/vtour/`, `/banner/banner.webp`)
- Updates `src` or `href`

**Amenities/Gallery/QR** (lines 3514-3572):
- Finds containers by ID: `#amenitiesTrack`, `#galleryTrack`, `#qrContainer`
- Rebuilds carousel slides with new images

**Code:** `dashboard.js` lines 3418-3572 (`updateImagePaths()`)

### Iframe (Location Map)
**How it finds place:**
- Searches for `[data-location-iframe-container]` attribute (line 3747)
- Also searches for `[data-field="location_iframe"]` (line 3752)
- Replaces innerHTML of container with iframe markup (line 3750)
- If only URL provided, wraps in iframe tag (line 3809-3813)

**Code:** `dashboard.js` lines 3741-3761 (`applyLocationIframe()`)

**Example template HTML:**
```html
<!-- Template must have one of these: -->
<div data-location-iframe-container></div>
<!-- OR -->
<div data-field="location_iframe"></div>
```

---

## 5. Preview

**What happens:**
- User clicks "Preview" button (line 1405)
- `generateMicrositeHTML()` creates HTML (line 2688)
- `embedImagesInPreview()` converts uploaded images to data URLs (line 1489)
- Opens new window with generated HTML (line 1407)
- Sets base URL so assets load correctly (line 1497-1510)

**Code:** `dashboard.js` lines 1405-1486

---

## 6. Download

**What happens:**
- User clicks "Generate & Download" (line 1383)
- `generateMicrositeHTML()` creates final HTML (line 2688)
- `downloadMicrositeZip()` function (line 1961):
  - Creates JSZip instance (line 1969)
  - Adds HTML file (line 1972)
  - Copies all template assets (CSS, JS, images) from template folder (line 1976)
  - Adds uploaded images (line 1980)
  - Generates ZIP blob (line 1984)
  - Triggers browser download (lines 1986-1993)

**Code:** `dashboard.js` lines 1383-1994

---

## Data Flow Summary

```
User Input → Variables → localStorage → Template HTML → Final Output
     ↓           ↓            ↓              ↓              ↓
  Upload    parsedData    Auto-save    data-field     ZIP file
  GTM       gtmHeadCode   Restore      replacement    Preview
  Images    uploadedImages on reload   Image swap     Download
  Iframe    customLocationIframe
```

