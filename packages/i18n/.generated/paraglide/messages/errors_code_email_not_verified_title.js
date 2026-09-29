/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Email_Not_Verified_TitleInputs */

const en_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email first`)
};

const es_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu email primero`)
};

const de_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige zuerst deine E-Mail-Adresse`)
};

const fr_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez d’abord votre e-mail`)
};

const it_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima verifica la tua email`)
};

const nl_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig eerst je e-mailadres`)
};

const pl_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw potwierdź adres e-mail`)
};

const pt_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme seu e-mail primeiro`)
};

const ru_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала подтвердите e-mail`)
};

const sv_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera din e-post först`)
};

const tr_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce e-postanı doğrula`)
};

const zh_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先验证邮箱`)
};

const ja_errors_code_email_not_verified_title = /** @type {(inputs: Errors_Code_Email_Not_Verified_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先にメールアドレスを確認してください`)
};

/**
* | output |
* | --- |
* | "Verify your email first" |
*
* @param {Errors_Code_Email_Not_Verified_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_email_not_verified_title = /** @type {((inputs?: Errors_Code_Email_Not_Verified_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Email_Not_Verified_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_email_not_verified_title(inputs)
	if (locale === "de") return de_errors_code_email_not_verified_title(inputs)
	if (locale === "fr") return fr_errors_code_email_not_verified_title(inputs)
	if (locale === "it") return it_errors_code_email_not_verified_title(inputs)
	if (locale === "nl") return nl_errors_code_email_not_verified_title(inputs)
	if (locale === "pl") return pl_errors_code_email_not_verified_title(inputs)
	if (locale === "pt") return pt_errors_code_email_not_verified_title(inputs)
	if (locale === "ru") return ru_errors_code_email_not_verified_title(inputs)
	if (locale === "sv") return sv_errors_code_email_not_verified_title(inputs)
	if (locale === "tr") return tr_errors_code_email_not_verified_title(inputs)
	if (locale === "zh") return zh_errors_code_email_not_verified_title(inputs)
	if (locale === "ja") return ja_errors_code_email_not_verified_title(inputs)
	return en_errors_code_email_not_verified_title(inputs)
});
