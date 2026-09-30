/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ handle: NonNullable<unknown> }} Explore_Active_AuthorInputs */

const en_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`By @${i?.handle}`)
};

const es_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De @${i?.handle}`)
};

const de_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Von @${i?.handle}`)
};

const fr_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Par @${i?.handle}`)
};

const it_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Di @${i?.handle}`)
};

const nl_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Van @${i?.handle}`)
};

const pl_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Od @${i?.handle}`)
};

const pt_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De @${i?.handle}`)
};

const ru_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Автор @${i?.handle}`)
};

const sv_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Av @${i?.handle}`)
};

const tr_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`@${i?.handle} tarafından`)
};

const zh_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者 @${i?.handle}`)
};

const ja_explore_active_author = /** @type {(inputs: Explore_Active_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`@${i?.handle} の作品`)
};

/**
* | output |
* | --- |
* | "By @{handle}" |
*
* @param {Explore_Active_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_active_author = /** @type {((inputs: Explore_Active_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Active_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_active_author(inputs)
	if (locale === "de") return de_explore_active_author(inputs)
	if (locale === "fr") return fr_explore_active_author(inputs)
	if (locale === "it") return it_explore_active_author(inputs)
	if (locale === "nl") return nl_explore_active_author(inputs)
	if (locale === "pl") return pl_explore_active_author(inputs)
	if (locale === "pt") return pt_explore_active_author(inputs)
	if (locale === "ru") return ru_explore_active_author(inputs)
	if (locale === "sv") return sv_explore_active_author(inputs)
	if (locale === "tr") return tr_explore_active_author(inputs)
	if (locale === "zh") return zh_explore_active_author(inputs)
	if (locale === "ja") return ja_explore_active_author(inputs)
	return en_explore_active_author(inputs)
});
