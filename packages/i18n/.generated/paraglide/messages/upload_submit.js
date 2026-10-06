/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_SubmitInputs */

const en_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send for review`)
};

const es_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar a revisión`)
};

const de_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zur Prüfung senden`)
};

const fr_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer pour examen`)
};

const it_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia per la revisione`)
};

const nl_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ter beoordeling insturen`)
};

const pl_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij do przeglądu`)
};

const pt_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar para revisão`)
};

const ru_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить на проверку`)
};

const sv_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka för granskning`)
};

const tr_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeye gönder`)
};

const zh_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交审核`)
};

const ja_upload_submit = /** @type {(inputs: Upload_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`審査に送信`)
};

/**
* | output |
* | --- |
* | "Send for review" |
*
* @param {Upload_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_submit = /** @type {((inputs?: Upload_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_submit(inputs)
	if (locale === "de") return de_upload_submit(inputs)
	if (locale === "fr") return fr_upload_submit(inputs)
	if (locale === "it") return it_upload_submit(inputs)
	if (locale === "nl") return nl_upload_submit(inputs)
	if (locale === "pl") return pl_upload_submit(inputs)
	if (locale === "pt") return pt_upload_submit(inputs)
	if (locale === "ru") return ru_upload_submit(inputs)
	if (locale === "sv") return sv_upload_submit(inputs)
	if (locale === "tr") return tr_upload_submit(inputs)
	if (locale === "zh") return zh_upload_submit(inputs)
	if (locale === "ja") return ja_upload_submit(inputs)
	return en_upload_submit(inputs)
});
