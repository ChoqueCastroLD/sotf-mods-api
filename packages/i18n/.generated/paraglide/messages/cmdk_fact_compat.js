/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Fact_CompatInputs */

const en_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibility`)
};

const es_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidad`)
};

const de_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilität`)
};

const fr_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilité`)
};

const it_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilità`)
};

const nl_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibiliteit`)
};

const pl_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatybilność`)
};

const pt_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidade`)
};

const ru_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Совместимость`)
};

const sv_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilitet`)
};

const tr_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumluluk`)
};

const zh_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`兼容性`)
};

const ja_cmdk_fact_compat = /** @type {(inputs: Cmdk_Fact_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性`)
};

/**
* | output |
* | --- |
* | "Compatibility" |
*
* @param {Cmdk_Fact_CompatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_fact_compat = /** @type {((inputs?: Cmdk_Fact_CompatInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Fact_CompatInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_fact_compat(inputs)
	if (locale === "de") return de_cmdk_fact_compat(inputs)
	if (locale === "fr") return fr_cmdk_fact_compat(inputs)
	if (locale === "it") return it_cmdk_fact_compat(inputs)
	if (locale === "nl") return nl_cmdk_fact_compat(inputs)
	if (locale === "pl") return pl_cmdk_fact_compat(inputs)
	if (locale === "pt") return pt_cmdk_fact_compat(inputs)
	if (locale === "ru") return ru_cmdk_fact_compat(inputs)
	if (locale === "sv") return sv_cmdk_fact_compat(inputs)
	if (locale === "tr") return tr_cmdk_fact_compat(inputs)
	if (locale === "zh") return zh_cmdk_fact_compat(inputs)
	if (locale === "ja") return ja_cmdk_fact_compat(inputs)
	return en_cmdk_fact_compat(inputs)
});
