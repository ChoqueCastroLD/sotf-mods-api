/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Rejected_TitleInputs */

const en_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file was refused.`)
};

const es_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo fue rechazado.`)
};

const de_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei wurde abgelehnt.`)
};

const fr_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier a été refusé.`)
};

const it_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file è stato rifiutato.`)
};

const nl_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand is geweigerd.`)
};

const pl_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik został odrzucony.`)
};

const pt_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo foi recusado.`)
};

const ru_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл отклонён.`)
};

const sv_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen avvisades.`)
};

const tr_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya reddedildi.`)
};

const zh_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件被拒绝。`)
};

const ja_upload_rejected_title = /** @type {(inputs: Upload_Rejected_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルが却下されました。`)
};

/**
* | output |
* | --- |
* | "The file was refused." |
*
* @param {Upload_Rejected_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_rejected_title = /** @type {((inputs?: Upload_Rejected_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Rejected_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_rejected_title(inputs)
	if (locale === "de") return de_upload_rejected_title(inputs)
	if (locale === "fr") return fr_upload_rejected_title(inputs)
	if (locale === "it") return it_upload_rejected_title(inputs)
	if (locale === "nl") return nl_upload_rejected_title(inputs)
	if (locale === "pl") return pl_upload_rejected_title(inputs)
	if (locale === "pt") return pt_upload_rejected_title(inputs)
	if (locale === "ru") return ru_upload_rejected_title(inputs)
	if (locale === "sv") return sv_upload_rejected_title(inputs)
	if (locale === "tr") return tr_upload_rejected_title(inputs)
	if (locale === "zh") return zh_upload_rejected_title(inputs)
	if (locale === "ja") return ja_upload_rejected_title(inputs)
	return en_upload_rejected_title(inputs)
});
