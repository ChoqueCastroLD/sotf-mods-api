/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Reviews_Empty_DescriptionInputs */

const en_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hasn’t reviewed any mod yet.`)
};

const es_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} todavía no ha reseñado ningún mod.`)
};

const de_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hat noch keinen Mod bewertet.`)
};

const fr_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} n’a encore évalué aucun mod.`)
};

const it_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} non ha ancora recensito nessuna mod.`)
};

const nl_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} heeft nog geen mod beoordeeld.`)
};

const pl_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} nie ocenił(a) jeszcze żadnego moda.`)
};

const pt_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ainda não avaliou nenhum mod.`)
};

const ru_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ещё не оценил(а) ни одного мода.`)
};

const sv_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} har inte recenserat någon modd än.`)
};

const tr_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} henüz hiçbir modu incelemedi.`)
};

const zh_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 还没有评价过任何模组。`)
};

const ja_profile_reviews_empty_description = /** @type {(inputs: Profile_Reviews_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} はまだ MOD をレビューしていません。`)
};

/**
* | output |
* | --- |
* | "{name} hasn’t reviewed any mod yet." |
*
* @param {Profile_Reviews_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_reviews_empty_description = /** @type {((inputs: Profile_Reviews_Empty_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Reviews_Empty_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_reviews_empty_description(inputs)
	if (locale === "de") return de_profile_reviews_empty_description(inputs)
	if (locale === "fr") return fr_profile_reviews_empty_description(inputs)
	if (locale === "it") return it_profile_reviews_empty_description(inputs)
	if (locale === "nl") return nl_profile_reviews_empty_description(inputs)
	if (locale === "pl") return pl_profile_reviews_empty_description(inputs)
	if (locale === "pt") return pt_profile_reviews_empty_description(inputs)
	if (locale === "ru") return ru_profile_reviews_empty_description(inputs)
	if (locale === "sv") return sv_profile_reviews_empty_description(inputs)
	if (locale === "tr") return tr_profile_reviews_empty_description(inputs)
	if (locale === "zh") return zh_profile_reviews_empty_description(inputs)
	if (locale === "ja") return ja_profile_reviews_empty_description(inputs)
	return en_profile_reviews_empty_description(inputs)
});
