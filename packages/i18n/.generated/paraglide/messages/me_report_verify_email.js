/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Report_Verify_EmailInputs */

const en_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email address before sending field reports.`)
};

const es_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo electrónico antes de enviar informes de campo.`)
};

const de_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail-Adresse, bevor du Feldberichte sendest.`)
};

const fr_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre adresse e-mail avant d’envoyer des rapports de terrain.`)
};

const it_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica il tuo indirizzo email prima di inviare rapporti sul campo.`)
};

const nl_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres voordat je veldrapporten verstuurt.`)
};

const pl_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź adres e-mail, zanim wyślesz raporty terenowe.`)
};

const pt_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme seu e-mail antes de enviar relatórios de campo.`)
};

const ru_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите адрес почты, прежде чем отправлять полевые отчёты.`)
};

const sv_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta din e-postadress innan du skickar fältrapporter.`)
};

const tr_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporu göndermeden önce e-posta adresini doğrula.`)
};

const zh_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交实地报告前请先验证你的邮箱。`)
};

const ja_me_report_verify_email = /** @type {(inputs: Me_Report_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現地レポートを送る前にメールアドレスを確認してください。`)
};

/**
* | output |
* | --- |
* | "Verify your email address before sending field reports." |
*
* @param {Me_Report_Verify_EmailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_verify_email = /** @type {((inputs?: Me_Report_Verify_EmailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_Verify_EmailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_verify_email(inputs)
	if (locale === "de") return de_me_report_verify_email(inputs)
	if (locale === "fr") return fr_me_report_verify_email(inputs)
	if (locale === "it") return it_me_report_verify_email(inputs)
	if (locale === "nl") return nl_me_report_verify_email(inputs)
	if (locale === "pl") return pl_me_report_verify_email(inputs)
	if (locale === "pt") return pt_me_report_verify_email(inputs)
	if (locale === "ru") return ru_me_report_verify_email(inputs)
	if (locale === "sv") return sv_me_report_verify_email(inputs)
	if (locale === "tr") return tr_me_report_verify_email(inputs)
	if (locale === "zh") return zh_me_report_verify_email(inputs)
	if (locale === "ja") return ja_me_report_verify_email(inputs)
	return en_me_report_verify_email(inputs)
});
