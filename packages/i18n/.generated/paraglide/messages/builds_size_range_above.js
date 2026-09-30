/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown> }} Builds_Size_Range_AboveInputs */

const en_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} pieces or more`)
};

const es_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} piezas o más`)
};

const de_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} Teile oder mehr`)
};

const fr_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} pièces ou plus`)
};

const it_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} pezzi o più`)
};

const nl_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} onderdelen of meer`)
};

const pl_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} elementów lub więcej`)
};

const pt_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} peças ou mais`)
};

const ru_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} деталей и больше`)
};

const sv_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} delar eller fler`)
};

const tr_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} parça veya daha fazla`)
};

const zh_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} 个部件及以上`)
};

const ja_builds_size_range_above = /** @type {(inputs: Builds_Size_Range_AboveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} パーツ以上`)
};

/**
* | output |
* | --- |
* | "{min} pieces or more" |
*
* @param {Builds_Size_Range_AboveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_size_range_above = /** @type {((inputs: Builds_Size_Range_AboveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Size_Range_AboveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_size_range_above(inputs)
	if (locale === "de") return de_builds_size_range_above(inputs)
	if (locale === "fr") return fr_builds_size_range_above(inputs)
	if (locale === "it") return it_builds_size_range_above(inputs)
	if (locale === "nl") return nl_builds_size_range_above(inputs)
	if (locale === "pl") return pl_builds_size_range_above(inputs)
	if (locale === "pt") return pt_builds_size_range_above(inputs)
	if (locale === "ru") return ru_builds_size_range_above(inputs)
	if (locale === "sv") return sv_builds_size_range_above(inputs)
	if (locale === "tr") return tr_builds_size_range_above(inputs)
	if (locale === "zh") return zh_builds_size_range_above(inputs)
	if (locale === "ja") return ja_builds_size_range_above(inputs)
	return en_builds_size_range_above(inputs)
});
