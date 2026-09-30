/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_SecurityInputs */

const en_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security`)
};

const es_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguridad`)
};

const de_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sicherheit`)
};

const fr_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sécurité`)
};

const it_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sicurezza`)
};

const nl_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beveiliging`)
};

const pl_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezpieczeństwo`)
};

const pt_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segurança`)
};

const ru_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Безопасность`)
};

const sv_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Säkerhet`)
};

const tr_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenlik`)
};

const zh_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全`)
};

const ja_console_nav_security = /** @type {(inputs: Console_Nav_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セキュリティ`)
};

/**
* | output |
* | --- |
* | "Security" |
*
* @param {Console_Nav_SecurityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_security = /** @type {((inputs?: Console_Nav_SecurityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_SecurityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_security(inputs)
	if (locale === "de") return de_console_nav_security(inputs)
	if (locale === "fr") return fr_console_nav_security(inputs)
	if (locale === "it") return it_console_nav_security(inputs)
	if (locale === "nl") return nl_console_nav_security(inputs)
	if (locale === "pl") return pl_console_nav_security(inputs)
	if (locale === "pt") return pt_console_nav_security(inputs)
	if (locale === "ru") return ru_console_nav_security(inputs)
	if (locale === "sv") return sv_console_nav_security(inputs)
	if (locale === "tr") return tr_console_nav_security(inputs)
	if (locale === "zh") return zh_console_nav_security(inputs)
	if (locale === "ja") return ja_console_nav_security(inputs)
	return en_console_nav_security(inputs)
});
