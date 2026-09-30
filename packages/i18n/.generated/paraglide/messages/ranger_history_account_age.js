/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_History_Account_AgeInputs */

const en_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account age`)
};

const es_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antigüedad de la cuenta`)
};

const de_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontoalter`)
};

const fr_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancienneté du compte`)
};

const it_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Età dell’account`)
};

const nl_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leeftijd van het account`)
};

const pl_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiek konta`)
};

const pt_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idade da conta`)
};

const ru_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Возраст аккаунта`)
};

const sv_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontots ålder`)
};

const tr_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap yaşı`)
};

const zh_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账号年龄`)
};

const ja_ranger_history_account_age = /** @type {(inputs: Ranger_History_Account_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウント歴`)
};

/**
* | output |
* | --- |
* | "Account age" |
*
* @param {Ranger_History_Account_AgeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_history_account_age = /** @type {((inputs?: Ranger_History_Account_AgeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_History_Account_AgeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_history_account_age(inputs)
	if (locale === "de") return de_ranger_history_account_age(inputs)
	if (locale === "fr") return fr_ranger_history_account_age(inputs)
	if (locale === "it") return it_ranger_history_account_age(inputs)
	if (locale === "nl") return nl_ranger_history_account_age(inputs)
	if (locale === "pl") return pl_ranger_history_account_age(inputs)
	if (locale === "pt") return pt_ranger_history_account_age(inputs)
	if (locale === "ru") return ru_ranger_history_account_age(inputs)
	if (locale === "sv") return sv_ranger_history_account_age(inputs)
	if (locale === "tr") return tr_ranger_history_account_age(inputs)
	if (locale === "zh") return zh_ranger_history_account_age(inputs)
	if (locale === "ja") return ja_ranger_history_account_age(inputs)
	return en_ranger_history_account_age(inputs)
});
