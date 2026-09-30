/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Success_Queued_TitleInputs */

const en_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sent to the Ranger Station`)
};

const es_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviado al puesto de guardabosques`)
};

const de_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An die Rangerstation gesendet`)
};

const fr_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyé au poste des rangers`)
};

const it_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inviato alla stazione dei ranger`)
};

const nl_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar de rangerpost gestuurd`)
};

const pl_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysłano na posterunek strażników`)
};

const pt_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviado ao posto dos guardas`)
};

const ru_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправлено на пост рейнджеров`)
};

const sv_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skickat till rangerstationen`)
};

const tr_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucu İstasyonu’na gönderildi`)
};

const zh_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已提交到护林站`)
};

const ja_upload_success_queued_title = /** @type {(inputs: Upload_Success_Queued_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーステーションに送信しました`)
};

/**
* | output |
* | --- |
* | "Sent to the Ranger Station" |
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
