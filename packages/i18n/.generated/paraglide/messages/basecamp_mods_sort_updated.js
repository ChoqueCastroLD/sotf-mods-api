/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Sort_UpdatedInputs */

const en_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last release`)
};

const es_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Último lanzamiento`)
};

const de_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzte Veröffentlichung`)
};

const fr_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière sortie`)
};

const it_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultima uscita`)
};

const nl_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laatste uitgave`)
};

const pl_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie wydanie`)
};

const pt_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Último lançamento`)
};

const ru_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последнему выпуску`)
};

const sv_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste släpp`)
};

const tr_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son yayın`)
};

const zh_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近发布`)
};

const ja_basecamp_mods_sort_updated = /** @type {(inputs: Basecamp_Mods_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新リリース`)
};

/**
* | output |
* | --- |
* | "Last release" |
*
* @param {Basecamp_Mods_Sort_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_sort_updated = /** @type {((inputs?: Basecamp_Mods_Sort_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Sort_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_sort_updated(inputs)
	if (locale === "de") return de_basecamp_mods_sort_updated(inputs)
	if (locale === "fr") return fr_basecamp_mods_sort_updated(inputs)
	if (locale === "it") return it_basecamp_mods_sort_updated(inputs)
	if (locale === "nl") return nl_basecamp_mods_sort_updated(inputs)
	if (locale === "pl") return pl_basecamp_mods_sort_updated(inputs)
	if (locale === "pt") return pt_basecamp_mods_sort_updated(inputs)
	if (locale === "ru") return ru_basecamp_mods_sort_updated(inputs)
	if (locale === "sv") return sv_basecamp_mods_sort_updated(inputs)
	if (locale === "tr") return tr_basecamp_mods_sort_updated(inputs)
	if (locale === "zh") return zh_basecamp_mods_sort_updated(inputs)
	if (locale === "ja") return ja_basecamp_mods_sort_updated(inputs)
	return en_basecamp_mods_sort_updated(inputs)
});
