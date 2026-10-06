/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Success_Queued_TitleInputs */

const en_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sent for review`)
};

const es_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviado a revisión`)
};

const de_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zur Prüfung gesendet`)
};

const fr_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyé pour examen`)
};

const it_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inviato per la revisione`)
};

const nl_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ter beoordeling ingestuurd`)
};

const pl_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysłano do przeglądu`)
};

const pt_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviado para revisão`)
};

const ru_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправлено на проверку`)
};

const sv_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skickat för granskning`)
};

const tr_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeye gönderildi`)
};

const zh_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已提交审核`)
};

const ja_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`審査に送信しました`)
};

/**
* | output |
* | --- |
* | "Sent for review" |
*
* @param {Upload_Success_Queued_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_success_queued_title = /** @type {((inputs?: Upload_Success_Queued_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_Queued_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_success_queued_title(inputs)
	if (locale === "de") return de_upload_success_queued_title(inputs)
	if (locale === "fr") return fr_upload_success_queued_title(inputs)
	if (locale === "it") return it_upload_success_queued_title(inputs)
	if (locale === "nl") return nl_upload_success_queued_title(inputs)
	if (locale === "pl") return pl_upload_success_queued_title(inputs)
	if (locale === "pt") return pt_upload_success_queued_title(inputs)
	if (locale === "ru") return ru_upload_success_queued_title(inputs)
	if (locale === "sv") return sv_upload_success_queued_title(inputs)
	if (locale === "tr") return tr_upload_success_queued_title(inputs)
	if (locale === "zh") return zh_upload_success_queued_title(inputs)
	if (locale === "ja") return ja_upload_success_queued_title(inputs)
	return en_upload_success_queued_title(inputs)
});
