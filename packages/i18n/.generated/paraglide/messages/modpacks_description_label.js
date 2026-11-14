/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Description_LabelInputs */

const en_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const es_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción`)
};

const de_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibung`)
};

const fr_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const it_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione`)
};

const nl_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijving`)
};

const pl_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis`)
};

const pt_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição`)
};

const ru_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание`)
};

const sv_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivning`)
};

const tr_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama`)
};

const zh_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简介`)
};

const ja_modpacks_description_label = /** @type {(inputs: Modpacks_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明`)
};

/**
* | output |
* | --- |
* | "Description" |
*
* @param {Modpacks_Description_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_description_label = /** @type {((inputs?: Modpacks_Description_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Description_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_description_label(inputs)
	if (locale === "de") return de_modpacks_description_label(inputs)
	if (locale === "fr") return fr_modpacks_description_label(inputs)
	if (locale === "it") return it_modpacks_description_label(inputs)
	if (locale === "nl") return nl_modpacks_description_label(inputs)
	if (locale === "pl") return pl_modpacks_description_label(inputs)
	if (locale === "pt") return pt_modpacks_description_label(inputs)
	if (locale === "ru") return ru_modpacks_description_label(inputs)
	if (locale === "sv") return sv_modpacks_description_label(inputs)
	if (locale === "tr") return tr_modpacks_description_label(inputs)
	if (locale === "zh") return zh_modpacks_description_label(inputs)
	if (locale === "ja") return ja_modpacks_description_label(inputs)
	return en_modpacks_description_label(inputs)
});
