/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Error_Short_DescriptionInputs */

const en_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a short description.`)
};

const es_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añade una descripción corta.`)
};

const de_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge eine Kurzbeschreibung hinzu.`)
};

const fr_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutez une courte description.`)
};

const it_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi una descrizione breve.`)
};

const nl_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voeg een korte beschrijving toe.`)
};

const pl_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj krótki opis.`)
};

const pt_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicione uma descrição curta.`)
};

const ru_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавьте краткое описание.`)
};

const sv_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till en kort beskrivning.`)
};

const tr_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısa bir açıklama ekle.`)
};

const zh_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请填写简短说明。`)
};

const ja_upload_error_short_description = /** @type {(inputs: Upload_Error_Short_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短い説明を入力してください。`)
};

/**
* | output |
* | --- |
* | "Add a short description." |
*
* @param {Upload_Error_Short_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_error_short_description = /** @type {((inputs?: Upload_Error_Short_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Error_Short_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_error_short_description(inputs)
	if (locale === "de") return de_upload_error_short_description(inputs)
	if (locale === "fr") return fr_upload_error_short_description(inputs)
	if (locale === "it") return it_upload_error_short_description(inputs)
	if (locale === "nl") return nl_upload_error_short_description(inputs)
	if (locale === "pl") return pl_upload_error_short_description(inputs)
	if (locale === "pt") return pt_upload_error_short_description(inputs)
	if (locale === "ru") return ru_upload_error_short_description(inputs)
	if (locale === "sv") return sv_upload_error_short_description(inputs)
	if (locale === "tr") return tr_upload_error_short_description(inputs)
	if (locale === "zh") return zh_upload_error_short_description(inputs)
	if (locale === "ja") return ja_upload_error_short_description(inputs)
	return en_upload_error_short_description(inputs)
});
