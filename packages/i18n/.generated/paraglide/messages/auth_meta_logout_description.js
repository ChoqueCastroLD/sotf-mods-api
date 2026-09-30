/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Meta_Logout_DescriptionInputs */

const en_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign out of SOTF Mods on this device.`)
};

const es_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cierra tu sesión de SOTF Mods en este dispositivo.`)
};

const de_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich auf diesem Gerät von SOTF Mods ab.`)
};

const fr_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déconnectez-vous de SOTF Mods sur cet appareil.`)
};

const it_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esci da SOTF Mods su questo dispositivo.`)
};

const nl_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log uit bij SOTF Mods op dit apparaat.`)
};

const pl_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyloguj się z SOTF Mods na tym urządzeniu.`)
};

const pt_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saia do SOTF Mods neste dispositivo.`)
};

const ru_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйдите из SOTF Mods на этом устройстве.`)
};

const sv_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut från SOTF Mods på den här enheten.`)
};

const tr_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu cihazda SOTF Mods’tan çıkış yap.`)
};

const zh_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在此设备上退出 SOTF Mods。`)
};

const ja_auth_meta_logout_description = /** @type {(inputs: Auth_Meta_Logout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このデバイスで SOTF Mods からログアウトします。`)
};

/**
* | output |
* | --- |
* | "Sign out of SOTF Mods on this device." |
*
* @param {Auth_Meta_Logout_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_meta_logout_description = /** @type {((inputs?: Auth_Meta_Logout_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Logout_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_meta_logout_description(inputs)
	if (locale === "de") return de_auth_meta_logout_description(inputs)
	if (locale === "fr") return fr_auth_meta_logout_description(inputs)
	if (locale === "it") return it_auth_meta_logout_description(inputs)
	if (locale === "nl") return nl_auth_meta_logout_description(inputs)
	if (locale === "pl") return pl_auth_meta_logout_description(inputs)
	if (locale === "pt") return pt_auth_meta_logout_description(inputs)
	if (locale === "ru") return ru_auth_meta_logout_description(inputs)
	if (locale === "sv") return sv_auth_meta_logout_description(inputs)
	if (locale === "tr") return tr_auth_meta_logout_description(inputs)
	if (locale === "zh") return zh_auth_meta_logout_description(inputs)
	if (locale === "ja") return ja_auth_meta_logout_description(inputs)
	return en_auth_meta_logout_description(inputs)
});
