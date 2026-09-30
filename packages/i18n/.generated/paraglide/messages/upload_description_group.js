/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Description_GroupInputs */

const en_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const es_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción`)
};

const de_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibung`)
};

const fr_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const it_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione`)
};

const nl_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijving`)
};

const pl_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis`)
};

const pt_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição`)
};

const ru_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание`)
};

const sv_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivning`)
};

const tr_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama`)
};

const zh_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述`)
};

const ja_upload_description_group = /** @type {(inputs: Upload_Description_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明`)
};

/**
* | output |
* | --- |
* | "Description" |
*
* @param {Upload_Description_GroupInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_description_group = /** @type {((inputs?: Upload_Description_GroupInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Description_GroupInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_description_group(inputs)
	if (locale === "de") return de_upload_description_group(inputs)
	if (locale === "fr") return fr_upload_description_group(inputs)
	if (locale === "it") return it_upload_description_group(inputs)
	if (locale === "nl") return nl_upload_description_group(inputs)
	if (locale === "pl") return pl_upload_description_group(inputs)
	if (locale === "pt") return pt_upload_description_group(inputs)
	if (locale === "ru") return ru_upload_description_group(inputs)
	if (locale === "sv") return sv_upload_description_group(inputs)
	if (locale === "tr") return tr_upload_description_group(inputs)
	if (locale === "zh") return zh_upload_description_group(inputs)
	if (locale === "ja") return ja_upload_description_group(inputs)
	return en_upload_description_group(inputs)
});
