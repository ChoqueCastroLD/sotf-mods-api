/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Compat_UntestedInputs */

const en_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Untested`)
};

const es_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin probar`)
};

const de_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ungetestet`)
};

const fr_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non testé`)
};

const it_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non testato`)
};

const nl_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet getest`)
};

const pl_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieprzetestowany`)
};

const pt_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não testado`)
};

const ru_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не проверено`)
};

const sv_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otestad`)
};

const tr_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test edilmedi`)
};

const zh_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未测试`)
};

const ja_cmdk_compat_untested = /** @type {(inputs: Cmdk_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未検証`)
};

/**
* | output |
* | --- |
* | "Untested" |
*
* @param {Cmdk_Compat_UntestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_compat_untested = /** @type {((inputs?: Cmdk_Compat_UntestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Compat_UntestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_compat_untested(inputs)
	if (locale === "de") return de_cmdk_compat_untested(inputs)
	if (locale === "fr") return fr_cmdk_compat_untested(inputs)
	if (locale === "it") return it_cmdk_compat_untested(inputs)
	if (locale === "nl") return nl_cmdk_compat_untested(inputs)
	if (locale === "pl") return pl_cmdk_compat_untested(inputs)
	if (locale === "pt") return pt_cmdk_compat_untested(inputs)
	if (locale === "ru") return ru_cmdk_compat_untested(inputs)
	if (locale === "sv") return sv_cmdk_compat_untested(inputs)
	if (locale === "tr") return tr_cmdk_compat_untested(inputs)
	if (locale === "zh") return zh_cmdk_compat_untested(inputs)
	if (locale === "ja") return ja_cmdk_compat_untested(inputs)
	return en_cmdk_compat_untested(inputs)
});
