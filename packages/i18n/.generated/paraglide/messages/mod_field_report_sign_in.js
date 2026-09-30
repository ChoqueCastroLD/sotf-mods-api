/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Field_Report_Sign_InInputs */

const en_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in to add a field report`)
};

const es_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para añadir un reporte de campo`)
};

const de_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an, um einen Feldbericht abzugeben`)
};

const fr_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour ajouter un rapport de terrain`)
};

const it_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per aggiungere un rapporto sul campo`)
};

const nl_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om een veldrapport toe te voegen`)
};

const pl_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby dodać raport terenowy`)
};

const pt_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para adicionar um relatório de campo`)
};

const ru_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы добавить полевой отчёт`)
};

const sv_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att lägga till en fältrapport`)
};

const tr_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporu eklemek için giriş yap`)
};

const zh_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后提交实地报告`)
};

const ja_mod_field_report_sign_in = /** @type {(inputs: Mod_Field_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインしてフィールドレポートを追加`)
};

/**
* | output |
* | --- |
* | "Sign in to add a field report" |
*
* @param {Mod_Field_Report_Sign_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_field_report_sign_in = /** @type {((inputs?: Mod_Field_Report_Sign_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Field_Report_Sign_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_field_report_sign_in(inputs)
	if (locale === "de") return de_mod_field_report_sign_in(inputs)
	if (locale === "fr") return fr_mod_field_report_sign_in(inputs)
	if (locale === "it") return it_mod_field_report_sign_in(inputs)
	if (locale === "nl") return nl_mod_field_report_sign_in(inputs)
	if (locale === "pl") return pl_mod_field_report_sign_in(inputs)
	if (locale === "pt") return pt_mod_field_report_sign_in(inputs)
	if (locale === "ru") return ru_mod_field_report_sign_in(inputs)
	if (locale === "sv") return sv_mod_field_report_sign_in(inputs)
	if (locale === "tr") return tr_mod_field_report_sign_in(inputs)
	if (locale === "zh") return zh_mod_field_report_sign_in(inputs)
	if (locale === "ja") return ja_mod_field_report_sign_in(inputs)
	return en_mod_field_report_sign_in(inputs)
});
