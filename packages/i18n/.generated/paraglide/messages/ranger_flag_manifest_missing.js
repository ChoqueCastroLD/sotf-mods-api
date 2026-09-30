/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Manifest_MissingInputs */

const en_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json is missing`)
};

const es_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falta manifest.json`)
};

const de_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json fehlt`)
};

const fr_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json manquant`)
};

const it_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json mancante`)
};

const nl_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json ontbreekt`)
};

const pl_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak manifest.json`)
};

const pt_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falta o manifest.json`)
};

const ru_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет manifest.json`)
};

const sv_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json saknas`)
};

const tr_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json eksik`)
};

const zh_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缺少 manifest.json`)
};

const ja_ranger_flag_manifest_missing = /** @type {(inputs: Ranger_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json がありません`)
};

/**
* | output |
* | --- |
* | "manifest.json is missing" |
*
* @param {Ranger_Flag_Manifest_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_manifest_missing = /** @type {((inputs?: Ranger_Flag_Manifest_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Manifest_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_manifest_missing(inputs)
	if (locale === "de") return de_ranger_flag_manifest_missing(inputs)
	if (locale === "fr") return fr_ranger_flag_manifest_missing(inputs)
	if (locale === "it") return it_ranger_flag_manifest_missing(inputs)
	if (locale === "nl") return nl_ranger_flag_manifest_missing(inputs)
	if (locale === "pl") return pl_ranger_flag_manifest_missing(inputs)
	if (locale === "pt") return pt_ranger_flag_manifest_missing(inputs)
	if (locale === "ru") return ru_ranger_flag_manifest_missing(inputs)
	if (locale === "sv") return sv_ranger_flag_manifest_missing(inputs)
	if (locale === "tr") return tr_ranger_flag_manifest_missing(inputs)
	if (locale === "zh") return zh_ranger_flag_manifest_missing(inputs)
	if (locale === "ja") return ja_ranger_flag_manifest_missing(inputs)
	return en_ranger_flag_manifest_missing(inputs)
});
