/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Sort_FollowsInputs */

const en_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most followed`)
};

const es_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más seguidos`)
};

const de_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meiste Follower`)
};

const fr_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus suivis`)
};

const it_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più seguite`)
};

const nl_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest gevolgd`)
};

const pl_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej obserwowane`)
};

const pt_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais seguidos`)
};

const ru_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше подписчиков`)
};

const sv_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest följda`)
};

const tr_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok takip edilen`)
};

const zh_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注最多`)
};

const ja_explore_sort_follows = /** @type {(inputs: Explore_Sort_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー数順`)
};

/**
* | output |
* | --- |
* | "Most followed" |
*
* @param {Explore_Sort_FollowsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_follows = /** @type {((inputs?: Explore_Sort_FollowsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_FollowsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_follows(inputs)
	if (locale === "de") return de_explore_sort_follows(inputs)
	if (locale === "fr") return fr_explore_sort_follows(inputs)
	if (locale === "it") return it_explore_sort_follows(inputs)
	if (locale === "nl") return nl_explore_sort_follows(inputs)
	if (locale === "pl") return pl_explore_sort_follows(inputs)
	if (locale === "pt") return pt_explore_sort_follows(inputs)
	if (locale === "ru") return ru_explore_sort_follows(inputs)
	if (locale === "sv") return sv_explore_sort_follows(inputs)
	if (locale === "tr") return tr_explore_sort_follows(inputs)
	if (locale === "zh") return zh_explore_sort_follows(inputs)
	if (locale === "ja") return ja_explore_sort_follows(inputs)
	return en_explore_sort_follows(inputs)
});
