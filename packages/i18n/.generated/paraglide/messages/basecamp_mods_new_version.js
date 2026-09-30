/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_New_VersionInputs */

const en_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New version`)
};

const es_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nueva versión`)
};

const de_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Version`)
};

const fr_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle version`)
};

const it_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova versione`)
};

const nl_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe versie`)
};

const pl_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowa wersja`)
};

const pt_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova versão`)
};

const ru_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новая версия`)
};

const sv_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny version`)
};

const tr_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni sürüm`)
};

const zh_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新版本`)
};

const ja_basecamp_mods_new_version = /** @type {(inputs: Basecamp_Mods_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいバージョン`)
};

/**
* | output |
* | --- |
* | "New version" |
*
* @param {Basecamp_Mods_New_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_new_version = /** @type {((inputs?: Basecamp_Mods_New_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_New_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_new_version(inputs)
	if (locale === "de") return de_basecamp_mods_new_version(inputs)
	if (locale === "fr") return fr_basecamp_mods_new_version(inputs)
	if (locale === "it") return it_basecamp_mods_new_version(inputs)
	if (locale === "nl") return nl_basecamp_mods_new_version(inputs)
	if (locale === "pl") return pl_basecamp_mods_new_version(inputs)
	if (locale === "pt") return pt_basecamp_mods_new_version(inputs)
	if (locale === "ru") return ru_basecamp_mods_new_version(inputs)
	if (locale === "sv") return sv_basecamp_mods_new_version(inputs)
	if (locale === "tr") return tr_basecamp_mods_new_version(inputs)
	if (locale === "zh") return zh_basecamp_mods_new_version(inputs)
	if (locale === "ja") return ja_basecamp_mods_new_version(inputs)
	return en_basecamp_mods_new_version(inputs)
});
