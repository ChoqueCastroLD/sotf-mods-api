/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Summary_CompatInputs */

const en_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibility`)
};

const es_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidad`)
};

const de_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilität`)
};

const fr_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilité`)
};

const it_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilità`)
};

const nl_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibiliteit`)
};

const pl_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgodność`)
};

const pt_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidade`)
};

const ru_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Совместимость`)
};

const sv_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilitet`)
};

const tr_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumluluk`)
};

const zh_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`兼容性`)
};

const ja_kits_summary_compat = /** @type {(inputs: Kits_Summary_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性`)
};

/**
* | output |
* | --- |
* | "Compatibility" |
*
* @param {Kits_Summary_CompatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_summary_compat = /** @type {((inputs?: Kits_Summary_CompatInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Summary_CompatInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_summary_compat(inputs)
	if (locale === "de") return de_kits_summary_compat(inputs)
	if (locale === "fr") return fr_kits_summary_compat(inputs)
	if (locale === "it") return it_kits_summary_compat(inputs)
	if (locale === "nl") return nl_kits_summary_compat(inputs)
	if (locale === "pl") return pl_kits_summary_compat(inputs)
	if (locale === "pt") return pt_kits_summary_compat(inputs)
	if (locale === "ru") return ru_kits_summary_compat(inputs)
	if (locale === "sv") return sv_kits_summary_compat(inputs)
	if (locale === "tr") return tr_kits_summary_compat(inputs)
	if (locale === "zh") return zh_kits_summary_compat(inputs)
	if (locale === "ja") return ja_kits_summary_compat(inputs)
	return en_kits_summary_compat(inputs)
});
