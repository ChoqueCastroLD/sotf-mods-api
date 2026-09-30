/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_PasswordInputs */

const en_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password`)
};

const es_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contraseña`)
};

const de_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort`)
};

const fr_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mot de passe`)
};

const it_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password`)
};

const nl_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord`)
};

const pl_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasło`)
};

const pt_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senha`)
};

const ru_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пароль`)
};

const sv_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösenord`)
};

const tr_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifre`)
};

const zh_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密码`)
};

const ja_auth_field_password = /** @type {(inputs: Auth_Field_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワード`)
};

/**
* | output |
* | --- |
* | "Password" |
*
* @param {Auth_Field_PasswordInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_password = /** @type {((inputs?: Auth_Field_PasswordInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_PasswordInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_password(inputs)
	if (locale === "de") return de_auth_field_password(inputs)
	if (locale === "fr") return fr_auth_field_password(inputs)
	if (locale === "it") return it_auth_field_password(inputs)
	if (locale === "nl") return nl_auth_field_password(inputs)
	if (locale === "pl") return pl_auth_field_password(inputs)
	if (locale === "pt") return pt_auth_field_password(inputs)
	if (locale === "ru") return ru_auth_field_password(inputs)
	if (locale === "sv") return sv_auth_field_password(inputs)
	if (locale === "tr") return tr_auth_field_password(inputs)
	if (locale === "zh") return zh_auth_field_password(inputs)
	if (locale === "ja") return ja_auth_field_password(inputs)
	return en_auth_field_password(inputs)
});
