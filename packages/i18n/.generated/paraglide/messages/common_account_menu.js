/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Account_MenuInputs */

const en_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account menu`)
};

const es_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menú de la cuenta`)
};

const de_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontomenü`)
};

const fr_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menu du compte`)
};

const it_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menu dell’account`)
};

const nl_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accountmenu`)
};

const pl_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menu konta`)
};

const pt_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menu da conta`)
};

const ru_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Меню аккаунта`)
};

const sv_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontomeny`)
};

const tr_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap menüsü`)
};

const zh_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账号菜单`)
};

const ja_common_account_menu = /** @type {(inputs: Common_Account_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントメニュー`)
};

/**
* | output |
* | --- |
* | "Account menu" |
*
* @param {Common_Account_MenuInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_account_menu = /** @type {((inputs?: Common_Account_MenuInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Account_MenuInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_account_menu(inputs)
	if (locale === "de") return de_common_account_menu(inputs)
	if (locale === "fr") return fr_common_account_menu(inputs)
	if (locale === "it") return it_common_account_menu(inputs)
	if (locale === "nl") return nl_common_account_menu(inputs)
	if (locale === "pl") return pl_common_account_menu(inputs)
	if (locale === "pt") return pt_common_account_menu(inputs)
	if (locale === "ru") return ru_common_account_menu(inputs)
	if (locale === "sv") return sv_common_account_menu(inputs)
	if (locale === "tr") return tr_common_account_menu(inputs)
	if (locale === "zh") return zh_common_account_menu(inputs)
	if (locale === "ja") return ja_common_account_menu(inputs)
	return en_common_account_menu(inputs)
});
