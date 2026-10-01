/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ ref: NonNullable<unknown> }} Explore_Compare_Not_FoundInputs */

const en_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`We could not find “${i?.ref}”.`)
};

const es_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No encontramos «${i?.ref}».`)
};

const de_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.ref}“ wurde nicht gefunden.`)
};

const fr_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Impossible de trouver « ${i?.ref} ».`)
};

const it_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Non abbiamo trovato “${i?.ref}”.`)
};

const nl_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`We konden “${i?.ref}” niet vinden.`)
};

const pl_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nie znaleźliśmy „${i?.ref}”.`)
};

const pt_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Não encontramos “${i?.ref}”.`)
};

const ru_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Не удалось найти «${i?.ref}».`)
};

const sv_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vi hittade inte ”${i?.ref}”.`)
};

const tr_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.ref}” bulunamadı.`)
};

const zh_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`找不到“${i?.ref}”。`)
};

const ja_explore_compare_not_found = /** @type {(inputs: Explore_Compare_Not_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.ref}」が見つかりませんでした。`)
};

/**
* | output |
* | --- |
* | "We could not find “{ref}”." |
*
* @param {Explore_Compare_Not_FoundInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_not_found = /** @type {((inputs: Explore_Compare_Not_FoundInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Not_FoundInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_not_found(inputs)
	if (locale === "de") return de_explore_compare_not_found(inputs)
	if (locale === "fr") return fr_explore_compare_not_found(inputs)
	if (locale === "it") return it_explore_compare_not_found(inputs)
	if (locale === "nl") return nl_explore_compare_not_found(inputs)
	if (locale === "pl") return pl_explore_compare_not_found(inputs)
	if (locale === "pt") return pt_explore_compare_not_found(inputs)
	if (locale === "ru") return ru_explore_compare_not_found(inputs)
	if (locale === "sv") return sv_explore_compare_not_found(inputs)
	if (locale === "tr") return tr_explore_compare_not_found(inputs)
	if (locale === "zh") return zh_explore_compare_not_found(inputs)
	if (locale === "ja") return ja_explore_compare_not_found(inputs)
	return en_explore_compare_not_found(inputs)
});
