/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Trending_TitleInputs */

const en_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trending this week`)
};

const es_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tendencias de la semana`)
};

const de_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angesagt diese Woche`)
};

const fr_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tendances de la semaine`)
};

const it_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Di tendenza questa settimana`)
};

const nl_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populair deze week`)
};

const pl_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popularne w tym tygodniu`)
};

const pt_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em alta nesta semana`)
};

const ru_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Популярное за неделю`)
};

const sv_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populärt den här veckan`)
};

const tr_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu haftanın popülerleri`)
};

const zh_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周热门`)
};

const ja_landing_trending_title = /** @type {(inputs: Landing_Trending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週の人気`)
};

/**
* | output |
* | --- |
* | "Trending this week" |
*
* @param {Landing_Trending_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_trending_title = /** @type {((inputs?: Landing_Trending_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Trending_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_trending_title(inputs)
	if (locale === "de") return de_landing_trending_title(inputs)
	if (locale === "fr") return fr_landing_trending_title(inputs)
	if (locale === "it") return it_landing_trending_title(inputs)
	if (locale === "nl") return nl_landing_trending_title(inputs)
	if (locale === "pl") return pl_landing_trending_title(inputs)
	if (locale === "pt") return pt_landing_trending_title(inputs)
	if (locale === "ru") return ru_landing_trending_title(inputs)
	if (locale === "sv") return sv_landing_trending_title(inputs)
	if (locale === "tr") return tr_landing_trending_title(inputs)
	if (locale === "zh") return zh_landing_trending_title(inputs)
	if (locale === "ja") return ja_landing_trending_title(inputs)
	return en_landing_trending_title(inputs)
});
