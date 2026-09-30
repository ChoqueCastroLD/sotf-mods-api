/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Pin_LabelInputs */

const en_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const es_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión`)
};

const de_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const fr_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const it_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione`)
};

const nl_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie`)
};

const pl_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja`)
};

const pt_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão`)
};

const ru_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия`)
};

const sv_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const tr_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_kits_pin_label = /** @type {(inputs: Kits_Pin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Version" |
*
* @param {Kits_Pin_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_pin_label = /** @type {((inputs?: Kits_Pin_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Pin_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_pin_label(inputs)
	if (locale === "de") return de_kits_pin_label(inputs)
	if (locale === "fr") return fr_kits_pin_label(inputs)
	if (locale === "it") return it_kits_pin_label(inputs)
	if (locale === "nl") return nl_kits_pin_label(inputs)
	if (locale === "pl") return pl_kits_pin_label(inputs)
	if (locale === "pt") return pt_kits_pin_label(inputs)
	if (locale === "ru") return ru_kits_pin_label(inputs)
	if (locale === "sv") return sv_kits_pin_label(inputs)
	if (locale === "tr") return tr_kits_pin_label(inputs)
	if (locale === "zh") return zh_kits_pin_label(inputs)
	if (locale === "ja") return ja_kits_pin_label(inputs)
	return en_kits_pin_label(inputs)
});
