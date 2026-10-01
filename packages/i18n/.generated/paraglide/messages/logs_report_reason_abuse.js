/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Report_Reason_AbuseInputs */

const en_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abusive or illegal content`)
};

const es_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido abusivo o ilegal`)
};

const de_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Missbräuchlicher oder illegaler Inhalt`)
};

const fr_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu abusif ou illégal`)
};

const it_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuto offensivo o illegale`)
};

const nl_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kwetsende of illegale inhoud`)
};

const pl_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treść obraźliwa lub nielegalna`)
};

const pt_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo abusivo ou ilegal`)
};

const ru_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оскорбительное или незаконное содержимое`)
};

const sv_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kränkande eller olagligt innehåll`)
};

const tr_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saldırgan veya yasa dışı içerik`)
};

const zh_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`冒犯或违法内容`)
};

const ja_logs_report_reason_abuse = /** @type {(inputs: Logs_Report_Reason_AbuseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不快または違法な内容`)
};

/**
* | output |
* | --- |
* | "Abusive or illegal content" |
*
* @param {Logs_Report_Reason_AbuseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_report_reason_abuse = /** @type {((inputs?: Logs_Report_Reason_AbuseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Report_Reason_AbuseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_report_reason_abuse(inputs)
	if (locale === "de") return de_logs_report_reason_abuse(inputs)
	if (locale === "fr") return fr_logs_report_reason_abuse(inputs)
	if (locale === "it") return it_logs_report_reason_abuse(inputs)
	if (locale === "nl") return nl_logs_report_reason_abuse(inputs)
	if (locale === "pl") return pl_logs_report_reason_abuse(inputs)
	if (locale === "pt") return pt_logs_report_reason_abuse(inputs)
	if (locale === "ru") return ru_logs_report_reason_abuse(inputs)
	if (locale === "sv") return sv_logs_report_reason_abuse(inputs)
	if (locale === "tr") return tr_logs_report_reason_abuse(inputs)
	if (locale === "zh") return zh_logs_report_reason_abuse(inputs)
	if (locale === "ja") return ja_logs_report_reason_abuse(inputs)
	return en_logs_report_reason_abuse(inputs)
});
