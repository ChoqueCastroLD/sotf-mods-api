/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_CodeInputs */

const en_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code from your app`)
};

const es_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código de tu app`)
};

const de_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code aus deiner App`)
};

const fr_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code de votre application`)
};

const it_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice della tua app`)
};

const nl_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code uit je app`)
};

const pl_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod z aplikacji`)
};

const pt_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código do seu app`)
};

const ru_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Код из приложения`)
};

const sv_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod från din app`)
};

const tr_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uygulamandaki kod`)
};

const zh_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用中的验证码`)
};

const ja_settings_2fa_code = /** @type {(inputs: Settings_2fa_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アプリのコード`)
};

/**
* | output |
* | --- |
* | "Code from your app" |
*
* @param {Settings_2fa_CodeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_code = /** @type {((inputs?: Settings_2fa_CodeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_CodeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_code(inputs)
	if (locale === "de") return de_settings_2fa_code(inputs)
	if (locale === "fr") return fr_settings_2fa_code(inputs)
	if (locale === "it") return it_settings_2fa_code(inputs)
	if (locale === "nl") return nl_settings_2fa_code(inputs)
	if (locale === "pl") return pl_settings_2fa_code(inputs)
	if (locale === "pt") return pt_settings_2fa_code(inputs)
	if (locale === "ru") return ru_settings_2fa_code(inputs)
	if (locale === "sv") return sv_settings_2fa_code(inputs)
	if (locale === "tr") return tr_settings_2fa_code(inputs)
	if (locale === "zh") return zh_settings_2fa_code(inputs)
	if (locale === "ja") return ja_settings_2fa_code(inputs)
	return en_settings_2fa_code(inputs)
});
