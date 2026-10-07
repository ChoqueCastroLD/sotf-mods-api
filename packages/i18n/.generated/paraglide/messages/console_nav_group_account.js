/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_Group_AccountInputs */

const en_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account`)
};

const es_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu cuenta`)
};

const de_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Konto`)
};

const fr_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre compte`)
};

const it_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo account`)
};

const nl_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je account`)
};

const pl_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje konto`)
};

const pt_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua conta`)
};

const ru_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш аккаунт`)
};

const sv_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt konto`)
};

const tr_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabınız`)
};

const zh_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的账号`)
};

const ja_console_nav_group_account = /** @type {(inputs: Console_Nav_Group_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウント`)
};

/**
* | output |
* | --- |
* | "Your account" |
*
* @param {Console_Nav_Group_AccountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_group_account = /** @type {((inputs?: Console_Nav_Group_AccountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_Group_AccountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_group_account(inputs)
	if (locale === "de") return de_console_nav_group_account(inputs)
	if (locale === "fr") return fr_console_nav_group_account(inputs)
	if (locale === "it") return it_console_nav_group_account(inputs)
	if (locale === "nl") return nl_console_nav_group_account(inputs)
	if (locale === "pl") return pl_console_nav_group_account(inputs)
	if (locale === "pt") return pt_console_nav_group_account(inputs)
	if (locale === "ru") return ru_console_nav_group_account(inputs)
	if (locale === "sv") return sv_console_nav_group_account(inputs)
	if (locale === "tr") return tr_console_nav_group_account(inputs)
	if (locale === "zh") return zh_console_nav_group_account(inputs)
	if (locale === "ja") return ja_console_nav_group_account(inputs)
	return en_console_nav_group_account(inputs)
});
