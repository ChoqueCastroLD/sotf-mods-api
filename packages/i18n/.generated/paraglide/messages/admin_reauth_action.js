/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Reauth_ActionInputs */

const en_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in again`)
};

const es_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciar sesión de nuevo`)
};

const de_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut anmelden`)
};

const fr_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se reconnecter`)
};

const it_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi di nuovo`)
};

const nl_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw aanmelden`)
};

const pl_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się ponownie`)
};

const pt_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrar de novo`)
};

const ru_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войти снова`)
};

const sv_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in igen`)
};

const tr_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden giriş yap`)
};

const zh_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新登录`)
};

const ja_admin_reauth_action = /** @type {(inputs: Admin_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`もう一度サインイン`)
};

/**
* | output |
* | --- |
* | "Sign in again" |
*
* @param {Admin_Reauth_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_reauth_action = /** @type {((inputs?: Admin_Reauth_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Reauth_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_reauth_action(inputs)
	if (locale === "de") return de_admin_reauth_action(inputs)
	if (locale === "fr") return fr_admin_reauth_action(inputs)
	if (locale === "it") return it_admin_reauth_action(inputs)
	if (locale === "nl") return nl_admin_reauth_action(inputs)
	if (locale === "pl") return pl_admin_reauth_action(inputs)
	if (locale === "pt") return pt_admin_reauth_action(inputs)
	if (locale === "ru") return ru_admin_reauth_action(inputs)
	if (locale === "sv") return sv_admin_reauth_action(inputs)
	if (locale === "tr") return tr_admin_reauth_action(inputs)
	if (locale === "zh") return zh_admin_reauth_action(inputs)
	if (locale === "ja") return ja_admin_reauth_action(inputs)
	return en_admin_reauth_action(inputs)
});
