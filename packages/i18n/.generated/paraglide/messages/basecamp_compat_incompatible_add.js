/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Compat_Incompatible_AddInputs */

const en_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mark ${i?.name} as incompatible`)
};

const es_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcar ${i?.name} como incompatible`)
};

const de_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} als inkompatibel markieren`)
};

const fr_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marquer ${i?.name} comme incompatible`)
};

const it_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segna ${i?.name} come incompatibile`)
};

const nl_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} als incompatibel markeren`)
};

const pl_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oznacz ${i?.name} jako niezgodny`)
};

const pt_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcar ${i?.name} como incompatível`)
};

const ru_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отметить ${i?.name} как несовместимый`)
};

const sv_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markera ${i?.name} som inkompatibel`)
};

const tr_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} modunu uyumsuz olarak işaretle`)
};

const zh_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将 ${i?.name} 标记为不兼容`)
};

const ja_basecamp_compat_incompatible_add = /** @type {(inputs: Basecamp_Compat_Incompatible_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}を互換性なしにする`)
};

/**
* | output |
* | --- |
* | "Mark {name} as incompatible" |
*
* @param {Basecamp_Compat_Incompatible_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_incompatible_add = /** @type {((inputs: Basecamp_Compat_Incompatible_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_incompatible_add(inputs)
	if (locale === "de") return de_basecamp_compat_incompatible_add(inputs)
	if (locale === "fr") return fr_basecamp_compat_incompatible_add(inputs)
	if (locale === "it") return it_basecamp_compat_incompatible_add(inputs)
	if (locale === "nl") return nl_basecamp_compat_incompatible_add(inputs)
	if (locale === "pl") return pl_basecamp_compat_incompatible_add(inputs)
	if (locale === "pt") return pt_basecamp_compat_incompatible_add(inputs)
	if (locale === "ru") return ru_basecamp_compat_incompatible_add(inputs)
	if (locale === "sv") return sv_basecamp_compat_incompatible_add(inputs)
	if (locale === "tr") return tr_basecamp_compat_incompatible_add(inputs)
	if (locale === "zh") return zh_basecamp_compat_incompatible_add(inputs)
	if (locale === "ja") return ja_basecamp_compat_incompatible_add(inputs)
	return en_basecamp_compat_incompatible_add(inputs)
});
