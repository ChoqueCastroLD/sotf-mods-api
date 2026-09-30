/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Group_TrendingInputs */

const en_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trending this week`)
};

const es_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tendencia esta semana`)
};

const de_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Woche im Trend`)
};

const fr_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tendances de la semaine`)
};

const it_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Di tendenza questa settimana`)
};

const nl_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populair deze week`)
};

const pl_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popularne w tym tygodniu`)
};

const pt_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em alta nesta semana`)
};

const ru_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Популярное за неделю`)
};

const sv_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populärt den här veckan`)
};

const tr_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu hafta popüler`)
};

const zh_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周热门`)
};

const ja_cmdk_group_trending = /** @type {(inputs: Cmdk_Group_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週のトレンド`)
};

/**
* | output |
* | --- |
* | "Trending this week" |
*
* @param {Cmdk_Group_TrendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_group_trending = /** @type {((inputs?: Cmdk_Group_TrendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Group_TrendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_group_trending(inputs)
	if (locale === "de") return de_cmdk_group_trending(inputs)
	if (locale === "fr") return fr_cmdk_group_trending(inputs)
	if (locale === "it") return it_cmdk_group_trending(inputs)
	if (locale === "nl") return nl_cmdk_group_trending(inputs)
	if (locale === "pl") return pl_cmdk_group_trending(inputs)
	if (locale === "pt") return pt_cmdk_group_trending(inputs)
	if (locale === "ru") return ru_cmdk_group_trending(inputs)
	if (locale === "sv") return sv_cmdk_group_trending(inputs)
	if (locale === "tr") return tr_cmdk_group_trending(inputs)
	if (locale === "zh") return zh_cmdk_group_trending(inputs)
	if (locale === "ja") return ja_cmdk_group_trending(inputs)
	return en_cmdk_group_trending(inputs)
});
