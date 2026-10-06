/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Nav_AccountInputs */

const en_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
};

const es_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuenta`)
};

const de_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto`)
};

const fr_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compte`)
};

const it_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
};

const nl_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
};

const pl_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto`)
};

const pt_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conta`)
};

const ru_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аккаунт`)
};

const sv_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto`)
};

const tr_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap`)
};

const zh_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账户`)
};

const ja_shell_nav_account = /** @type {(inputs: Shell_Nav_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウント`)
};

/**
* | output |
* | --- |
* | "Account" |
*
* @param {Shell_Nav_AccountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_nav_account = /** @type {((inputs?: Shell_Nav_AccountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Nav_AccountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_nav_account(inputs)
	if (locale === "de") return de_shell_nav_account(inputs)
	if (locale === "fr") return fr_shell_nav_account(inputs)
	if (locale === "it") return it_shell_nav_account(inputs)
	if (locale === "nl") return nl_shell_nav_account(inputs)
	if (locale === "pl") return pl_shell_nav_account(inputs)
	if (locale === "pt") return pt_shell_nav_account(inputs)
	if (locale === "ru") return ru_shell_nav_account(inputs)
	if (locale === "sv") return sv_shell_nav_account(inputs)
	if (locale === "tr") return tr_shell_nav_account(inputs)
	if (locale === "zh") return zh_shell_nav_account(inputs)
	if (locale === "ja") return ja_shell_nav_account(inputs)
	return en_shell_nav_account(inputs)
});
