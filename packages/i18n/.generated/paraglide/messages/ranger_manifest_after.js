/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Manifest_AfterInputs */

const en_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`After`)
};

const es_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Después`)
};

const de_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nachher`)
};

const fr_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Après`)
};

const it_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dopo`)
};

const nl_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na`)
};

const pl_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Po`)
};

const pt_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Depois`)
};

const ru_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`После`)
};

const sv_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Efter`)
};

const tr_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonra`)
};

const zh_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`之后`)
};

const ja_ranger_manifest_after = /** @type {(inputs: Ranger_Manifest_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更後`)
};

/**
* | output |
* | --- |
* | "After" |
*
* @param {Ranger_Manifest_AfterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_manifest_after = /** @type {((inputs?: Ranger_Manifest_AfterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Manifest_AfterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_manifest_after(inputs)
	if (locale === "de") return de_ranger_manifest_after(inputs)
	if (locale === "fr") return fr_ranger_manifest_after(inputs)
	if (locale === "it") return it_ranger_manifest_after(inputs)
	if (locale === "nl") return nl_ranger_manifest_after(inputs)
	if (locale === "pl") return pl_ranger_manifest_after(inputs)
	if (locale === "pt") return pt_ranger_manifest_after(inputs)
	if (locale === "ru") return ru_ranger_manifest_after(inputs)
	if (locale === "sv") return sv_ranger_manifest_after(inputs)
	if (locale === "tr") return tr_ranger_manifest_after(inputs)
	if (locale === "zh") return zh_ranger_manifest_after(inputs)
	if (locale === "ja") return ja_ranger_manifest_after(inputs)
	return en_ranger_manifest_after(inputs)
});
