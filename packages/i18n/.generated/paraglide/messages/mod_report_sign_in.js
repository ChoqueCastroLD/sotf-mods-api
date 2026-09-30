/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Sign_InInputs */

const en_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in to report a mod. It keeps reports honest.`)
};

const es_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para denunciar un mod. Así las denuncias son honestas.`)
};

const de_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an, um einen Mod zu melden. So bleiben Meldungen ehrlich.`)
};

const fr_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour signaler un mod. Cela garde les signalements honnêtes.`)
};

const it_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per segnalare una mod. Così le segnalazioni restano oneste.`)
};

const nl_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om een mod te rapporteren. Zo blijven meldingen eerlijk.`)
};

const pl_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby zgłosić mod. Dzięki temu zgłoszenia są uczciwe.`)
};

const pt_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para denunciar um mod. Assim as denúncias continuam honestas.`)
};

const ru_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы пожаловаться на мод. Так жалобы остаются честными.`)
};

const sv_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att anmäla en mod. Det håller anmälningarna ärliga.`)
};

const tr_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir modu şikâyet etmek için giriş yap. Böylece şikâyetler dürüst kalır.`)
};

const zh_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后才能举报模组，这样举报更可信。`)
};

const ja_mod_report_sign_in = /** @type {(inputs: Mod_Report_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を通報するにはログインしてください。通報の信頼性を保つためです。`)
};

/**
* | output |
* | --- |
* | "Sign in to report a mod. It keeps reports honest." |
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
