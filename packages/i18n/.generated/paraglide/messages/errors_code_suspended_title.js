/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Suspended_TitleInputs */

const en_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account suspended`)
};

const es_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuenta suspendida`)
};

const de_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto gesperrt`)
};

const fr_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compte suspendu`)
};

const it_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account sospeso`)
};

const nl_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account geschorst`)
};

const pl_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto zawieszone`)
};

const pt_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conta suspensa`)
};

const ru_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аккаунт заблокирован`)
};

const sv_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontot är avstängt`)
};

const tr_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap askıya alındı`)
};

const zh_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账号已被停用`)
};

const ja_errors_code_suspended_title = /** @type {(inputs: Errors_Code_Suspended_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントが停止されています`)
};

/**
* | output |
* | --- |
* | "Account suspended" |
*
* @param {Errors_Code_Suspended_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_suspended_title = /** @type {((inputs?: Errors_Code_Suspended_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Suspended_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_suspended_title(inputs)
	if (locale === "de") return de_errors_code_suspended_title(inputs)
	if (locale === "fr") return fr_errors_code_suspended_title(inputs)
	if (locale === "it") return it_errors_code_suspended_title(inputs)
	if (locale === "nl") return nl_errors_code_suspended_title(inputs)
	if (locale === "pl") return pl_errors_code_suspended_title(inputs)
	if (locale === "pt") return pt_errors_code_suspended_title(inputs)
	if (locale === "ru") return ru_errors_code_suspended_title(inputs)
	if (locale === "sv") return sv_errors_code_suspended_title(inputs)
	if (locale === "tr") return tr_errors_code_suspended_title(inputs)
	if (locale === "zh") return zh_errors_code_suspended_title(inputs)
	if (locale === "ja") return ja_errors_code_suspended_title(inputs)
	return en_errors_code_suspended_title(inputs)
});
