/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_EmailInputs */

const en_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email`)
};

const es_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email`)
};

const de_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail`)
};

const fr_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail`)
};

const it_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email`)
};

const nl_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mailadres`)
};

const pl_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail`)
};

const pt_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail`)
};

const ru_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email`)
};

const sv_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-post`)
};

const tr_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posta`)
};

const zh_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱`)
};

const ja_auth_field_email = /** @type {(inputs: Auth_Field_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレス`)
};

/**
* | output |
* | --- |
* | "Email" |
*
* @param {Auth_Field_EmailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_email = /** @type {((inputs?: Auth_Field_EmailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_EmailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_email(inputs)
	if (locale === "de") return de_auth_field_email(inputs)
	if (locale === "fr") return fr_auth_field_email(inputs)
	if (locale === "it") return it_auth_field_email(inputs)
	if (locale === "nl") return nl_auth_field_email(inputs)
	if (locale === "pl") return pl_auth_field_email(inputs)
	if (locale === "pt") return pt_auth_field_email(inputs)
	if (locale === "ru") return ru_auth_field_email(inputs)
	if (locale === "sv") return sv_auth_field_email(inputs)
	if (locale === "tr") return tr_auth_field_email(inputs)
	if (locale === "zh") return zh_auth_field_email(inputs)
	if (locale === "ja") return ja_auth_field_email(inputs)
	return en_auth_field_email(inputs)
});
