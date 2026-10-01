/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Report_SentInputs */

const en_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thanks, we will review it.`)
};

const es_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracias, lo revisaremos.`)
};

const de_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danke, wir prüfen das.`)
};

const fr_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merci, nous allons l’examiner.`)
};

const it_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grazie, lo esamineremo.`)
};

const nl_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bedankt, we bekijken het.`)
};

const pl_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dziękujemy, sprawdzimy to.`)
};

const pt_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrigado, vamos analisar.`)
};

const ru_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спасибо, мы проверим.`)
};

const sv_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tack, vi tittar på den.`)
};

const tr_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teşekkürler, inceleyeceğiz.`)
};

const zh_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`谢谢，我们会查看。`)
};

const ja_logs_report_sent = /** @type {(inputs: Logs_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ありがとうございます。確認します。`)
};

/**
* | output |
* | --- |
* | "Thanks, we will review it." |
*
* @param {Logs_Report_SentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_report_sent = /** @type {((inputs?: Logs_Report_SentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Report_SentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_report_sent(inputs)
	if (locale === "de") return de_logs_report_sent(inputs)
	if (locale === "fr") return fr_logs_report_sent(inputs)
	if (locale === "it") return it_logs_report_sent(inputs)
	if (locale === "nl") return nl_logs_report_sent(inputs)
	if (locale === "pl") return pl_logs_report_sent(inputs)
	if (locale === "pt") return pt_logs_report_sent(inputs)
	if (locale === "ru") return ru_logs_report_sent(inputs)
	if (locale === "sv") return sv_logs_report_sent(inputs)
	if (locale === "tr") return tr_logs_report_sent(inputs)
	if (locale === "zh") return zh_logs_report_sent(inputs)
	if (locale === "ja") return ja_logs_report_sent(inputs)
	return en_logs_report_sent(inputs)
});
