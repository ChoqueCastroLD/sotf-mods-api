/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_AccountInputs */

const en_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
};

const es_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuenta`)
};

const de_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto`)
};

const fr_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compte`)
};

const it_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
};

const nl_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
};

const pl_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto`)
};

const pt_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conta`)
};

const ru_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аккаунт`)
};

const sv_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto`)
};

const tr_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap`)
};

const zh_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账户`)
};

const ja_console_nav_account = /** @type {(inputs: Console_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウント`)
};

/**
* | output |
* | --- |
* | "Account" |
*
* @param {Console_Nav_AccountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_account = /** @type {((inputs?: Console_Nav_AccountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_AccountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_account(inputs)
	if (locale === "de") return de_console_nav_account(inputs)
	if (locale === "fr") return fr_console_nav_account(inputs)
	if (locale === "it") return it_console_nav_account(inputs)
	if (locale === "nl") return nl_console_nav_account(inputs)
	if (locale === "pl") return pl_console_nav_account(inputs)
	if (locale === "pt") return pt_console_nav_account(inputs)
	if (locale === "ru") return ru_console_nav_account(inputs)
	if (locale === "sv") return sv_console_nav_account(inputs)
	if (locale === "tr") return tr_console_nav_account(inputs)
	if (locale === "zh") return zh_console_nav_account(inputs)
	if (locale === "ja") return ja_console_nav_account(inputs)
	return en_console_nav_account(inputs)
});
