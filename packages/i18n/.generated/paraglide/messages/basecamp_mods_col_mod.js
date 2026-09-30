/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Col_ModInputs */

const en_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const es_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const de_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const fr_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const it_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const pl_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const pt_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const ru_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод`)
};

const sv_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const tr_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const zh_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_basecamp_mods_col_mod = /** @type {(inputs: Basecamp_Mods_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mod" |
*
* @param {Basecamp_Mods_Col_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_col_mod = /** @type {((inputs?: Basecamp_Mods_Col_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Col_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_col_mod(inputs)
	if (locale === "de") return de_basecamp_mods_col_mod(inputs)
	if (locale === "fr") return fr_basecamp_mods_col_mod(inputs)
	if (locale === "it") return it_basecamp_mods_col_mod(inputs)
	if (locale === "nl") return nl_basecamp_mods_col_mod(inputs)
	if (locale === "pl") return pl_basecamp_mods_col_mod(inputs)
	if (locale === "pt") return pt_basecamp_mods_col_mod(inputs)
	if (locale === "ru") return ru_basecamp_mods_col_mod(inputs)
	if (locale === "sv") return sv_basecamp_mods_col_mod(inputs)
	if (locale === "tr") return tr_basecamp_mods_col_mod(inputs)
	if (locale === "zh") return zh_basecamp_mods_col_mod(inputs)
	if (locale === "ja") return ja_basecamp_mods_col_mod(inputs)
	return en_basecamp_mods_col_mod(inputs)
});
