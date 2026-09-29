/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Invalid_Credentials_TitleInputs */

const en_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wrong sign-in details`)
};

const es_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datos de acceso incorrectos`)
};

const de_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmeldedaten falsch`)
};

const fr_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identifiants incorrects`)
};

const it_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dati di accesso errati`)
};

const nl_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onjuiste inloggegevens`)
};

const pl_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieprawidłowe dane logowania`)
};

const pt_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dados de acesso incorretos`)
};

const ru_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неверные данные для входа`)
};

const sv_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fel inloggningsuppgifter`)
};

const tr_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş bilgileri hatalı`)
};

const zh_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录信息有误`)
};

const ja_errors_code_invalid_credentials_title = /** @type {(inputs: Errors_Code_Invalid_Credentials_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン情報が正しくありません`)
};

/**
* | output |
* | --- |
* | "Wrong sign-in details" |
*
* @param {Errors_Code_Invalid_Credentials_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_invalid_credentials_title = /** @type {((inputs?: Errors_Code_Invalid_Credentials_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Invalid_Credentials_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_invalid_credentials_title(inputs)
	if (locale === "de") return de_errors_code_invalid_credentials_title(inputs)
	if (locale === "fr") return fr_errors_code_invalid_credentials_title(inputs)
	if (locale === "it") return it_errors_code_invalid_credentials_title(inputs)
	if (locale === "nl") return nl_errors_code_invalid_credentials_title(inputs)
	if (locale === "pl") return pl_errors_code_invalid_credentials_title(inputs)
	if (locale === "pt") return pt_errors_code_invalid_credentials_title(inputs)
	if (locale === "ru") return ru_errors_code_invalid_credentials_title(inputs)
	if (locale === "sv") return sv_errors_code_invalid_credentials_title(inputs)
	if (locale === "tr") return tr_errors_code_invalid_credentials_title(inputs)
	if (locale === "zh") return zh_errors_code_invalid_credentials_title(inputs)
	if (locale === "ja") return ja_errors_code_invalid_credentials_title(inputs)
	return en_errors_code_invalid_credentials_title(inputs)
});
