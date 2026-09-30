/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_DescriptionInputs */

const en_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const es_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción`)
};

const de_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibung`)
};

const fr_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const it_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione`)
};

const nl_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijving`)
};

const pl_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis`)
};

const pt_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição`)
};

const ru_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание`)
};

const sv_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivning`)
};

const tr_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama`)
};

const zh_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`说明`)
};

const ja_jams_editor_description = /** @type {(inputs: Jams_Editor_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明`)
};

/**
* | output |
* | --- |
* | "Description" |
*
* @param {Jams_Editor_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_description = /** @type {((inputs?: Jams_Editor_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_description(inputs)
	if (locale === "de") return de_jams_editor_description(inputs)
	if (locale === "fr") return fr_jams_editor_description(inputs)
	if (locale === "it") return it_jams_editor_description(inputs)
	if (locale === "nl") return nl_jams_editor_description(inputs)
	if (locale === "pl") return pl_jams_editor_description(inputs)
	if (locale === "pt") return pt_jams_editor_description(inputs)
	if (locale === "ru") return ru_jams_editor_description(inputs)
	if (locale === "sv") return sv_jams_editor_description(inputs)
	if (locale === "tr") return tr_jams_editor_description(inputs)
	if (locale === "zh") return zh_jams_editor_description(inputs)
	if (locale === "ja") return ja_jams_editor_description(inputs)
	return en_jams_editor_description(inputs)
});
