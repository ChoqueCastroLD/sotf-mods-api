/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Code_RequiredInputs */

const en_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter the code.`)
};

const es_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introduce el código.`)
};

const de_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib den Code ein.`)
};

const fr_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez le code.`)
};

const it_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci il codice.`)
};

const nl_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voer de code in.`)
};

const pl_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz kod.`)
};

const pt_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite o código.`)
};

const ru_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите код.`)
};

const sv_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange koden.`)
};

const tr_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kodu gir.`)
};

const zh_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入验证码。`)
};

const ja_settings_2fa_code_required = /** @type {(inputs: Settings_2fa_Code_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コードを入力してください。`)
};

/**
* | output |
* | --- |
* | "Enter the code." |
*
* @param {Settings_2fa_Code_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_code_required = /** @type {((inputs?: Settings_2fa_Code_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Code_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_code_required(inputs)
	if (locale === "de") return de_settings_2fa_code_required(inputs)
	if (locale === "fr") return fr_settings_2fa_code_required(inputs)
	if (locale === "it") return it_settings_2fa_code_required(inputs)
	if (locale === "nl") return nl_settings_2fa_code_required(inputs)
	if (locale === "pl") return pl_settings_2fa_code_required(inputs)
	if (locale === "pt") return pt_settings_2fa_code_required(inputs)
	if (locale === "ru") return ru_settings_2fa_code_required(inputs)
	if (locale === "sv") return sv_settings_2fa_code_required(inputs)
	if (locale === "tr") return tr_settings_2fa_code_required(inputs)
	if (locale === "zh") return zh_settings_2fa_code_required(inputs)
	if (locale === "ja") return ja_settings_2fa_code_required(inputs)
	return en_settings_2fa_code_required(inputs)
});
