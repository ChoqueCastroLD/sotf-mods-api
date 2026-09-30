/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Trending_AllInputs */

const en_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All mods`)
};

const es_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los mods`)
};

const de_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Mods`)
};

const fr_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les mods`)
};

const it_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le mod`)
};

const nl_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle mods`)
};

const pl_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie mody`)
};

const pt_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os mods`)
};

const ru_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все моды`)
};

const sv_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla moddar`)
};

const tr_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm modlar`)
};

const zh_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部模组`)
};

const ja_landing_trending_all = /** @type {(inputs: Landing_Trending_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのMOD`)
};

/**
* | output |
* | --- |
* | "All mods" |
*
* @param {Landing_Trending_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_trending_all = /** @type {((inputs?: Landing_Trending_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Trending_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_trending_all(inputs)
	if (locale === "de") return de_landing_trending_all(inputs)
	if (locale === "fr") return fr_landing_trending_all(inputs)
	if (locale === "it") return it_landing_trending_all(inputs)
	if (locale === "nl") return nl_landing_trending_all(inputs)
	if (locale === "pl") return pl_landing_trending_all(inputs)
	if (locale === "pt") return pt_landing_trending_all(inputs)
	if (locale === "ru") return ru_landing_trending_all(inputs)
	if (locale === "sv") return sv_landing_trending_all(inputs)
	if (locale === "tr") return tr_landing_trending_all(inputs)
	if (locale === "zh") return zh_landing_trending_all(inputs)
	if (locale === "ja") return ja_landing_trending_all(inputs)
	return en_landing_trending_all(inputs)
});
