/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ rank: NonNullable<unknown> }} Jams_RankInputs */

const en_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`#${i?.rank}`)
};

const es_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`#${i?.rank}`)
};

const de_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`#${i?.rank}`)
};

const fr_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`n°${i?.rank}`)
};

const it_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`#${i?.rank}`)
};

const nl_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`#${i?.rank}`)
};

const pl_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`#${i?.rank}`)
};

const pt_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`#${i?.rank}`)
};

const ru_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`№${i?.rank}`)
};

const sv_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`#${i?.rank}`)
};

const tr_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`#${i?.rank}`)
};

const zh_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第${i?.rank}名`)
};

const ja_jams_rank = /** @type {(inputs: Jams_RankInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank}位`)
};

/**
* | output |
* | --- |
* | "#{rank}" |
*
* @param {Jams_RankInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_rank = /** @type {((inputs: Jams_RankInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_RankInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_rank(inputs)
	if (locale === "de") return de_jams_rank(inputs)
	if (locale === "fr") return fr_jams_rank(inputs)
	if (locale === "it") return it_jams_rank(inputs)
	if (locale === "nl") return nl_jams_rank(inputs)
	if (locale === "pl") return pl_jams_rank(inputs)
	if (locale === "pt") return pt_jams_rank(inputs)
	if (locale === "ru") return ru_jams_rank(inputs)
	if (locale === "sv") return sv_jams_rank(inputs)
	if (locale === "tr") return tr_jams_rank(inputs)
	if (locale === "zh") return zh_jams_rank(inputs)
	if (locale === "ja") return ja_jams_rank(inputs)
	return en_jams_rank(inputs)
});
