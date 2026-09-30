/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_File_Title_BuildInputs */

const en_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your BuildShare blueprint`)
};

const es_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu plano de BuildShare`)
};

const de_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein BuildShare-Bauplan`)
};

const fr_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre plan BuildShare`)
};

const it_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo progetto BuildShare`)
};

const nl_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je BuildShare-bouwtekening`)
};

const pl_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój plan BuildShare`)
};

const pt_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua planta do BuildShare`)
};

const ru_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш чертёж BuildShare`)
};

const sv_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din BuildShare-ritning`)
};

const tr_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare planın`)
};

const zh_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的 BuildShare 蓝图`)
};

const ja_upload_file_title_build = /** @type {(inputs: Upload_File_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShareの設計図`)
};

/**
* | output |
* | --- |
* | "Your BuildShare blueprint" |
*
* @param {Upload_File_Title_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_file_title_build = /** @type {((inputs?: Upload_File_Title_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_File_Title_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_file_title_build(inputs)
	if (locale === "de") return de_upload_file_title_build(inputs)
	if (locale === "fr") return fr_upload_file_title_build(inputs)
	if (locale === "it") return it_upload_file_title_build(inputs)
	if (locale === "nl") return nl_upload_file_title_build(inputs)
	if (locale === "pl") return pl_upload_file_title_build(inputs)
	if (locale === "pt") return pt_upload_file_title_build(inputs)
	if (locale === "ru") return ru_upload_file_title_build(inputs)
	if (locale === "sv") return sv_upload_file_title_build(inputs)
	if (locale === "tr") return tr_upload_file_title_build(inputs)
	if (locale === "zh") return zh_upload_file_title_build(inputs)
	if (locale === "ja") return ja_upload_file_title_build(inputs)
	return en_upload_file_title_build(inputs)
});
