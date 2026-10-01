/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Report_FailedInputs */

const en_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not send the report.`)
};

const es_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo enviar la denuncia.`)
};

const de_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Meldung konnte nicht gesendet werden.`)
};

const fr_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’envoyer le signalement.`)
};

const it_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile inviare la segnalazione.`)
};

const nl_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De melding kon niet worden verstuurd.`)
};

const pl_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wysłać zgłoszenia.`)
};

const pt_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível enviar a denúncia.`)
};

const ru_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отправить жалобу.`)
};

const sv_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmälan kunde inte skickas.`)
};

const tr_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirim gönderilemedi.`)
};

const zh_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法提交举报。`)
};

const ja_logs_report_failed = /** @type {(inputs: Logs_Report_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告を送信できませんでした。`)
};

/**
* | output |
* | --- |
* | "Could not send the report." |
*
* @param {Logs_Report_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_report_failed = /** @type {((inputs?: Logs_Report_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Report_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_report_failed(inputs)
	if (locale === "de") return de_logs_report_failed(inputs)
	if (locale === "fr") return fr_logs_report_failed(inputs)
	if (locale === "it") return it_logs_report_failed(inputs)
	if (locale === "nl") return nl_logs_report_failed(inputs)
	if (locale === "pl") return pl_logs_report_failed(inputs)
	if (locale === "pt") return pt_logs_report_failed(inputs)
	if (locale === "ru") return ru_logs_report_failed(inputs)
	if (locale === "sv") return sv_logs_report_failed(inputs)
	if (locale === "tr") return tr_logs_report_failed(inputs)
	if (locale === "zh") return zh_logs_report_failed(inputs)
	if (locale === "ja") return ja_logs_report_failed(inputs)
	return en_logs_report_failed(inputs)
});
