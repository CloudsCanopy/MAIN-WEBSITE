// Single source of truth — pulled from site-config.json
// Edit site-config.json in the project root, not this file directly.
import rawConfig from '../../site-config.json'

const siteConfig = {
  agencyName: rawConfig.agencyName,
  tagline: rawConfig.tagline,
  positioningStatement: rawConfig.positioningStatement,
  domain: rawConfig.domain,
  footerNote: rawConfig.footerNote,
  contact: {
    email: rawConfig.contact.email,
    phone: rawConfig.contact.phone,
    whatsapp: rawConfig.contact.whatsapp,
  },
  social: {
    instagram: rawConfig.social.instagram,
    linkedin: rawConfig.social.linkedin,
    github: rawConfig.social.github,
  },
}

export default siteConfig
