/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Col_UpdatedInputs */

const en_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last release`)
};

const es_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última versión`)
};

const de_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzte Version`)
};

const fr_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière version`)
};

const it_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultima versione`)
};

const nl_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laatste release`)
};

const pl_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie wydanie`)
};

const pt_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Último lançamento`)
};

const ru_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последний релиз`)
};

const sv_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste utgåva`)
};

const tr_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son sürüm`)
};

const zh_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近发布`)
};

const ja_basecamp_mods_col_updated = /** @type {(inputs: Basecamp_Mods_Col_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最終リリース`)
};

/**
* | output |
* | --- |
* | "Last release" |
*
* @param {Basecamp_Mods_Col_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_col_updated = /** @type {((inputs?: Basecamp_Mods_Col_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Col_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_col_updated(inputs)
	if (locale === "de") return de_basecamp_mods_col_updated(inputs)
	if (locale === "fr") return fr_basecamp_mods_col_updated(inputs)
	if (locale === "it") return it_basecamp_mods_col_updated(inputs)
	if (locale === "nl") return nl_basecamp_mods_col_updated(inputs)
	if (locale === "pl") return pl_basecamp_mods_col_updated(inputs)
	if (locale === "pt") return pt_basecamp_mods_col_updated(inputs)
	if (locale === "ru") return ru_basecamp_mods_col_updated(inputs)
	if (locale === "sv") return sv_basecamp_mods_col_updated(inputs)
	if (locale === "tr") return tr_basecamp_mods_col_updated(inputs)
	if (locale === "zh") return zh_basecamp_mods_col_updated(inputs)
	if (locale === "ja") return ja_basecamp_mods_col_updated(inputs)
	return en_basecamp_mods_col_updated(inputs)
});
