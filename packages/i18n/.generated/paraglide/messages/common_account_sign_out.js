/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Account_Sign_OutInputs */

const en_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log out`)
};

const es_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar sesión`)
};

const de_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abmelden`)
};

const fr_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se déconnecter`)
};

const it_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esci`)
};

const nl_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitloggen`)
};

const pl_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyloguj się`)
};

const pt_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair`)
};

const ru_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти`)
};

const sv_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut`)
};

const tr_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkış yap`)
};

const zh_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退出登录`)
};

const ja_common_account_sign_out = /** @type {(inputs: Common_Account_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログアウト`)
};

/**
* | output |
* | --- |
* | "Log out" |
*
* @param {Common_Account_Sign_OutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_account_sign_out = /** @type {((inputs?: Common_Account_Sign_OutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Account_Sign_OutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_account_sign_out(inputs)
	if (locale === "de") return de_common_account_sign_out(inputs)
	if (locale === "fr") return fr_common_account_sign_out(inputs)
	if (locale === "it") return it_common_account_sign_out(inputs)
	if (locale === "nl") return nl_common_account_sign_out(inputs)
	if (locale === "pl") return pl_common_account_sign_out(inputs)
	if (locale === "pt") return pt_common_account_sign_out(inputs)
	if (locale === "ru") return ru_common_account_sign_out(inputs)
	if (locale === "sv") return sv_common_account_sign_out(inputs)
	if (locale === "tr") return tr_common_account_sign_out(inputs)
	if (locale === "zh") return zh_common_account_sign_out(inputs)
	if (locale === "ja") return ja_common_account_sign_out(inputs)
	return en_common_account_sign_out(inputs)
});
