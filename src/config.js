export const config = {
    "number": 33,
    "slug": "crm-lite-migrator",
    "title": "CRM Lite Migrator",
    "category": "AI & Automation",
    "tagline": "A migration checklist for moving customer lists from notebooks, spreadsheets, or inboxes into a lightweight CRM.",
    "persona": "Tech/ops pods cleaning client data.",
    "gap": "Small businesses often do not need a complex CRM, but they do need clean contacts and a repeatable import process.",
    "niche": "First CRM setup for very small teams.",
    "metric": "clean contacts migrated with consent status",
    "modules": [
        "Source inventory",
        "Field mapping sheet",
        "Duplicate review process",
        "Owner handoff tutorial"
    ],
    "theme": {
        "accent": "#7c3aed",
        "accent2": "#c4b5fd",
        "emoji": "\u26a1",
        "metricLabel": "Automation safety",
        "workflow": [
            "Define workflow boundary",
            "Identify data and failure risks",
            "Require human review",
            "Export safe implementation plan"
        ],
        "privacy": "No external AI calls are made. Treat customer data, credentials, payments, and public posting as high risk."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "source-inventory",
            "label": "Source inventory",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify source inventory with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "field-mapping-sheet",
            "label": "Field mapping sheet",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify field mapping sheet with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "duplicate-review-process",
            "label": "Duplicate review process",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify duplicate review process with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "owner-handoff-tutorial",
            "label": "Owner handoff tutorial",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify owner handoff tutorial with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for CRM Lite Migrator and capture baseline evidence.",
            "Complete the source inventory workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "BrightPath Tutoring Studio",
        "chapter": "El Paso",
        "studentLead": "Volta Student Lead",
        "notes": "Responsible automation project to reduce admin time without exposing student data. CRM Lite Migrator sample.",
        "evidencePrefix": "CRM Lite Migrator",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map