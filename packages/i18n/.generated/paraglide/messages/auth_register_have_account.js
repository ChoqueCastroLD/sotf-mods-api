/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Register_Have_AccountInputs */

const en_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Already have an account?`)
};

const es_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Ya tienes cuenta?`)
};

const de_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast schon ein Konto?`)
};

const fr_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez déjà un compte ?`)
};

const it_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai già un account?`)
};

const nl_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heb je al een account?`)
};

const pl_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masz już konto?`)
};

const pt_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Já tem uma conta?`)
};

const ru_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уже есть аккаунт?`)
};

const sv_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Har du redan ett konto?`)
};

const tr_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaten hesabın var mı?`)
};

const zh_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已有账号？`)
};

const ja_auth_register_have_account = /** @type {(inputs: Auth_Register_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントをお持ちの方は`)
};

/**
* | output |
* | --- |
* | "Already have an account?" |
*
* @param {Auth_Register_Have_AccountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_register_have_account = /** @type {((inputs?: Auth_Register_Have_AccountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Register_Have_AccountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_register_have_account(inputs)
	if (locale === "de") return de_auth_register_have_account(inputs)
	if (locale === "fr") return fr_auth_register_have_account(inputs)
	if (locale === "it") return it_auth_register_have_account(inputs)
	if (locale === "nl") return nl_auth_register_have_account(inputs)
	if (locale === "pl") return pl_auth_register_have_account(inputs)
	if (locale === "pt") return pt_auth_register_have_account(inputs)
	if (locale === "ru") return ru_auth_register_have_account(inputs)
	if (locale === "sv") return sv_auth_register_have_account(inputs)
	if (locale === "tr") return tr_auth_register_have_account(inputs)
	if (locale === "zh") return zh_auth_register_have_account(inputs)
	if (locale === "ja") return ja_auth_register_have_account(inputs)
	return en_auth_register_have_account(inputs)
});
