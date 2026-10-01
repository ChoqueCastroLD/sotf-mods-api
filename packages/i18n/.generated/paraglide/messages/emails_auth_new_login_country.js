/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ country: NonNullable<unknown> }} Emails_Auth_New_Login_CountryInputs */

const en_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Country: ${i?.country}`)
};

const es_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`País: ${i?.country}`)
};

const de_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Land: ${i?.country}`)
};

const fr_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pays : ${i?.country}`)
};

const it_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Paese: ${i?.country}`)
};

const nl_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Land: ${i?.country}`)
};

const pl_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kraj: ${i?.country}`)
};

const pt_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`País: ${i?.country}`)
};

const ru_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Страна: ${i?.country}`)
};

const sv_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Land: ${i?.country}`)
};

const tr_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ülke: ${i?.country}`)
};

const zh_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`国家/地区：${i?.country}`)
};

const ja_emails_auth_new_login_country = /** @type {(inputs: Emails_Auth_New_Login_CountryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`国：${i?.country}`)
};

/**
* | output |
* | --- |
* | "Country: {country}" |
*
* @param {Emails_Auth_New_Login_CountryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_new_login_country = /** @type {((inputs: Emails_Auth_New_Login_CountryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_New_Login_CountryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_new_login_country(inputs)
	if (locale === "de") return de_emails_auth_new_login_country(inputs)
	if (locale === "fr") return fr_emails_auth_new_login_country(inputs)
	if (locale === "it") return it_emails_auth_new_login_country(inputs)
	if (locale === "nl") return nl_emails_auth_new_login_country(inputs)
	if (locale === "pl") return pl_emails_auth_new_login_country(inputs)
	if (locale === "pt") return pt_emails_auth_new_login_country(inputs)
	if (locale === "ru") return ru_emails_auth_new_login_country(inputs)
	if (locale === "sv") return sv_emails_auth_new_login_country(inputs)
	if (locale === "tr") return tr_emails_auth_new_login_country(inputs)
	if (locale === "zh") return zh_emails_auth_new_login_country(inputs)
	if (locale === "ja") return ja_emails_auth_new_login_country(inputs)
	return en_emails_auth_new_login_country(inputs)
});
