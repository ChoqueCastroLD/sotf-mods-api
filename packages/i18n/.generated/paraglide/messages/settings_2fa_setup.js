/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_SetupInputs */

const en_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set up an authenticator app`)
};

const es_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurar una app de autenticación`)
};

const de_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authenticator-App einrichten`)
};

const fr_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurer une application d’authentification`)
};

const it_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configura un’app di autenticazione`)
};

const nl_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een authenticator-app instellen`)
};

const pl_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skonfiguruj aplikację uwierzytelniającą`)
};

const pt_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurar um app autenticador`)
};

const ru_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настроить приложение-аутентификатор`)
};

const sv_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ställ in en autentiseringsapp`)
};

const tr_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kimlik doğrulayıcı uygulama kur`)
};

const zh_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置验证器应用`)
};

const ja_settings_2fa_setup = /** @type {(inputs: Settings_2fa_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証アプリを設定`)
};

/**
* | output |
* | --- |
* | "Set up an authenticator app" |
*
* @param {Settings_2fa_SetupInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_setup = /** @type {((inputs?: Settings_2fa_SetupInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_SetupInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_setup(inputs)
	if (locale === "de") return de_settings_2fa_setup(inputs)
	if (locale === "fr") return fr_settings_2fa_setup(inputs)
	if (locale === "it") return it_settings_2fa_setup(inputs)
	if (locale === "nl") return nl_settings_2fa_setup(inputs)
	if (locale === "pl") return pl_settings_2fa_setup(inputs)
	if (locale === "pt") return pt_settings_2fa_setup(inputs)
	if (locale === "ru") return ru_settings_2fa_setup(inputs)
	if (locale === "sv") return sv_settings_2fa_setup(inputs)
	if (locale === "tr") return tr_settings_2fa_setup(inputs)
	if (locale === "zh") return zh_settings_2fa_setup(inputs)
	if (locale === "ja") return ja_settings_2fa_setup(inputs)
	return en_settings_2fa_setup(inputs)
});
