/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drafts_ReadyInputs */

const en_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready to submit`)
};

const es_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listo para enviar`)
};

const de_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereit zum Einreichen`)
};

const fr_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prêt à envoyer`)
};

const it_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pronta per l’invio`)
};

const nl_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klaar om in te dienen`)
};

const pl_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gotowy do wysłania`)
};

const pt_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pronto para enviar`)
};

const ru_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готов к отправке`)
};

const sv_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klart att skicka in`)
};

const tr_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Göndermeye hazır`)
};

const zh_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可以提交`)
};

const ja_upload_drafts_ready = /** @type {(inputs: Upload_Drafts_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`送信できます`)
};

/**
* | output |
* | --- |
* | "Ready to submit" |
*
* @param {Upload_Drafts_ReadyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_ready = /** @type {((inputs?: Upload_Drafts_ReadyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_ReadyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_ready(inputs)
	if (locale === "de") return de_upload_drafts_ready(inputs)
	if (locale === "fr") return fr_upload_drafts_ready(inputs)
	if (locale === "it") return it_upload_drafts_ready(inputs)
	if (locale === "nl") return nl_upload_drafts_ready(inputs)
	if (locale === "pl") return pl_upload_drafts_ready(inputs)
	if (locale === "pt") return pt_upload_drafts_ready(inputs)
	if (locale === "ru") return ru_upload_drafts_ready(inputs)
	if (locale === "sv") return sv_upload_drafts_ready(inputs)
	if (locale === "tr") return tr_upload_drafts_ready(inputs)
	if (locale === "zh") return zh_upload_drafts_ready(inputs)
	if (locale === "ja") return ja_upload_drafts_ready(inputs)
	return en_upload_drafts_ready(inputs)
});
