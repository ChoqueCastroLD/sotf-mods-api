/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Empty_Category_TitleInputs */

const en_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This part of the map is still blank`)
};

const es_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta parte del mapa sigue en blanco`)
};

const de_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Teil der Karte ist noch leer`)
};

const fr_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette partie de la carte est encore vierge`)
};

const it_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa parte della mappa è ancora vuota`)
};

const nl_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit deel van de kaart is nog leeg`)
};

const pl_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta część mapy jest jeszcze pusta`)
};

const pt_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta parte do mapa ainda está em branco`)
};

const ru_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта часть карты пока пуста`)
};

const sv_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här delen av kartan är fortfarande tom`)
};

const tr_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haritanın bu kısmı hâlâ boş`)
};

const zh_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地图的这一块还是空白`)
};

const ja_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地図のこの部分はまだ空白です`)
};

/**
* | output |
* | --- |
* | "This part of the map is still blank" |
*
* @param {Explore_Empty_Category_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_empty_category_title = /** @type {((inputs?: Explore_Empty_Category_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Empty_Category_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_empty_category_title(inputs)
	if (locale === "de") return de_explore_empty_category_title(inputs)
	if (locale === "fr") return fr_explore_empty_category_title(inputs)
	if (locale === "it") return it_explore_empty_category_title(inputs)
	if (locale === "nl") return nl_explore_empty_category_title(inputs)
	if (locale === "pl") return pl_explore_empty_category_title(inputs)
	if (locale === "pt") return pt_explore_empty_category_title(inputs)
	if (locale === "ru") return ru_explore_empty_category_title(inputs)
	if (locale === "sv") return sv_explore_empty_category_title(inputs)
	if (locale === "tr") return tr_explore_empty_category_title(inputs)
	if (locale === "zh") return zh_explore_empty_category_title(inputs)
	if (locale === "ja") return ja_explore_empty_category_title(inputs)
	return en_explore_empty_category_title(inputs)
});
