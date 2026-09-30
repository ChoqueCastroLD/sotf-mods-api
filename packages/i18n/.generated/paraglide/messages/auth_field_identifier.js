/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_IdentifierInputs */

const en_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email or handle`)
};

const es_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email o nombre de usuario`)
};

const de_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail oder Handle`)
};

const fr_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail ou identifiant`)
};

const it_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email o handle`)
};

const nl_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mailadres of handle`)
};

const pl_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail lub nazwa użytkownika`)
};

const pt_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail ou nome de usuário`)
};

const ru_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email или имя пользователя`)
};

const sv_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-post eller användarnamn`)
};

const tr_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posta veya kullanıcı adı`)
};

const zh_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱或用户名`)
};

const ja_auth_field_identifier = /** @type {(inputs: Auth_Field_IdentifierInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスまたはハンドル`)
};

/**
* | output |
* | --- |
* | "Email or handle" |
*
* @param {Auth_Field_IdentifierInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_identifier = /** @type {((inputs?: Auth_Field_IdentifierInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_IdentifierInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_identifier(inputs)
	if (locale === "de") return de_auth_field_identifier(inputs)
	if (locale === "fr") return fr_auth_field_identifier(inputs)
	if (locale === "it") return it_auth_field_identifier(inputs)
	if (locale === "nl") return nl_auth_field_identifier(inputs)
	if (locale === "pl") return pl_auth_field_identifier(inputs)
	if (locale === "pt") return pt_auth_field_identifier(inputs)
	if (locale === "ru") return ru_auth_field_identifier(inputs)
	if (locale === "sv") return sv_auth_field_identifier(inputs)
	if (locale === "tr") return tr_auth_field_identifier(inputs)
	if (locale === "zh") return zh_auth_field_identifier(inputs)
	if (locale === "ja") return ja_auth_field_identifier(inputs)
	return en_auth_field_identifier(inputs)
});
