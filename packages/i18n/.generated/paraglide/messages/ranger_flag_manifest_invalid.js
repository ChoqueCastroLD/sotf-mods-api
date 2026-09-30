/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Manifest_InvalidInputs */

const en_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json is not valid`)
};

const es_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json no es válido`)
};

const de_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json ist ungültig`)
};

const fr_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json invalide`)
};

const it_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json non valido`)
};

const nl_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json is ongeldig`)
};

const pl_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json jest nieprawidłowy`)
};

const pt_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json inválido`)
};

const ru_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json некорректен`)
};

const sv_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json är ogiltig`)
};

const tr_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json geçersiz`)
};

const zh_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json 无效`)
};

const ja_ranger_flag_manifest_invalid = /** @type {(inputs: Ranger_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json が無効です`)
};

/**
* | output |
* | --- |
* | "manifest.json is not valid" |
*
* @param {Ranger_Flag_Manifest_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_manifest_invalid = /** @type {((inputs?: Ranger_Flag_Manifest_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Manifest_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_manifest_invalid(inputs)
	if (locale === "de") return de_ranger_flag_manifest_invalid(inputs)
	if (locale === "fr") return fr_ranger_flag_manifest_invalid(inputs)
	if (locale === "it") return it_ranger_flag_manifest_invalid(inputs)
	if (locale === "nl") return nl_ranger_flag_manifest_invalid(inputs)
	if (locale === "pl") return pl_ranger_flag_manifest_invalid(inputs)
	if (locale === "pt") return pt_ranger_flag_manifest_invalid(inputs)
	if (locale === "ru") return ru_ranger_flag_manifest_invalid(inputs)
	if (locale === "sv") return sv_ranger_flag_manifest_invalid(inputs)
	if (locale === "tr") return tr_ranger_flag_manifest_invalid(inputs)
	if (locale === "zh") return zh_ranger_flag_manifest_invalid(inputs)
	if (locale === "ja") return ja_ranger_flag_manifest_invalid(inputs)
	return en_ranger_flag_manifest_invalid(inputs)
});
