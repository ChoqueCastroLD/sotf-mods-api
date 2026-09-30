/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Blocked_TitleInputs */

const en_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This file can’t be uploaded.`)
};

const es_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este archivo no se puede subir.`)
};

const de_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Datei kann nicht hochgeladen werden.`)
};

const fr_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce fichier ne peut pas être envoyé.`)
};

const it_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo file non può essere caricato.`)
};

const nl_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit bestand kan niet worden geüpload.`)
};

const pl_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tego pliku nie można wysłać.`)
};

const pt_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este arquivo não pode ser enviado.`)
};

const ru_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот файл нельзя загрузить.`)
};

const sv_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här filen kan inte laddas upp.`)
};

const tr_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dosya yüklenemez.`)
};

const zh_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个文件无法上传。`)
};

const ja_upload_blocked_title = /** @type {(inputs: Upload_Blocked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このファイルはアップロードできません。`)
};

/**
* | output |
* | --- |
* | "This file can’t be uploaded." |
*
* @param {Upload_Blocked_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_blocked_title = /** @type {((inputs?: Upload_Blocked_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Blocked_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_blocked_title(inputs)
	if (locale === "de") return de_upload_blocked_title(inputs)
	if (locale === "fr") return fr_upload_blocked_title(inputs)
	if (locale === "it") return it_upload_blocked_title(inputs)
	if (locale === "nl") return nl_upload_blocked_title(inputs)
	if (locale === "pl") return pl_upload_blocked_title(inputs)
	if (locale === "pt") return pt_upload_blocked_title(inputs)
	if (locale === "ru") return ru_upload_blocked_title(inputs)
	if (locale === "sv") return sv_upload_blocked_title(inputs)
	if (locale === "tr") return tr_upload_blocked_title(inputs)
	if (locale === "zh") return zh_upload_blocked_title(inputs)
	if (locale === "ja") return ja_upload_blocked_title(inputs)
	return en_upload_blocked_title(inputs)
});
