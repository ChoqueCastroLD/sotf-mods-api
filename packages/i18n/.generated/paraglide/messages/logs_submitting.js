/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_SubmittingInputs */

const en_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploading…`)
};

const es_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subiendo…`)
};

const de_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird hochgeladen…`)
};

const fr_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoi…`)
};

const it_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento…`)
};

const nl_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploaden…`)
};

const pl_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysyłanie…`)
};

const pt_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A enviar…`)
};

const ru_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка…`)
};

const sv_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar upp…`)
};

const tr_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleniyor…`)
};

const zh_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在上传…`)
};

const ja_logs_submitting = /** @type {(inputs: Logs_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロード中…`)
};

/**
* | output |
* | --- |
* | "Uploading…" |
*
* @param {Logs_SubmittingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_submitting = /** @type {((inputs?: Logs_SubmittingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_SubmittingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_submitting(inputs)
	if (locale === "de") return de_logs_submitting(inputs)
	if (locale === "fr") return fr_logs_submitting(inputs)
	if (locale === "it") return it_logs_submitting(inputs)
	if (locale === "nl") return nl_logs_submitting(inputs)
	if (locale === "pl") return pl_logs_submitting(inputs)
	if (locale === "pt") return pt_logs_submitting(inputs)
	if (locale === "ru") return ru_logs_submitting(inputs)
	if (locale === "sv") return sv_logs_submitting(inputs)
	if (locale === "tr") return tr_logs_submitting(inputs)
	if (locale === "zh") return zh_logs_submitting(inputs)
	if (locale === "ja") return ja_logs_submitting(inputs)
	return en_logs_submitting(inputs)
});
