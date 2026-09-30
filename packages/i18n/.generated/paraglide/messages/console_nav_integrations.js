/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_IntegrationsInputs */

const en_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrations`)
};

const es_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integraciones`)
};

const de_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrationen`)
};

const fr_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intégrations`)
};

const it_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrazioni`)
};

const nl_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integraties`)
};

const pl_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integracje`)
};

const pt_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrações`)
};

const ru_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Интеграции`)
};

const sv_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrationer`)
};

const tr_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entegrasyonlar`)
};

const zh_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`集成`)
};

const ja_console_nav_integrations = /** @type {(inputs: Console_Nav_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`連携`)
};

/**
* | output |
* | --- |
* | "Integrations" |
*
* @param {Console_Nav_IntegrationsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_integrations = /** @type {((inputs?: Console_Nav_IntegrationsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_IntegrationsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_integrations(inputs)
	if (locale === "de") return de_console_nav_integrations(inputs)
	if (locale === "fr") return fr_console_nav_integrations(inputs)
	if (locale === "it") return it_console_nav_integrations(inputs)
	if (locale === "nl") return nl_console_nav_integrations(inputs)
	if (locale === "pl") return pl_console_nav_integrations(inputs)
	if (locale === "pt") return pt_console_nav_integrations(inputs)
	if (locale === "ru") return ru_console_nav_integrations(inputs)
	if (locale === "sv") return sv_console_nav_integrations(inputs)
	if (locale === "tr") return tr_console_nav_integrations(inputs)
	if (locale === "zh") return zh_console_nav_integrations(inputs)
	if (locale === "ja") return ja_console_nav_integrations(inputs)
	return en_console_nav_integrations(inputs)
});
