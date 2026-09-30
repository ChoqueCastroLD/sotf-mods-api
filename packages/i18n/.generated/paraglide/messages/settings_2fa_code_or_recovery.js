/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Code_Or_RecoveryInputs */

const en_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code from your app or a recovery code`)
};

const es_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código de tu app o un código de recuperación`)
};

const de_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code aus deiner App oder ein Wiederherstellungscode`)
};

const fr_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code de votre application ou code de récupération`)
};

const it_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice della tua app o codice di recupero`)
};

const nl_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code uit je app of een herstelcode`)
};

const pl_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod z aplikacji lub kod odzyskiwania`)
};

const pt_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código do seu app ou código de recuperação`)
};

const ru_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Код из приложения или код восстановления`)
};

const sv_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod från din app eller en återställningskod`)
};

const tr_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uygulamandaki kod veya bir kurtarma kodu`)
};

const zh_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用中的验证码或恢复码`)
};

const ja_settings_2fa_code_or_recovery = /** @type {(inputs: Settings_2fa_Code_Or_RecoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アプリのコードまたはリカバリーコード`)
};

/**
* | output |
* | --- |
* | "Code from your app or a recovery code" |
*
* @param {Settings_2fa_Code_Or_RecoveryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_code_or_recovery = /** @type {((inputs?: Settings_2fa_Code_Or_RecoveryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Code_Or_RecoveryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_code_or_recovery(inputs)
	if (locale === "de") return de_settings_2fa_code_or_recovery(inputs)
	if (locale === "fr") return fr_settings_2fa_code_or_recovery(inputs)
	if (locale === "it") return it_settings_2fa_code_or_recovery(inputs)
	if (locale === "nl") return nl_settings_2fa_code_or_recovery(inputs)
	if (locale === "pl") return pl_settings_2fa_code_or_recovery(inputs)
	if (locale === "pt") return pt_settings_2fa_code_or_recovery(inputs)
	if (locale === "ru") return ru_settings_2fa_code_or_recovery(inputs)
	if (locale === "sv") return sv_settings_2fa_code_or_recovery(inputs)
	if (locale === "tr") return tr_settings_2fa_code_or_recovery(inputs)
	if (locale === "zh") return zh_settings_2fa_code_or_recovery(inputs)
	if (locale === "ja") return ja_settings_2fa_code_or_recovery(inputs)
	return en_settings_2fa_code_or_recovery(inputs)
});
