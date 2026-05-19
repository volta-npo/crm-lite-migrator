export const PRODUCT_ROLES = [
  'Data steward',
  'Migration mapper',
  'Consent reviewer',
  'Owner trainer',
];

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

export const PRODUCT_WORKFLOWS = [
  'CSV import preview',
  'Dedupe decision queue',
  'Consent-state validator',
  'Owner handoff tutorial',
];

export const PRODUCT_GUARDS = [
  'Block launch when consent is unknown',
  'Flag duplicate phone/email clusters',
  'Require source-system notes before export',
];

export function createProductSaasBlueprint(config, domain) {
  return {
    product: config.title,
    northStar: config.metric,
    roles: PRODUCT_ROLES,
    integrations: PRODUCT_INTEGRATIONS,
    analytics: PRODUCT_ANALYTICS,
    workflows: PRODUCT_WORKFLOWS,
    guards: PRODUCT_GUARDS,
    modules: config.modules,
    artifacts: domain.artifacts
  };
}
