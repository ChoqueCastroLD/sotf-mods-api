/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Quality_DescriptionInputs */

const en_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description of 300 characters or more`)
};

const es_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción de 300 caracteres o más`)
};

const de_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibung mit 300 Zeichen oder mehr`)
};

const fr_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description de 300 caractères ou plus`)
};

const it_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione di almeno 300 caratteri`)
};

const nl_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijving van 300 tekens of meer`)
};

const pl_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis ma co najmniej 300 znaków`)
};

const pt_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição com 300 caracteres ou mais`)
};

const ru_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание от 300 символов`)
};

const sv_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivning på 300 tecken eller mer`)
};

const tr_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`300 karakter veya daha uzun açıklama`)
};

const zh_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述达到 300 字以上`)
};

const ja_upload_quality_description = /** @type {(inputs: Upload_Quality_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`300文字以上の説明`)
};

/**
* | output |
* | --- |
* | "Description of 300 characters or more" |
*
* @param {Upload_Quality_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_quality_description = /** @type {((inputs?: Upload_Quality_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Quality_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_quality_description(inputs)
	if (locale === "de") return de_upload_quality_description(inputs)
	if (locale === "fr") return fr_upload_quality_description(inputs)
	if (locale === "it") return it_upload_quality_description(inputs)
	if (locale === "nl") return nl_upload_quality_description(inputs)
	if (locale === "pl") return pl_upload_quality_description(inputs)
	if (locale === "pt") return pt_upload_quality_description(inputs)
	if (locale === "ru") return ru_upload_quality_description(inputs)
	if (locale === "sv") return sv_upload_quality_description(inputs)
	if (locale === "tr") return tr_upload_quality_description(inputs)
	if (locale === "zh") return zh_upload_quality_description(inputs)
	if (locale === "ja") return ja_upload_quality_description(inputs)
	return en_upload_quality_description(inputs)
});
