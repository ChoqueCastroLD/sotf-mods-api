/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Meta_Verify_DescriptionInputs */

const en_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm the email address of your SOTF Mods account.`)
};

const es_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirma la dirección de email de tu cuenta de SOTF Mods.`)
};

const de_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige die E-Mail-Adresse deines SOTF-Mods-Kontos.`)
};

const fr_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmez l’adresse e-mail de votre compte SOTF Mods.`)
};

const it_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma l’indirizzo email del tuo account SOTF Mods.`)
};

const nl_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig het e-mailadres van je SOTF Mods-account.`)
};

const pl_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź adres e-mail swojego konta SOTF Mods.`)
};

const pt_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme o endereço de e-mail da sua conta do SOTF Mods.`)
};

const ru_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите адрес электронной почты аккаунта SOTF Mods.`)
};

const sv_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta e-postadressen till ditt SOTF Mods-konto.`)
};

const tr_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods hesabının e-posta adresini doğrula.`)
};

const zh_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认你的 SOTF Mods 账号邮箱地址。`)
};

const ja_auth_meta_verify_description = /** @type {(inputs: Auth_Meta_Verify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods アカウントのメールアドレスを確認します。`)
};

/**
* | output |
* | --- |
* | "Confirm the email address of your SOTF Mods account." |
*
* @param {Auth_Meta_Verify_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_meta_verify_description = /** @type {((inputs?: Auth_Meta_Verify_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Verify_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_meta_verify_description(inputs)
	if (locale === "de") return de_auth_meta_verify_description(inputs)
	if (locale === "fr") return fr_auth_meta_verify_description(inputs)
	if (locale === "it") return it_auth_meta_verify_description(inputs)
	if (locale === "nl") return nl_auth_meta_verify_description(inputs)
	if (locale === "pl") return pl_auth_meta_verify_description(inputs)
	if (locale === "pt") return pt_auth_meta_verify_description(inputs)
	if (locale === "ru") return ru_auth_meta_verify_description(inputs)
	if (locale === "sv") return sv_auth_meta_verify_description(inputs)
	if (locale === "tr") return tr_auth_meta_verify_description(inputs)
	if (locale === "zh") return zh_auth_meta_verify_description(inputs)
	if (locale === "ja") return ja_auth_meta_verify_description(inputs)
	return en_auth_meta_verify_description(inputs)
});
