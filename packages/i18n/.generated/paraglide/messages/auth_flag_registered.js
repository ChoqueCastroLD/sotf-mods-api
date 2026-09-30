/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Flag_RegisteredInputs */

const en_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account created. Sign in to continue.`)
};

const es_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuenta creada. Inicia sesión para continuar.`)
};

const de_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto erstellt. Melde dich an, um fortzufahren.`)
};

const fr_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compte créé. Connectez-vous pour continuer.`)
};

const it_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account creato. Accedi per continuare.`)
};

const nl_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account aangemaakt. Log in om verder te gaan.`)
};

const pl_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto utworzone. Zaloguj się, aby kontynuować.`)
};

const pt_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conta criada. Entre para continuar.`)
};

const ru_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аккаунт создан. Войдите, чтобы продолжить.`)
};

const sv_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontot är skapat. Logga in för att fortsätta.`)
};

const tr_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap oluşturuldu. Devam etmek için giriş yap.`)
};

const zh_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账号已创建。请登录以继续。`)
};

const ja_auth_flag_registered = /** @type {(inputs: Auth_Flag_RegisteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントを作成しました。ログインして続けてください。`)
};

/**
* | output |
* | --- |
* | "Account created. Sign in to continue." |
*
* @param {Auth_Flag_RegisteredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_flag_registered = /** @type {((inputs?: Auth_Flag_RegisteredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Flag_RegisteredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_flag_registered(inputs)
	if (locale === "de") return de_auth_flag_registered(inputs)
	if (locale === "fr") return fr_auth_flag_registered(inputs)
	if (locale === "it") return it_auth_flag_registered(inputs)
	if (locale === "nl") return nl_auth_flag_registered(inputs)
	if (locale === "pl") return pl_auth_flag_registered(inputs)
	if (locale === "pt") return pt_auth_flag_registered(inputs)
	if (locale === "ru") return ru_auth_flag_registered(inputs)
	if (locale === "sv") return sv_auth_flag_registered(inputs)
	if (locale === "tr") return tr_auth_flag_registered(inputs)
	if (locale === "zh") return zh_auth_flag_registered(inputs)
	if (locale === "ja") return ja_auth_flag_registered(inputs)
	return en_auth_flag_registered(inputs)
});
