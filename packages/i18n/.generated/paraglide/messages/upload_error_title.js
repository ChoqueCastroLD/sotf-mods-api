/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Error_TitleInputs */

const en_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The upload stopped.`)
};

const es_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La subida se detuvo.`)
};

const de_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Upload wurde unterbrochen.`)
};

const fr_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’envoi s’est arrêté.`)
};

const it_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il caricamento si è interrotto.`)
};

const nl_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De upload is gestopt.`)
};

const pl_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysyłanie zostało przerwane.`)
};

const pt_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O envio parou.`)
};

const ru_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка прервалась.`)
};

const sv_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppladdningen avbröts.`)
};

const tr_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleme durdu.`)
};

const zh_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传已中断。`)
};

const ja_upload_error_title = /** @type {(inputs: Upload_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロードが中断しました。`)
};

/**
* | output |
* | --- |
* | "The upload stopped." |
*
* @param {Upload_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_error_title = /** @type {((inputs?: Upload_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_error_title(inputs)
	if (locale === "de") return de_upload_error_title(inputs)
	if (locale === "fr") return fr_upload_error_title(inputs)
	if (locale === "it") return it_upload_error_title(inputs)
	if (locale === "nl") return nl_upload_error_title(inputs)
	if (locale === "pl") return pl_upload_error_title(inputs)
	if (locale === "pt") return pt_upload_error_title(inputs)
	if (locale === "ru") return ru_upload_error_title(inputs)
	if (locale === "sv") return sv_upload_error_title(inputs)
	if (locale === "tr") return tr_upload_error_title(inputs)
	if (locale === "zh") return zh_upload_error_title(inputs)
	if (locale === "ja") return ja_upload_error_title(inputs)
	return en_upload_error_title(inputs)
});
