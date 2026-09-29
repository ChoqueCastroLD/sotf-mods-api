/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Not_Found_PopularInputs */

const en_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popular mods`)
};

const es_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods populares`)
};

const de_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beliebte Mods`)
};

const fr_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods populaires`)
};

const it_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod popolari`)
};

const nl_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populaire mods`)
};

const pl_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popularne mody`)
};

const pt_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods populares`)
};

const ru_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Популярные моды`)
};

const sv_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populära moddar`)
};

const tr_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popüler modlar`)
};

const zh_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热门模组`)
};

const ja_errors_not_found_popular = /** @type {(inputs: Errors_Not_Found_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人気の MOD`)
};

/**
* | output |
* | --- |
* | "Popular mods" |
*
* @param {Errors_Not_Found_PopularInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_not_found_popular = /** @type {((inputs?: Errors_Not_Found_PopularInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Not_Found_PopularInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_not_found_popular(inputs)
	if (locale === "de") return de_errors_not_found_popular(inputs)
	if (locale === "fr") return fr_errors_not_found_popular(inputs)
	if (locale === "it") return it_errors_not_found_popular(inputs)
	if (locale === "nl") return nl_errors_not_found_popular(inputs)
	if (locale === "pl") return pl_errors_not_found_popular(inputs)
	if (locale === "pt") return pt_errors_not_found_popular(inputs)
	if (locale === "ru") return ru_errors_not_found_popular(inputs)
	if (locale === "sv") return sv_errors_not_found_popular(inputs)
	if (locale === "tr") return tr_errors_not_found_popular(inputs)
	if (locale === "zh") return zh_errors_not_found_popular(inputs)
	if (locale === "ja") return ja_errors_not_found_popular(inputs)
	return en_errors_not_found_popular(inputs)
});
