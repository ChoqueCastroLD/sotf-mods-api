/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Manifest_BeforeInputs */

const en_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Before`)
};

const es_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antes`)
};

const de_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorher`)
};

const fr_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avant`)
};

const it_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima`)
};

const nl_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor`)
};

const pl_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przed`)
};

const pt_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antes`)
};

const ru_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`До`)
};

const sv_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Före`)
};

const tr_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce`)
};

const zh_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`之前`)
};

const ja_ranger_manifest_before = /** @type {(inputs: Ranger_Manifest_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更前`)
};

/**
* | output |
* | --- |
* | "Before" |
*
* @param {Ranger_Manifest_BeforeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_manifest_before = /** @type {((inputs?: Ranger_Manifest_BeforeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Manifest_BeforeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_manifest_before(inputs)
	if (locale === "de") return de_ranger_manifest_before(inputs)
	if (locale === "fr") return fr_ranger_manifest_before(inputs)
	if (locale === "it") return it_ranger_manifest_before(inputs)
	if (locale === "nl") return nl_ranger_manifest_before(inputs)
	if (locale === "pl") return pl_ranger_manifest_before(inputs)
	if (locale === "pt") return pt_ranger_manifest_before(inputs)
	if (locale === "ru") return ru_ranger_manifest_before(inputs)
	if (locale === "sv") return sv_ranger_manifest_before(inputs)
	if (locale === "tr") return tr_ranger_manifest_before(inputs)
	if (locale === "zh") return zh_ranger_manifest_before(inputs)
	if (locale === "ja") return ja_ranger_manifest_before(inputs)
	return en_ranger_manifest_before(inputs)
});
