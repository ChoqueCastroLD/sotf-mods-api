/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Login_Create_AccountInputs */

const en_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create an account`)
};

const es_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea una cuenta`)
};

const de_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto erstellen`)
};

const fr_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer un compte`)
};

const it_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un account`)
};

const nl_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak een account aan`)
};

const pl_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Załóż konto`)
};

const pt_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie uma conta`)
};

const ru_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создайте аккаунт`)
};

const sv_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa ett konto`)
};

const tr_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap oluştur`)
};

const zh_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建账号`)
};

const ja_auth_login_create_account = /** @type {(inputs: Auth_Login_Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントを作成`)
};

/**
* | output |
* | --- |
* | "Create an account" |
*
* @param {Auth_Login_Create_AccountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_create_account = /** @type {((inputs?: Auth_Login_Create_AccountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_Create_AccountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_create_account(inputs)
	if (locale === "de") return de_auth_login_create_account(inputs)
	if (locale === "fr") return fr_auth_login_create_account(inputs)
	if (locale === "it") return it_auth_login_create_account(inputs)
	if (locale === "nl") return nl_auth_login_create_account(inputs)
	if (locale === "pl") return pl_auth_login_create_account(inputs)
	if (locale === "pt") return pt_auth_login_create_account(inputs)
	if (locale === "ru") return ru_auth_login_create_account(inputs)
	if (locale === "sv") return sv_auth_login_create_account(inputs)
	if (locale === "tr") return tr_auth_login_create_account(inputs)
	if (locale === "zh") return zh_auth_login_create_account(inputs)
	if (locale === "ja") return ja_auth_login_create_account(inputs)
	return en_auth_login_create_account(inputs)
});
