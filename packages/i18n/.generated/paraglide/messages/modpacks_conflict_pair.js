/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ a: NonNullable<unknown>, b: NonNullable<unknown> }} Modpacks_Conflict_PairInputs */

const en_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a} is not compatible with ${i?.b}`)
};

const es_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a} no es compatible con ${i?.b}`)
};

const de_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a} ist nicht kompatibel mit ${i?.b}`)
};

const fr_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a} n’est pas compatible avec ${i?.b}`)
};

const it_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a} non è compatibile con ${i?.b}`)
};

const nl_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a} is niet compatibel met ${i?.b}`)
};

const pl_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a} nie jest zgodny z ${i?.b}`)
};

const pt_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a} não é compatível com ${i?.b}`)
};

const ru_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a} несовместим с ${i?.b}`)
};

const sv_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a} är inte kompatibel med ${i?.b}`)
};

const tr_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a}, ${i?.b} ile uyumlu değil`)
};

const zh_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a} 与 ${i?.b} 不兼容`)
};

const ja_modpacks_conflict_pair = /** @type {(inputs: Modpacks_Conflict_PairInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.a} は ${i?.b} と互換性がありません`)
};

/**
* | output |
* | --- |
* | "{a} is not compatible with {b}" |
*
* @param {Modpacks_Conflict_PairInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_conflict_pair = /** @type {((inputs: Modpacks_Conflict_PairInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Conflict_PairInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_conflict_pair(inputs)
	if (locale === "de") return de_modpacks_conflict_pair(inputs)
	if (locale === "fr") return fr_modpacks_conflict_pair(inputs)
	if (locale === "it") return it_modpacks_conflict_pair(inputs)
	if (locale === "nl") return nl_modpacks_conflict_pair(inputs)
	if (locale === "pl") return pl_modpacks_conflict_pair(inputs)
	if (locale === "pt") return pt_modpacks_conflict_pair(inputs)
	if (locale === "ru") return ru_modpacks_conflict_pair(inputs)
	if (locale === "sv") return sv_modpacks_conflict_pair(inputs)
	if (locale === "tr") return tr_modpacks_conflict_pair(inputs)
	if (locale === "zh") return zh_modpacks_conflict_pair(inputs)
	if (locale === "ja") return ja_modpacks_conflict_pair(inputs)
	return en_modpacks_conflict_pair(inputs)
});
