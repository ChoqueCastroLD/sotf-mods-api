/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Twofactor_TextInputs */

const en_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter the code from your authenticator app to finish signing in.`)
};

const es_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introduce el código de tu app de autenticación para terminar de iniciar sesión.`)
};

const de_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib den Code aus deiner Authenticator-App ein, um die Anmeldung abzuschließen.`)
};

const fr_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez le code de votre application d’authentification pour terminer la connexion.`)
};

const it_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci il codice della tua app di autenticazione per completare l’accesso.`)
};

const nl_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voer de code uit je authenticator-app in om het inloggen af te ronden.`)
};

const pl_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz kod z aplikacji uwierzytelniającej, aby dokończyć logowanie.`)
};

const pt_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite o código do seu app autenticador para concluir o login.`)
};

const ru_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите код из приложения-аутентификатора, чтобы завершить вход.`)
};

const sv_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange koden från din autentiseringsapp för att slutföra inloggningen.`)
};

const tr_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Girişi tamamlamak için kimlik doğrulayıcı uygulamandaki kodu gir.`)
};

const zh_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入验证器应用中的验证码以完成登录。`)
};

const ja_auth_twofactor_text = /** @type {(inputs: Auth_Twofactor_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証アプリのコードを入力して、ログインを完了してください。`)
};

/**
* | output |
* | --- |
* | "Enter the code from your authenticator app to finish signing in." |
*
* @param {Auth_Twofactor_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_twofactor_text = /** @type {((inputs?: Auth_Twofactor_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Twofactor_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_twofactor_text(inputs)
	if (locale === "de") return de_auth_twofactor_text(inputs)
	if (locale === "fr") return fr_auth_twofactor_text(inputs)
	if (locale === "it") return it_auth_twofactor_text(inputs)
	if (locale === "nl") return nl_auth_twofactor_text(inputs)
	if (locale === "pl") return pl_auth_twofactor_text(inputs)
	if (locale === "pt") return pt_auth_twofactor_text(inputs)
	if (locale === "ru") return ru_auth_twofactor_text(inputs)
	if (locale === "sv") return sv_auth_twofactor_text(inputs)
	if (locale === "tr") return tr_auth_twofactor_text(inputs)
	if (locale === "zh") return zh_auth_twofactor_text(inputs)
	if (locale === "ja") return ja_auth_twofactor_text(inputs)
	return en_auth_twofactor_text(inputs)
});
