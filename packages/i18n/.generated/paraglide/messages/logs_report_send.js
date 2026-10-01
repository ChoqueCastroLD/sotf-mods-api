/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Report_SendInputs */

const en_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send report`)
};

const es_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar denuncia`)
};

const de_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldung senden`)
};

const fr_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer le signalement`)
};

const it_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia segnalazione`)
};

const nl_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melding versturen`)
};

const pl_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij zgłoszenie`)
};

const pt_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar denúncia`)
};

const ru_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить жалобу`)
};

const sv_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka anmälan`)
};

const tr_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimi gönder`)
};

const zh_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交举报`)
};

const ja_logs_report_send = /** @type {(inputs: Logs_Report_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告を送信`)
};

/**
* | output |
* | --- |
* | "Send report" |
*
* @param {Logs_Report_SendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_report_send = /** @type {((inputs?: Logs_Report_SendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Report_SendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_report_send(inputs)
	if (locale === "de") return de_logs_report_send(inputs)
	if (locale === "fr") return fr_logs_report_send(inputs)
	if (locale === "it") return it_logs_report_send(inputs)
	if (locale === "nl") return nl_logs_report_send(inputs)
	if (locale === "pl") return pl_logs_report_send(inputs)
	if (locale === "pt") return pt_logs_report_send(inputs)
	if (locale === "ru") return ru_logs_report_send(inputs)
	if (locale === "sv") return sv_logs_report_send(inputs)
	if (locale === "tr") return tr_logs_report_send(inputs)
	if (locale === "zh") return zh_logs_report_send(inputs)
	if (locale === "ja") return ja_logs_report_send(inputs)
	return en_logs_report_send(inputs)
});
