/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Required_IdentifierInputs */

const en_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your email or handle.`)
};

const es_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe tu email o nombre de usuario.`)
};

const de_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib deine E-Mail oder deinen Handle ein.`)
};

const fr_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez votre e-mail ou votre identifiant.`)
};

const it_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci la tua email o il tuo handle.`)
};

const nl_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vul je e-mailadres of handle in.`)
};

const pl_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz e-mail lub nazwę użytkownika.`)
};

const pt_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite seu e-mail ou nome de usuário.`)
};

const ru_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите email или имя пользователя.`)
};

const sv_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange din e-post eller ditt användarnamn.`)
};

const tr_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postanı veya kullanıcı adını gir.`)
};

const zh_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入邮箱或用户名。`)
};

const ja_auth_error_required_identifier = /** @type {(inputs: Auth_Error_Required_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスまたはハンドルを入力してください。`)
};

/**
* | output |
* | --- |
* | "Enter your email or handle." |
*
* @param {Auth_Error_Required_IdentifierInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_error_required_identifier = /** @type {((inputs?: Auth_Error_Required_IdentifierInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Required_IdentifierInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_error_required_identifier(inputs)
	if (locale === "de") return de_auth_error_required_identifier(inputs)
	if (locale === "fr") return fr_auth_error_required_identifier(inputs)
	if (locale === "it") return it_auth_error_required_identifier(inputs)
	if (locale === "nl") return nl_auth_error_required_identifier(inputs)
	if (locale === "pl") return pl_auth_error_required_identifier(inputs)
	if (locale === "pt") return pt_auth_error_required_identifier(inputs)
	if (locale === "ru") return ru_auth_error_required_identifier(inputs)
	if (locale === "sv") return sv_auth_error_required_identifier(inputs)
	if (locale === "tr") return tr_auth_error_required_identifier(inputs)
	if (locale === "zh") return zh_auth_error_required_identifier(inputs)
	if (locale === "ja") return ja_auth_error_required_identifier(inputs)
	return en_auth_error_required_identifier(inputs)
});
