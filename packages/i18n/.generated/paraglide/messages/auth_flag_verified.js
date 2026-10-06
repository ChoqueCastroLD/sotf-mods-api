/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Flag_VerifiedInputs */

const en_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email verified. Log in to continue.`)
};

const es_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email verificado. Inicia sesión para continuar.`)
};

const de_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail bestätigt. Melde dich an, um fortzufahren.`)
};

const fr_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail vérifié. Connectez-vous pour continuer.`)
};

const it_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email verificata. Accedi per continuare.`)
};

const nl_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mailadres bevestigd. Log in om verder te gaan.`)
};

const pl_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail potwierdzony. Zaloguj się, aby kontynuować.`)
};

const pt_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail confirmado. Entre para continuar.`)
};

const ru_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email подтверждён. Войдите, чтобы продолжить.`)
};

const sv_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posten är bekräftad. Logga in för att fortsätta.`)
};

const tr_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posta doğrulandı. Devam etmek için giriş yap.`)
};

const zh_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱已验证。请登录以继续。`)
};

const ja_auth_flag_verified = /** @type {(inputs: Auth_Flag_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスを確認しました。ログインして続けてください。`)
};

/**
* | output |
* | --- |
* | "Email verified. Log in to continue." |
*
* @param {Auth_Flag_VerifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_flag_verified = /** @type {((inputs?: Auth_Flag_VerifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Flag_VerifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_flag_verified(inputs)
	if (locale === "de") return de_auth_flag_verified(inputs)
	if (locale === "fr") return fr_auth_flag_verified(inputs)
	if (locale === "it") return it_auth_flag_verified(inputs)
	if (locale === "nl") return nl_auth_flag_verified(inputs)
	if (locale === "pl") return pl_auth_flag_verified(inputs)
	if (locale === "pt") return pt_auth_flag_verified(inputs)
	if (locale === "ru") return ru_auth_flag_verified(inputs)
	if (locale === "sv") return sv_auth_flag_verified(inputs)
	if (locale === "tr") return tr_auth_flag_verified(inputs)
	if (locale === "zh") return zh_auth_flag_verified(inputs)
	if (locale === "ja") return ja_auth_flag_verified(inputs)
	return en_auth_flag_verified(inputs)
});
