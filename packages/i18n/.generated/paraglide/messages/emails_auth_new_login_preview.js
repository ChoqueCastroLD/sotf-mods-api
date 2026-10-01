/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_New_Login_PreviewInputs */

const en_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was this you?`)
};

const es_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Has sido tú?`)
};

const de_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warst du das?`)
};

const fr_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Était-ce vous ?`)
};

const it_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei stato tu?`)
};

const nl_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was jij dit?`)
};

const pl_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czy to Ty?`)
};

const pt_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foi você?`)
};

const ru_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это были вы?`)
};

const sv_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Var det du?`)
};

const tr_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sen miydin?`)
};

const zh_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`是你本人吗？`)
};

const ja_emails_auth_new_login_preview = /** @type {(inputs: Emails_Auth_New_Login_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ご本人ですか？`)
};

/**
* | output |
* | --- |
* | "Was this you?" |
*
* @param {Emails_Auth_New_Login_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_new_login_preview = /** @type {((inputs?: Emails_Auth_New_Login_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_New_Login_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_new_login_preview(inputs)
	if (locale === "de") return de_emails_auth_new_login_preview(inputs)
	if (locale === "fr") return fr_emails_auth_new_login_preview(inputs)
	if (locale === "it") return it_emails_auth_new_login_preview(inputs)
	if (locale === "nl") return nl_emails_auth_new_login_preview(inputs)
	if (locale === "pl") return pl_emails_auth_new_login_preview(inputs)
	if (locale === "pt") return pt_emails_auth_new_login_preview(inputs)
	if (locale === "ru") return ru_emails_auth_new_login_preview(inputs)
	if (locale === "sv") return sv_emails_auth_new_login_preview(inputs)
	if (locale === "tr") return tr_emails_auth_new_login_preview(inputs)
	if (locale === "zh") return zh_emails_auth_new_login_preview(inputs)
	if (locale === "ja") return ja_emails_auth_new_login_preview(inputs)
	return en_emails_auth_new_login_preview(inputs)
});
