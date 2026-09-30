/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Short_Description_LabelInputs */

const en_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Short description`)
};

const es_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción corta`)
};

const de_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurzbeschreibung`)
};

const fr_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description courte`)
};

const it_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione breve`)
};

const nl_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korte beschrijving`)
};

const pl_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krótki opis`)
};

const pt_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição curta`)
};

const ru_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Краткое описание`)
};

const sv_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kort beskrivning`)
};

const tr_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısa açıklama`)
};

const zh_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简短描述`)
};

const ja_upload_short_description_label = /** @type {(inputs: Upload_Short_Description_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短い説明`)
};

/**
* | output |
* | --- |
* | "Short description" |
*
* @param {Upload_Short_Description_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_short_description_label = /** @type {((inputs?: Upload_Short_Description_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Short_Description_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_short_description_label(inputs)
	if (locale === "de") return de_upload_short_description_label(inputs)
	if (locale === "fr") return fr_upload_short_description_label(inputs)
	if (locale === "it") return it_upload_short_description_label(inputs)
	if (locale === "nl") return nl_upload_short_description_label(inputs)
	if (locale === "pl") return pl_upload_short_description_label(inputs)
	if (locale === "pt") return pt_upload_short_description_label(inputs)
	if (locale === "ru") return ru_upload_short_description_label(inputs)
	if (locale === "sv") return sv_upload_short_description_label(inputs)
	if (locale === "tr") return tr_upload_short_description_label(inputs)
	if (locale === "zh") return zh_upload_short_description_label(inputs)
	if (locale === "ja") return ja_upload_short_description_label(inputs)
	return en_upload_short_description_label(inputs)
});
