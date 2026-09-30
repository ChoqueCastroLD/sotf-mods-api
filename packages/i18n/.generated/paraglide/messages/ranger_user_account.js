/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_AccountInputs */

const en_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
};

const es_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuenta`)
};

const de_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto`)
};

const fr_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compte`)
};

const it_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
};

const nl_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
};

const pl_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto`)
};

const pt_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conta`)
};

const ru_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аккаунт`)
};

const sv_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto`)
};

const tr_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap`)
};

const zh_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账号`)
};

const ja_ranger_user_account = /** @type {(inputs: Ranger_User_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウント`)
};

/**
* | output |
* | --- |
* | "Account" |
*
* @param {Ranger_User_AccountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_account = /** @type {((inputs?: Ranger_User_AccountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_AccountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_account(inputs)
	if (locale === "de") return de_ranger_user_account(inputs)
	if (locale === "fr") return fr_ranger_user_account(inputs)
	if (locale === "it") return it_ranger_user_account(inputs)
	if (locale === "nl") return nl_ranger_user_account(inputs)
	if (locale === "pl") return pl_ranger_user_account(inputs)
	if (locale === "pt") return pt_ranger_user_account(inputs)
	if (locale === "ru") return ru_ranger_user_account(inputs)
	if (locale === "sv") return sv_ranger_user_account(inputs)
	if (locale === "tr") return tr_ranger_user_account(inputs)
	if (locale === "zh") return zh_ranger_user_account(inputs)
	if (locale === "ja") return ja_ranger_user_account(inputs)
	return en_ranger_user_account(inputs)
});
