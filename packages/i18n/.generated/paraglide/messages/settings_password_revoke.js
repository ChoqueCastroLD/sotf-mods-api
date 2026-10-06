/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Password_RevokeInputs */

const en_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log out my other devices`)
};

const es_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar sesión en mis otros dispositivos`)
};

const de_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine anderen Geräte abmelden`)
};

const fr_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déconnecter mes autres appareils`)
};

const it_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disconnetti gli altri miei dispositivi`)
};

const nl_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn andere apparaten uitloggen`)
};

const pl_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyloguj moje pozostałe urządzenia`)
};

const pt_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair dos meus outros dispositivos`)
};

const ru_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти на других моих устройствах`)
};

const sv_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut mina andra enheter`)
};

const tr_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer cihazlarımdan çıkış yap`)
};

const zh_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退出我的其他设备`)
};

const ja_settings_password_revoke = /** @type {(inputs: Settings_Password_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`他のデバイスからログアウトする`)
};

/**
* | output |
* | --- |
* | "Log out my other devices" |
*
* @param {Settings_Password_RevokeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_revoke = /** @type {((inputs?: Settings_Password_RevokeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_RevokeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_revoke(inputs)
	if (locale === "de") return de_settings_password_revoke(inputs)
	if (locale === "fr") return fr_settings_password_revoke(inputs)
	if (locale === "it") return it_settings_password_revoke(inputs)
	if (locale === "nl") return nl_settings_password_revoke(inputs)
	if (locale === "pl") return pl_settings_password_revoke(inputs)
	if (locale === "pt") return pt_settings_password_revoke(inputs)
	if (locale === "ru") return ru_settings_password_revoke(inputs)
	if (locale === "sv") return sv_settings_password_revoke(inputs)
	if (locale === "tr") return tr_settings_password_revoke(inputs)
	if (locale === "zh") return zh_settings_password_revoke(inputs)
	if (locale === "ja") return ja_settings_password_revoke(inputs)
	return en_settings_password_revoke(inputs)
});
