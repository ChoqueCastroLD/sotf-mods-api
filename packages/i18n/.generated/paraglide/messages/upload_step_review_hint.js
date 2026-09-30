/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_Review_HintInputs */

const en_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checks and submit`)
};

const es_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprobaciones y envío`)
};

const de_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checks und Einreichen`)
};

const fr_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifications et envoi`)
};

const it_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlli e invio`)
};

const nl_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checks en indienen`)
};

const pl_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrole i wysyłka`)
};

const pt_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificações e envio`)
};

const ru_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверки и отправка`)
};

const sv_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontroller och inskick`)
};

const tr_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontroller ve gönderme`)
};

const zh_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查并提交`)
};

const ja_upload_step_review_hint = /** @type {(inputs: Upload_Step_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チェックと送信`)
};

/**
* | output |
* | --- |
* | "Checks and submit" |
*
* @param {Upload_Step_Review_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_review_hint = /** @type {((inputs?: Upload_Step_Review_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_Review_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_review_hint(inputs)
	if (locale === "de") return de_upload_step_review_hint(inputs)
	if (locale === "fr") return fr_upload_step_review_hint(inputs)
	if (locale === "it") return it_upload_step_review_hint(inputs)
	if (locale === "nl") return nl_upload_step_review_hint(inputs)
	if (locale === "pl") return pl_upload_step_review_hint(inputs)
	if (locale === "pt") return pt_upload_step_review_hint(inputs)
	if (locale === "ru") return ru_upload_step_review_hint(inputs)
	if (locale === "sv") return sv_upload_step_review_hint(inputs)
	if (locale === "tr") return tr_upload_step_review_hint(inputs)
	if (locale === "zh") return zh_upload_step_review_hint(inputs)
	if (locale === "ja") return ja_upload_step_review_hint(inputs)
	return en_upload_step_review_hint(inputs)
});
