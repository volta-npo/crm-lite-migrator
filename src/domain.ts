export const domain = {
  "kind": "crm-cleaner",
  "title": "CRM Lite Migrator",
  "purpose": "A purpose-built crm cleaner interface for a migration checklist for moving customer lists from notebooks, spreadsheets, or inboxes into a lightweight crm.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "Contact cleanup grid",
  "metricLabels": [
    "Cleanliness Score",
    "Duplicate Risk",
    "Consent Coverage"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "BrightPath Tutoring Studio",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "clean contacts migrated with consent status",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "input-asset",
      "label": "Input asset",
      "type": "text",
      "sample": "Source inventory complete",
      "placeholder": "Enter input asset"
    },
    {
      "id": "output-format",
      "label": "Output format",
      "type": "text",
      "sample": "Clean CRM CSV",
      "placeholder": "Enter output format"
    },
    {
      "id": "review-threshold",
      "label": "Review threshold",
      "type": "number",
      "sample": 85,
      "placeholder": "Enter review threshold"
    },
    {
      "id": "approved-channel",
      "label": "Approved channel",
      "type": "text",
      "sample": "Owner handoff packet",
      "placeholder": "Enter approved channel"
    }
  ],
  "rows": [
    "Source inventory complete",
    "Field mapping created",
    "Contacts imported/entered",
    "Email/phone formats checked",
    "Duplicates reviewed",
    "Consent states assigned",
    "Sensitive notes excluded",
    "Import-ready CSV exported"
  ],
  "artifacts": [
    "Clean CRM CSV",
    "Rejected rows report",
    "Mapping doc"
  ],
  "checks": [
    "Consent required before marketing export",
    "Invalid email/phone flagged",
    "No purchased lists"
  ],
  "sampleClient": "BrightPath Tutoring Studio"
};
