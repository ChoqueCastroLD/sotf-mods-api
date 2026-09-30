/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Platform_UniversalInputs */

const en_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universal`)
};

const es_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universal`)
};

const de_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universell`)
};

const fr_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universel`)
};

const it_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universale`)
};

const nl_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universeel`)
};

const pl_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uniwersalny`)
};

const pt_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universal`)
};

const ru_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Универсальный`)
};

const sv_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Universell`)
};

const tr_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Evrensel`)
};

const zh_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通用`)
};

const ja_ui_domain_platform_universal = /** @type {(inputs: Ui_Domain_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`両対応`)
};

/**
* | output |
* | --- |
* | "Universal" |
*
* @param {Ui_Domain_Platform_UniversalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_platform_universal = /** @type {((inputs?: Ui_Domain_Platform_UniversalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Platform_UniversalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_platform_universal(inputs)
	if (locale === "de") return de_ui_domain_platform_universal(inputs)
	if (locale === "fr") return fr_ui_domain_platform_universal(inputs)
	if (locale === "it") return it_ui_domain_platform_universal(inputs)
	if (locale === "nl") return nl_ui_domain_platform_universal(inputs)
	if (locale === "pl") return pl_ui_domain_platform_universal(inputs)
	if (locale === "pt") return pt_ui_domain_platform_universal(inputs)
	if (locale === "ru") return ru_ui_domain_platform_universal(inputs)
	if (locale === "sv") return sv_ui_domain_platform_universal(inputs)
	if (locale === "tr") return tr_ui_domain_platform_universal(inputs)
	if (locale === "zh") return zh_ui_domain_platform_universal(inputs)
	if (locale === "ja") return ja_ui_domain_platform_universal(inputs)
	return en_ui_domain_platform_universal(inputs)
});
