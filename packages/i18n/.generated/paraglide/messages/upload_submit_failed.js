/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Submit_FailedInputs */

const en_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It couldn’t be submitted.`)
};

const es_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo enviar.`)
};

const de_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Einreichen hat nicht geklappt.`)
};

const fr_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’envoi n’a pas abouti.`)
};

const it_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invio non riuscito.`)
};

const nl_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indienen is niet gelukt.`)
};

const pl_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wysłać.`)
};

const pt_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível enviar.`)
};

const ru_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отправить.`)
};

const sv_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att skicka in.`)
};

const tr_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gönderilemedi.`)
};

const zh_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交失败。`)
};

const ja_upload_submit_failed = /** @type {(inputs: Upload_Submit_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`送信できませんでした。`)
};

/**
* | output |
* | --- |
* | "It couldn’t be submitted." |
*
* @param {Upload_Submit_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_submit_failed = /** @type {((inputs?: Upload_Submit_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Submit_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_submit_failed(inputs)
	if (locale === "de") return de_upload_submit_failed(inputs)
	if (locale === "fr") return fr_upload_submit_failed(inputs)
	if (locale === "it") return it_upload_submit_failed(inputs)
	if (locale === "nl") return nl_upload_submit_failed(inputs)
	if (locale === "pl") return pl_upload_submit_failed(inputs)
	if (locale === "pt") return pt_upload_submit_failed(inputs)
	if (locale === "ru") return ru_upload_submit_failed(inputs)
	if (locale === "sv") return sv_upload_submit_failed(inputs)
	if (locale === "tr") return tr_upload_submit_failed(inputs)
	if (locale === "zh") return zh_upload_submit_failed(inputs)
	if (locale === "ja") return ja_upload_submit_failed(inputs)
	return en_upload_submit_failed(inputs)
});
