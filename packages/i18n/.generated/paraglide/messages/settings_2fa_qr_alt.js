/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Qr_AltInputs */

const en_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR code for your authenticator app`)
};

const es_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código QR para tu app de autenticación`)
};

const de_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR-Code für deine Authenticator-App`)
};

const fr_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR code pour votre application d’authentification`)
};

const it_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice QR per la tua app di autenticazione`)
};

const nl_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR-code voor je authenticator-app`)
};

const pl_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod QR dla Twojej aplikacji uwierzytelniającej`)
};

const pt_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR code para seu app autenticador`)
};

const ru_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR-код для приложения-аутентификатора`)
};

const sv_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR-kod för din autentiseringsapp`)
};

const tr_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kimlik doğrulayıcı uygulaman için QR kodu`)
};

const zh_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证器应用二维码`)
};

const ja_settings_2fa_qr_alt = /** @type {(inputs: Settings_2fa_Qr_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証アプリ用QRコード`)
};

/**
* | output |
* | --- |
* | "QR code for your authenticator app" |
*
* @param {Settings_2fa_Qr_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_qr_alt = /** @type {((inputs?: Settings_2fa_Qr_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Qr_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_qr_alt(inputs)
	if (locale === "de") return de_settings_2fa_qr_alt(inputs)
	if (locale === "fr") return fr_settings_2fa_qr_alt(inputs)
	if (locale === "it") return it_settings_2fa_qr_alt(inputs)
	if (locale === "nl") return nl_settings_2fa_qr_alt(inputs)
	if (locale === "pl") return pl_settings_2fa_qr_alt(inputs)
	if (locale === "pt") return pt_settings_2fa_qr_alt(inputs)
	if (locale === "ru") return ru_settings_2fa_qr_alt(inputs)
	if (locale === "sv") return sv_settings_2fa_qr_alt(inputs)
	if (locale === "tr") return tr_settings_2fa_qr_alt(inputs)
	if (locale === "zh") return zh_settings_2fa_qr_alt(inputs)
	if (locale === "ja") return ja_settings_2fa_qr_alt(inputs)
	return en_settings_2fa_qr_alt(inputs)
});
