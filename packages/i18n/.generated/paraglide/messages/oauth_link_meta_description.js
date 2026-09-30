/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Link_Meta_DescriptionInputs */

const en_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm your password to link Discord to your existing account.`)
};

const es_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirma tu contraseña para vincular Discord a tu cuenta existente.`)
};

const de_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige dein Passwort, um Discord mit deinem bestehenden Konto zu verknüpfen.`)
};

const fr_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmez votre mot de passe pour lier Discord à votre compte existant.`)
};

const it_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma la password per collegare Discord al tuo account esistente.`)
};

const nl_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je wachtwoord om Discord aan je bestaande account te koppelen.`)
};

const pl_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź hasło, aby połączyć Discord z istniejącym kontem.`)
};

const pt_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme sua senha para vincular o Discord à sua conta existente.`)
};

const ru_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите пароль, чтобы привязать Discord к существующему аккаунту.`)
};

const sv_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta ditt lösenord för att koppla Discord till ditt befintliga konto.`)
};

const tr_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mevcut hesabına Discord’u bağlamak için parolanı doğrula.`)
};

const zh_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认密码，将 Discord 关联到你现有的账号。`)
};

const ja_oauth_link_meta_description = /** @type {(inputs: Oauth_Link_Meta_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードを確認して、Discord を既存のアカウントに連携します。`)
};

/**
* | output |
* | --- |
* | "Confirm your password to link Discord to your existing account." |
*
* @param {Oauth_Link_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_link_meta_description = /** @type {((inputs?: Oauth_Link_Meta_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Link_Meta_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_link_meta_description(inputs)
	if (locale === "de") return de_oauth_link_meta_description(inputs)
	if (locale === "fr") return fr_oauth_link_meta_description(inputs)
	if (locale === "it") return it_oauth_link_meta_description(inputs)
	if (locale === "nl") return nl_oauth_link_meta_description(inputs)
	if (locale === "pl") return pl_oauth_link_meta_description(inputs)
	if (locale === "pt") return pt_oauth_link_meta_description(inputs)
	if (locale === "ru") return ru_oauth_link_meta_description(inputs)
	if (locale === "sv") return sv_oauth_link_meta_description(inputs)
	if (locale === "tr") return tr_oauth_link_meta_description(inputs)
	if (locale === "zh") return zh_oauth_link_meta_description(inputs)
	if (locale === "ja") return ja_oauth_link_meta_description(inputs)
	return en_oauth_link_meta_description(inputs)
});
