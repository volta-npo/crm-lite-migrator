export const PRODUCT_ROLES = ['Owner operator', 'Data steward', 'Migration mapper', 'Consent reviewer'];
export const PRODUCT_PERSONAS = ['Owner operator', 'Data steward', 'Migration mapper', 'Consent reviewer', 'Frontline trainer', 'Implementation pod lead'];
export const PRODUCT_INTEGRATIONS = [
    'CSV contacts import',
    'Google Sheets export',
    'HubSpot starter mapping',
    'Mailchimp consent notes',
];
export const PRODUCT_ANALYTICS = [
    'Duplicate cluster rate',
    'Consent coverage',
    'Field mapping completeness',
    'Rejected row reasons',
];
export const PRODUCT_KPIS = ['Clean contacts activated', 'Consent coverage', 'Duplicate cluster resolution', 'Rejected row turnaround', 'Owner training completion', 'CRM import success rate'];
export const PRODUCT_WORKFLOWS = [
    'CSV import preview',
    'Dedupe decision queue',
    'Consent-state validator',
    'Owner handoff tutorial',
];
export const PRODUCT_ONBOARDING = ['Upload source contact files', 'Map source fields to CRM schema', 'Resolve duplicate clusters', 'Assign consent state for every record', 'Export import-ready CSV', 'Train owner on upkeep rhythm'];
export const PRODUCT_GUARDS = [
    'Block launch when consent is unknown',
    'Flag duplicate phone/email clusters',
    'Require source-system notes before export',
];
export const PRODUCT_EXPANSION = ['Recurring quarterly list hygiene', 'Multi-location contact segmentation', 'Consent-safe email revival handoff', 'CRM adoption coaching retainer'];
export const PRODUCT_DATA_MODEL = ['Contact', 'Source system', 'Consent status', 'Duplicate cluster', 'Rejected row reason', 'Owner handoff note'];
export const PRODUCT_SUCCESS_SIGNALS = ['Owner can explain the import workflow', 'Every marketing contact has consent basis', 'Rejected rows have clear remediation notes', 'Duplicate decisions are documented'];
export function createProductSaasBlueprint(config, domain) {
    return {
        product: config.title,
        northStar: config.metric,
        roles: PRODUCT_ROLES,
        personas: PRODUCT_PERSONAS,
        integrations: PRODUCT_INTEGRATIONS,
        analytics: PRODUCT_ANALYTICS,
        kpis: PRODUCT_KPIS,
        workflows: PRODUCT_WORKFLOWS,
        onboarding: PRODUCT_ONBOARDING,
        guards: PRODUCT_GUARDS,
        expansion: PRODUCT_EXPANSION,
        dataModel: PRODUCT_DATA_MODEL,
        successSignals: PRODUCT_SUCCESS_SIGNALS,
        modules: config.modules,
        artifacts: domain.artifacts
    };
}
//# sourceMappingURL=saas-blueprint.js.map