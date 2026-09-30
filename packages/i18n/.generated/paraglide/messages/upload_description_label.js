/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Description_LabelInputs */

const en_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description (Markdown)`)
};

const es_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción (Markdown)`)
};

const de_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibung (Markdown)`)
};

const fr_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description (Markdown)`)
};

const it_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione (Markdown)`)
};

const nl_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijving (Markdown)`)
};

const pl_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis (Markdown)`)
};

const pt_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição (Markdown)`)
};

const ru_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание (Markdown)`)
};

const sv_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivning (Markdown)`)
};

const tr_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama (Markdown)`)
};

const zh_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述（Markdown）`)
};

const ja_upload_description_label = /** @type {(inputs: Upload_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明（Markdown）`)
};

/**
* | output |
* | --- |
* | "Description (Markdown)" |
*
* @param {Upload_Description_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_description_label = /** @type {((inputs?: Upload_Description_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Description_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_description_label(inputs)
	if (locale === "de") return de_upload_description_label(inputs)
	if (locale === "fr") return fr_upload_description_label(inputs)
	if (locale === "it") return it_upload_description_label(inputs)
	if (locale === "nl") return nl_upload_description_label(inputs)
	if (locale === "pl") return pl_upload_description_label(inputs)
	if (locale === "pt") return pt_upload_description_label(inputs)
	if (locale === "ru") return ru_upload_description_label(inputs)
	if (locale === "sv") return sv_upload_description_label(inputs)
	if (locale === "tr") return tr_upload_description_label(inputs)
	if (locale === "zh") return zh_upload_description_label(inputs)
	if (locale === "ja") return ja_upload_description_label(inputs)
	return en_upload_description_label(inputs)
});
