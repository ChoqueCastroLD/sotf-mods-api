/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Map_Kind_TrendingInputs */

const en_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trending`)
};

const es_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En tendencia`)
};

const de_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Im Trend`)
};

const fr_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tendance`)
};

const it_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In tendenza`)
};

const nl_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trending`)
};

const pl_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na czasie`)
};

const pt_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em alta`)
};

const ru_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В тренде`)
};

const sv_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trendar`)
};

const tr_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükselişte`)
};

const zh_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热门`)
};

const ja_landing_map_kind_trending = /** @type {(inputs: Landing_Map_Kind_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トレンド`)
};

/**
* | output |
* | --- |
* | "Trending" |
*
* @param {Landing_Map_Kind_TrendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_map_kind_trending = /** @type {((inputs?: Landing_Map_Kind_TrendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Map_Kind_TrendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_map_kind_trending(inputs)
	if (locale === "de") return de_landing_map_kind_trending(inputs)
	if (locale === "fr") return fr_landing_map_kind_trending(inputs)
	if (locale === "it") return it_landing_map_kind_trending(inputs)
	if (locale === "nl") return nl_landing_map_kind_trending(inputs)
	if (locale === "pl") return pl_landing_map_kind_trending(inputs)
	if (locale === "pt") return pt_landing_map_kind_trending(inputs)
	if (locale === "ru") return ru_landing_map_kind_trending(inputs)
	if (locale === "sv") return sv_landing_map_kind_trending(inputs)
	if (locale === "tr") return tr_landing_map_kind_trending(inputs)
	if (locale === "zh") return zh_landing_map_kind_trending(inputs)
	if (locale === "ja") return ja_landing_map_kind_trending(inputs)
	return en_landing_map_kind_trending(inputs)
});
