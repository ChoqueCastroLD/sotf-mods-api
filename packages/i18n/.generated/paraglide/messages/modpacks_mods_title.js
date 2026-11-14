/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Mods_TitleInputs */

const en_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar`)
};

const zh_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_modpacks_mods_title = /** @type {(inputs: Modpacks_Mods_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Modpacks_Mods_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_mods_title = /** @type {((inputs?: Modpacks_Mods_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Mods_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_mods_title(inputs)
	if (locale === "de") return de_modpacks_mods_title(inputs)
	if (locale === "fr") return fr_modpacks_mods_title(inputs)
	if (locale === "it") return it_modpacks_mods_title(inputs)
	if (locale === "nl") return nl_modpacks_mods_title(inputs)
	if (locale === "pl") return pl_modpacks_mods_title(inputs)
	if (locale === "pt") return pt_modpacks_mods_title(inputs)
	if (locale === "ru") return ru_modpacks_mods_title(inputs)
	if (locale === "sv") return sv_modpacks_mods_title(inputs)
	if (locale === "tr") return tr_modpacks_mods_title(inputs)
	if (locale === "zh") return zh_modpacks_mods_title(inputs)
	if (locale === "ja") return ja_modpacks_mods_title(inputs)
	return en_modpacks_mods_title(inputs)
});
