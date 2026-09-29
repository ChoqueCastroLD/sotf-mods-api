/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Account_Sign_UpInputs */

const en_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create account`)
};

const es_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear cuenta`)
};

const de_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto erstellen`)
};

const fr_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer un compte`)
};

const it_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un account`)
};

const nl_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account aanmaken`)
};

const pl_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Załóż konto`)
};

const pt_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar conta`)
};

const ru_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создать аккаунт`)
};

const sv_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa konto`)
};

const tr_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap oluştur`)
};

const zh_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建账号`)
};

const ja_common_account_sign_up = /** @type {(inputs: Common_Account_Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウント作成`)
};

/**
* | output |
* | --- |
* | "Create account" |
*
* @param {Common_Account_Sign_UpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_account_sign_up = /** @type {((inputs?: Common_Account_Sign_UpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Account_Sign_UpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_account_sign_up(inputs)
	if (locale === "de") return de_common_account_sign_up(inputs)
	if (locale === "fr") return fr_common_account_sign_up(inputs)
	if (locale === "it") return it_common_account_sign_up(inputs)
	if (locale === "nl") return nl_common_account_sign_up(inputs)
	if (locale === "pl") return pl_common_account_sign_up(inputs)
	if (locale === "pt") return pt_common_account_sign_up(inputs)
	if (locale === "ru") return ru_common_account_sign_up(inputs)
	if (locale === "sv") return sv_common_account_sign_up(inputs)
	if (locale === "tr") return tr_common_account_sign_up(inputs)
	if (locale === "zh") return zh_common_account_sign_up(inputs)
	if (locale === "ja") return ja_common_account_sign_up(inputs)
	return en_common_account_sign_up(inputs)
});
