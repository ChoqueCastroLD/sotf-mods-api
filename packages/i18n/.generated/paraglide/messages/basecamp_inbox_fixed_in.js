/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Fixed_InInputs */

const en_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixed in`)
};

const es_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arreglado en`)
};

const de_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behoben in`)
};

const fr_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigé dans`)
};

const it_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corretto in`)
};

const nl_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verholpen in`)
};

const pl_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naprawiono w`)
};

const pt_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigido em`)
};

const ru_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исправлено в`)
};

const sv_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärdat i`)
};

const tr_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzeltildiği sürüm`)
};

const zh_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修复于`)
};

const ja_basecamp_inbox_fixed_in = /** @type {(inputs: Basecamp_Inbox_Fixed_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修正したバージョン`)
};

/**
* | output |
* | --- |
* | "Fixed in" |
*
* @param {Basecamp_Inbox_Fixed_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_fixed_in = /** @type {((inputs?: Basecamp_Inbox_Fixed_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Fixed_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_fixed_in(inputs)
	if (locale === "de") return de_basecamp_inbox_fixed_in(inputs)
	if (locale === "fr") return fr_basecamp_inbox_fixed_in(inputs)
	if (locale === "it") return it_basecamp_inbox_fixed_in(inputs)
	if (locale === "nl") return nl_basecamp_inbox_fixed_in(inputs)
	if (locale === "pl") return pl_basecamp_inbox_fixed_in(inputs)
	if (locale === "pt") return pt_basecamp_inbox_fixed_in(inputs)
	if (locale === "ru") return ru_basecamp_inbox_fixed_in(inputs)
	if (locale === "sv") return sv_basecamp_inbox_fixed_in(inputs)
	if (locale === "tr") return tr_basecamp_inbox_fixed_in(inputs)
	if (locale === "zh") return zh_basecamp_inbox_fixed_in(inputs)
	if (locale === "ja") return ja_basecamp_inbox_fixed_in(inputs)
	return en_basecamp_inbox_fixed_in(inputs)
});
