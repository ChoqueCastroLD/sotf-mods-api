/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Explore_Active_QueryInputs */

const en_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}”`)
};

const es_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.query}»`)
};

const de_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.query}“`)
};

const fr_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`« ${i?.query} »`)
};

const it_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.query}»`)
};

const nl_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`‘${i?.query}’`)
};

const pl_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.query}”`)
};

const pt_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}”`)
};

const ru_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.query}»`)
};

const sv_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`”${i?.query}”`)
};

const tr_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}”`)
};

const zh_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}”`)
};

const ja_explore_active_query = /** @type {(inputs: Explore_Active_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」`)
};

/**
* | output |
* | --- |
* | "“{query}”" |
*
* @param {Explore_Active_QueryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_active_query = /** @type {((inputs: Explore_Active_QueryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Active_QueryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_active_query(inputs)
	if (locale === "de") return de_explore_active_query(inputs)
	if (locale === "fr") return fr_explore_active_query(inputs)
	if (locale === "it") return it_explore_active_query(inputs)
	if (locale === "nl") return nl_explore_active_query(inputs)
	if (locale === "pl") return pl_explore_active_query(inputs)
	if (locale === "pt") return pt_explore_active_query(inputs)
	if (locale === "ru") return ru_explore_active_query(inputs)
	if (locale === "sv") return sv_explore_active_query(inputs)
	if (locale === "tr") return tr_explore_active_query(inputs)
	if (locale === "zh") return zh_explore_active_query(inputs)
	if (locale === "ja") return ja_explore_active_query(inputs)
	return en_explore_active_query(inputs)
});
