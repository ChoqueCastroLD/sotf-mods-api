/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_EcosystemInputs */

const en_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecosystem`)
};

const es_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecosistema`)
};

const de_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ökosystem`)
};

const fr_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écosystème`)
};

const it_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecosistema`)
};

const nl_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecosysteem`)
};

const pl_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekosystem`)
};

const pt_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecossistema`)
};

const ru_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Экосистема`)
};

const sv_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekosystem`)
};

const tr_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekosistem`)
};

const zh_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生态`)
};

const ja_console_nav_ecosystem = /** @type {(inputs: Console_Nav_EcosystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エコシステム`)
};

/**
* | output |
* | --- |
* | "Ecosystem" |
*
* @param {Console_Nav_EcosystemInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_ecosystem = /** @type {((inputs?: Console_Nav_EcosystemInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_EcosystemInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_ecosystem(inputs)
	if (locale === "de") return de_console_nav_ecosystem(inputs)
	if (locale === "fr") return fr_console_nav_ecosystem(inputs)
	if (locale === "it") return it_console_nav_ecosystem(inputs)
	if (locale === "nl") return nl_console_nav_ecosystem(inputs)
	if (locale === "pl") return pl_console_nav_ecosystem(inputs)
	if (locale === "pt") return pt_console_nav_ecosystem(inputs)
	if (locale === "ru") return ru_console_nav_ecosystem(inputs)
	if (locale === "sv") return sv_console_nav_ecosystem(inputs)
	if (locale === "tr") return tr_console_nav_ecosystem(inputs)
	if (locale === "zh") return zh_console_nav_ecosystem(inputs)
	if (locale === "ja") return ja_console_nav_ecosystem(inputs)
	return en_console_nav_ecosystem(inputs)
});
