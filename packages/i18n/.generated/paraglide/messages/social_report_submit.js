/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_SubmitInputs */

const en_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send report`)
};

const es_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar denuncia`)
};

const de_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldung senden`)
};

const fr_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer le signalement`)
};

const it_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia segnalazione`)
};

const nl_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melding versturen`)
};

const pl_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij zgłoszenie`)
};

const pt_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar denúncia`)
};

const ru_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить жалобу`)
};

const sv_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka anmälan`)
};

const tr_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyeti gönder`)
};

const zh_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交举报`)
};

const ja_social_report_submit = /** @type {(inputs: Social_Report_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通報を送信`)
};

/**
* | output |
* | --- |
* | "Send report" |
*
* @param {Social_Report_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report_submit = /** @type {((inputs?: Social_Report_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Report_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report_submit(inputs)
	if (locale === "de") return de_social_report_submit(inputs)
	if (locale === "fr") return fr_social_report_submit(inputs)
	if (locale === "it") return it_social_report_submit(inputs)
	if (locale === "nl") return nl_social_report_submit(inputs)
	if (locale === "pl") return pl_social_report_submit(inputs)
	if (locale === "pt") return pt_social_report_submit(inputs)
	if (locale === "ru") return ru_social_report_submit(inputs)
	if (locale === "sv") return sv_social_report_submit(inputs)
	if (locale === "tr") return tr_social_report_submit(inputs)
	if (locale === "zh") return zh_social_report_submit(inputs)
	if (locale === "ja") return ja_social_report_submit(inputs)
	return en_social_report_submit(inputs)
});
