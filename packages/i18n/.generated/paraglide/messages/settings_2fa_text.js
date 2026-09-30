/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_TextInputs */

const en_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use an authenticator app so a stolen password is not enough to sign in.`)
};

const es_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa una app de autenticación para que una contraseña robada no baste para iniciar sesión.`)
};

const de_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutze eine Authenticator-App, damit ein gestohlenes Passwort zur Anmeldung nicht ausreicht.`)
};

const fr_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez une application d’authentification pour qu’un mot de passe volé ne suffise pas à se connecter.`)
};

const it_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa un’app di autenticazione così una password rubata non basta per accedere.`)
};

const nl_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik een authenticator-app, zodat een gestolen wachtwoord niet genoeg is om in te loggen.`)
};

const pl_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj aplikacji uwierzytelniającej, aby skradzione hasło nie wystarczyło do zalogowania.`)
};

const pt_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use um app autenticador para que uma senha roubada não seja suficiente para entrar.`)
};

const ru_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте приложение-аутентификатор, чтобы украденного пароля было недостаточно для входа.`)
};

const sv_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd en autentiseringsapp så att ett stulet lösenord inte räcker för att logga in.`)
};

const tr_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalınan bir şifrenin girişe yetmemesi için bir kimlik doğrulayıcı uygulama kullan.`)
};

const zh_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用验证器应用，这样即使密码被盗也无法登录。`)
};

const ja_settings_2fa_text = /** @type {(inputs: Settings_2fa_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証アプリを使えば、パスワードが盗まれてもログインされません。`)
};

/**
* | output |
* | --- |
* | "Use an authenticator app so a stolen password is not enough to sign in." |
*
* @param {Settings_2fa_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_text = /** @type {((inputs?: Settings_2fa_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_text(inputs)
	if (locale === "de") return de_settings_2fa_text(inputs)
	if (locale === "fr") return fr_settings_2fa_text(inputs)
	if (locale === "it") return it_settings_2fa_text(inputs)
	if (locale === "nl") return nl_settings_2fa_text(inputs)
	if (locale === "pl") return pl_settings_2fa_text(inputs)
	if (locale === "pt") return pt_settings_2fa_text(inputs)
	if (locale === "ru") return ru_settings_2fa_text(inputs)
	if (locale === "sv") return sv_settings_2fa_text(inputs)
	if (locale === "tr") return tr_settings_2fa_text(inputs)
	if (locale === "zh") return zh_settings_2fa_text(inputs)
	if (locale === "ja") return ja_settings_2fa_text(inputs)
	return en_settings_2fa_text(inputs)
});
