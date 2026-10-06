/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_RememberInputs */

const en_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep me logged in on this device`)
};

const es_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mantener la sesión iniciada en este dispositivo`)
};

const de_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf diesem Gerät angemeldet bleiben`)
};

const fr_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rester connecté sur cet appareil`)
};

const it_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resta connesso su questo dispositivo`)
};

const nl_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingelogd blijven op dit apparaat`)
};

const pl_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie wylogowuj mnie na tym urządzeniu`)
};

const pt_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manter conectado neste dispositivo`)
};

const ru_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не выходить на этом устройстве`)
};

const sv_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förbli inloggad på den här enheten`)
};

const tr_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu cihazda oturumum açık kalsın`)
};

const zh_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在此设备上保持登录`)
};

const ja_auth_field_remember = /** @type {(inputs: Auth_Field_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このデバイスでログインしたままにする`)
};

/**
* | output |
* | --- |
* | "Keep me logged in on this device" |
*
* @param {Auth_Field_RememberInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_remember = /** @type {((inputs?: Auth_Field_RememberInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_RememberInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_remember(inputs)
	if (locale === "de") return de_auth_field_remember(inputs)
	if (locale === "fr") return fr_auth_field_remember(inputs)
	if (locale === "it") return it_auth_field_remember(inputs)
	if (locale === "nl") return nl_auth_field_remember(inputs)
	if (locale === "pl") return pl_auth_field_remember(inputs)
	if (locale === "pt") return pt_auth_field_remember(inputs)
	if (locale === "ru") return ru_auth_field_remember(inputs)
	if (locale === "sv") return sv_auth_field_remember(inputs)
	if (locale === "tr") return tr_auth_field_remember(inputs)
	if (locale === "zh") return zh_auth_field_remember(inputs)
	if (locale === "ja") return ja_auth_field_remember(inputs)
	return en_auth_field_remember(inputs)
});
