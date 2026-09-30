/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Versions_AllInputs */

const en_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All versions`)
};

const es_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las versiones`)
};

const de_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Versionen`)
};

const fr_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les versions`)
};

const it_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le versioni`)
};

const nl_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle versies`)
};

const pl_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie wersje`)
};

const pt_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as versões`)
};

const ru_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все версии`)
};

const sv_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla versioner`)
};

const tr_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm sürümler`)
};

const zh_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部版本`)
};

const ja_mod_versions_all = /** @type {(inputs: Mod_Versions_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのバージョン`)
};

/**
* | output |
* | --- |
* | "All versions" |
*
* @param {Mod_Versions_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_versions_all = /** @type {((inputs?: Mod_Versions_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Versions_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_versions_all(inputs)
	if (locale === "de") return de_mod_versions_all(inputs)
	if (locale === "fr") return fr_mod_versions_all(inputs)
	if (locale === "it") return it_mod_versions_all(inputs)
	if (locale === "nl") return nl_mod_versions_all(inputs)
	if (locale === "pl") return pl_mod_versions_all(inputs)
	if (locale === "pt") return pt_mod_versions_all(inputs)
	if (locale === "ru") return ru_mod_versions_all(inputs)
	if (locale === "sv") return sv_mod_versions_all(inputs)
	if (locale === "tr") return tr_mod_versions_all(inputs)
	if (locale === "zh") return zh_mod_versions_all(inputs)
	if (locale === "ja") return ja_mod_versions_all(inputs)
	return en_mod_versions_all(inputs)
});
