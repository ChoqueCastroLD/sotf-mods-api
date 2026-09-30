/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Verify_To_ReportInputs */

const en_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your e-mail to send field reports.`)
};

const es_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo para enviar reportes de campo.`)
};

const de_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail-Adresse, um Feldberichte zu senden.`)
};

const fr_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre e-mail pour envoyer des rapports de terrain.`)
};

const it_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica la tua e-mail per inviare rapporti sul campo.`)
};

const nl_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres om veldrapporten te sturen.`)
};

const pl_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikuj e-mail, aby wysyłać raporty z terenu.`)
};

const pt_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifique seu e-mail para enviar relatos de campo.`)
};

const ru_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите e-mail, чтобы отправлять полевые отчёты.`)
};

const sv_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera din e-post för att skicka fältrapporter.`)
};

const tr_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporu göndermek için e-postanı doğrula.`)
};

const zh_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证邮箱后即可提交实测报告。`)
};

const ja_social_verify_to_report = /** @type {(inputs: Social_Verify_To_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポートを送るにはメールアドレスを確認してください。`)
};

/**
* | output |
* | --- |
* | "Verify your e-mail to send field reports." |
*
* @param {Social_Verify_To_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_verify_to_report = /** @type {((inputs?: Social_Verify_To_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Verify_To_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_verify_to_report(inputs)
	if (locale === "de") return de_social_verify_to_report(inputs)
	if (locale === "fr") return fr_social_verify_to_report(inputs)
	if (locale === "it") return it_social_verify_to_report(inputs)
	if (locale === "nl") return nl_social_verify_to_report(inputs)
	if (locale === "pl") return pl_social_verify_to_report(inputs)
	if (locale === "pt") return pt_social_verify_to_report(inputs)
	if (locale === "ru") return ru_social_verify_to_report(inputs)
	if (locale === "sv") return sv_social_verify_to_report(inputs)
	if (locale === "tr") return tr_social_verify_to_report(inputs)
	if (locale === "zh") return zh_social_verify_to_report(inputs)
	if (locale === "ja") return ja_social_verify_to_report(inputs)
	return en_social_verify_to_report(inputs)
});
