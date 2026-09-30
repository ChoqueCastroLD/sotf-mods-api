/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Fact_Manifest_IdInputs */

const en_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ID`)
};

const es_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID del mod`)
};

const de_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-ID`)
};

const fr_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID du mod`)
};

const it_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID della mod`)
};

const nl_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-ID`)
};

const pl_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID moda`)
};

const pt_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID do mod`)
};

const ru_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID мода`)
};

const sv_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modd-ID`)
};

const tr_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod kimliği`)
};

const zh_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组 ID`)
};

const ja_cmdk_fact_manifest_id = /** @type {(inputs: Cmdk_Fact_Manifest_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD ID`)
};

/**
* | output |
* | --- |
* | "Mod ID" |
*
* @param {Cmdk_Fact_Manifest_IdInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_fact_manifest_id = /** @type {((inputs?: Cmdk_Fact_Manifest_IdInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Fact_Manifest_IdInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_fact_manifest_id(inputs)
	if (locale === "de") return de_cmdk_fact_manifest_id(inputs)
	if (locale === "fr") return fr_cmdk_fact_manifest_id(inputs)
	if (locale === "it") return it_cmdk_fact_manifest_id(inputs)
	if (locale === "nl") return nl_cmdk_fact_manifest_id(inputs)
	if (locale === "pl") return pl_cmdk_fact_manifest_id(inputs)
	if (locale === "pt") return pt_cmdk_fact_manifest_id(inputs)
	if (locale === "ru") return ru_cmdk_fact_manifest_id(inputs)
	if (locale === "sv") return sv_cmdk_fact_manifest_id(inputs)
	if (locale === "tr") return tr_cmdk_fact_manifest_id(inputs)
	if (locale === "zh") return zh_cmdk_fact_manifest_id(inputs)
	if (locale === "ja") return ja_cmdk_fact_manifest_id(inputs)
	return en_cmdk_fact_manifest_id(inputs)
});
