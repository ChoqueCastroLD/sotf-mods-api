/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Already_RegisteredInputs */

const en_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This email or handle is already registered.`)
};

const es_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este email o nombre de usuario ya está registrado.`)
};

const de_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese E-Mail oder dieser Handle ist bereits registriert.`)
};

const fr_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cet e-mail ou cet identifiant est déjà enregistré.`)
};

const it_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa email o questo handle è già registrato.`)
};

const nl_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit e-mailadres of deze handle is al geregistreerd.`)
};

const pl_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten e-mail lub ta nazwa użytkownika jest już zarejestrowana.`)
};

const pt_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este e-mail ou nome de usuário já está cadastrado.`)
};

const ru_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот email или имя пользователя уже зарегистрированы.`)
};

const sv_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postadressen eller användarnamnet är redan registrerat.`)
};

const tr_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu e-posta veya kullanıcı adı zaten kayıtlı.`)
};

const zh_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该邮箱或用户名已注册。`)
};

const ja_auth_error_already_registered = /** @type {(inputs: Auth_Error_Already_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このメールアドレスまたはハンドルはすでに登録されています。`)
};

/**
* | output |
* | --- |
* | "This email or handle is already registered." |
*
* @param {Auth_Error_Already_RegisteredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_error_already_registered = /** @type {((inputs?: Auth_Error_Already_RegisteredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Already_RegisteredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_error_already_registered(inputs)
	if (locale === "de") return de_auth_error_already_registered(inputs)
	if (locale === "fr") return fr_auth_error_already_registered(inputs)
	if (locale === "it") return it_auth_error_already_registered(inputs)
	if (locale === "nl") return nl_auth_error_already_registered(inputs)
	if (locale === "pl") return pl_auth_error_already_registered(inputs)
	if (locale === "pt") return pt_auth_error_already_registered(inputs)
	if (locale === "ru") return ru_auth_error_already_registered(inputs)
	if (locale === "sv") return sv_auth_error_already_registered(inputs)
	if (locale === "tr") return tr_auth_error_already_registered(inputs)
	if (locale === "zh") return zh_auth_error_already_registered(inputs)
	if (locale === "ja") return ja_auth_error_already_registered(inputs)
	return en_auth_error_already_registered(inputs)
});
