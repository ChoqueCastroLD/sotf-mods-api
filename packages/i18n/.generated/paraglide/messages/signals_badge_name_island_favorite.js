/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Island_FavoriteInputs */

const en_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Island Favorite`)
};

const es_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Favorito de la isla`)
};

const de_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liebling der Insel`)
};

const fr_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coup de cœur de l’île`)
};

const it_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferita dell’isola`)
};

const nl_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Favoriet van het eiland`)
};

const pl_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ulubieniec wyspy`)
};

const pt_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Favorito da ilha`)
};

const ru_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любимец острова`)
};

const sv_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öns favorit`)
};

const tr_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adanın Favorisi`)
};

const zh_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小岛最爱`)
};

const ja_signals_badge_name_island_favorite = /** @type {(inputs: Signals_Badge_Name_Island_FavoriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島のお気に入り`)
};

/**
* | output |
* | --- |
* | "Island Favorite" |
*
* @param {Signals_Badge_Name_Island_FavoriteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_island_favorite = /** @type {((inputs?: Signals_Badge_Name_Island_FavoriteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Island_FavoriteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_island_favorite(inputs)
	if (locale === "de") return de_signals_badge_name_island_favorite(inputs)
	if (locale === "fr") return fr_signals_badge_name_island_favorite(inputs)
	if (locale === "it") return it_signals_badge_name_island_favorite(inputs)
	if (locale === "nl") return nl_signals_badge_name_island_favorite(inputs)
	if (locale === "pl") return pl_signals_badge_name_island_favorite(inputs)
	if (locale === "pt") return pt_signals_badge_name_island_favorite(inputs)
	if (locale === "ru") return ru_signals_badge_name_island_favorite(inputs)
	if (locale === "sv") return sv_signals_badge_name_island_favorite(inputs)
	if (locale === "tr") return tr_signals_badge_name_island_favorite(inputs)
	if (locale === "zh") return zh_signals_badge_name_island_favorite(inputs)
	if (locale === "ja") return ja_signals_badge_name_island_favorite(inputs)
	return en_signals_badge_name_island_favorite(inputs)
});
