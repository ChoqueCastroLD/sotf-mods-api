/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Sign_InInputs */

const en_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in to report a mod.`)
};

const es_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para denunciar un mod.`)
};

const de_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an, um einen Mod zu melden.`)
};

const fr_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour signaler un mod.`)
};

const it_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per segnalare una mod.`)
};

const nl_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om een mod te rapporteren.`)
};

const pl_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby zgłosić mod.`)
};

const pt_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faça login para denunciar um mod.`)
};

const ru_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы пожаловаться на мод.`)
};

const sv_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att anmäla en mod.`)
};

const tr_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir modu şikâyet etmek için giriş yap.`)
};

const zh_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后才能举报模组。`)
};

const ja_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を通報するにはログインしてください。`)
};

/**
* | output |
* | --- |
* | "Log in to report a mod." |
*
* @param {Mod_Report_Sign_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_sign_in = /** @type {((inputs?: Mod_Report_Sign_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Sign_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_sign_in(inputs)
	if (locale === "de") return de_mod_report_sign_in(inputs)
	if (locale === "fr") return fr_mod_report_sign_in(inputs)
	if (locale === "it") return it_mod_report_sign_in(inputs)
	if (locale === "nl") return nl_mod_report_sign_in(inputs)
	if (locale === "pl") return pl_mod_report_sign_in(inputs)
	if (locale === "pt") return pt_mod_report_sign_in(inputs)
	if (locale === "ru") return ru_mod_report_sign_in(inputs)
	if (locale === "sv") return sv_mod_report_sign_in(inputs)
	if (locale === "tr") return tr_mod_report_sign_in(inputs)
	if (locale === "zh") return zh_mod_report_sign_in(inputs)
	if (locale === "ja") return ja_mod_report_sign_in(inputs)
	return en_mod_report_sign_in(inputs)
});
