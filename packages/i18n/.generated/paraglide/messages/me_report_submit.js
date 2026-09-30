/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Report_SubmitInputs */

const en_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send report`)
};

const es_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar informe`)
};

const de_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bericht senden`)
};

const fr_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer le rapport`)
};

const it_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia rapporto`)
};

const nl_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport versturen`)
};

const pl_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij raport`)
};

const pt_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar relatório`)
};

const ru_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить отчёт`)
};

const sv_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka rapport`)
};

const tr_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporu gönder`)
};

const zh_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交报告`)
};

const ja_me_report_submit = /** @type {(inputs: Me_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レポートを送信`)
};

/**
* | output |
* | --- |
* | "Send report" |
*
* @param {Me_Report_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_submit = /** @type {((inputs?: Me_Report_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_submit(inputs)
	if (locale === "de") return de_me_report_submit(inputs)
	if (locale === "fr") return fr_me_report_submit(inputs)
	if (locale === "it") return it_me_report_submit(inputs)
	if (locale === "nl") return nl_me_report_submit(inputs)
	if (locale === "pl") return pl_me_report_submit(inputs)
	if (locale === "pt") return pt_me_report_submit(inputs)
	if (locale === "ru") return ru_me_report_submit(inputs)
	if (locale === "sv") return sv_me_report_submit(inputs)
	if (locale === "tr") return tr_me_report_submit(inputs)
	if (locale === "zh") return zh_me_report_submit(inputs)
	if (locale === "ja") return ja_me_report_submit(inputs)
	return en_me_report_submit(inputs)
});
