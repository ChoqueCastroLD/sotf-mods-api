/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Error_Two_FactorInputs */

const en_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This account uses two-factor authentication. Log in with your password and code, then link Discord in Settings.`)
};

const es_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta cuenta usa verificación en dos pasos. Inicia sesión con tu contraseña y tu código, y luego vincula Discord en Ajustes.`)
};

const de_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Konto nutzt die Zwei-Faktor-Authentifizierung. Melde dich mit Passwort und Code an und verknüpfe Discord dann in den Einstellungen.`)
};

const fr_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce compte utilise l’authentification à deux facteurs. Connectez-vous avec votre mot de passe et votre code, puis liez Discord dans les paramètres.`)
};

const it_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo account usa l’autenticazione a due fattori. Accedi con password e codice, poi collega Discord nelle impostazioni.`)
};

const nl_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit account gebruikt tweestapsverificatie. Log in met je wachtwoord en code en koppel Discord daarna in de instellingen.`)
};

const pl_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To konto używa uwierzytelniania dwuskładnikowego. Zaloguj się hasłem i kodem, a potem połącz Discord w ustawieniach.`)
};

const pt_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta conta usa autenticação em duas etapas. Entre com a senha e o código, e depois vincule o Discord nas configurações.`)
};

const ru_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот аккаунт защищён двухфакторной аутентификацией. Войдите с паролем и кодом, а затем привяжите Discord в настройках.`)
};

const sv_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här kontot använder tvåfaktorsautentisering. Logga in med lösenord och kod och koppla sedan Discord i inställningarna.`)
};

const tr_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu hesap iki adımlı doğrulama kullanıyor. Parolan ve kodunla giriş yap, ardından Discord’u ayarlardan bağla.`)
};

const zh_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该账号已启用两步验证。请先用密码和验证码登录，然后在设置中关联 Discord。`)
};

const ja_oauth_error_two_factor = /** @type {(inputs: Oauth_Error_Two_FactorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアカウントは二段階認証を使用しています。パスワードと認証コードでログインし、設定から Discord を連携してください。`)
};

/**
* | output |
* | --- |
* | "This account uses two-factor authentication. Log in with your password and code, then link Discord in Settings." |
*
* @param {Oauth_Error_Two_FactorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_error_two_factor = /** @type {((inputs?: Oauth_Error_Two_FactorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Error_Two_FactorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_error_two_factor(inputs)
	if (locale === "de") return de_oauth_error_two_factor(inputs)
	if (locale === "fr") return fr_oauth_error_two_factor(inputs)
	if (locale === "it") return it_oauth_error_two_factor(inputs)
	if (locale === "nl") return nl_oauth_error_two_factor(inputs)
	if (locale === "pl") return pl_oauth_error_two_factor(inputs)
	if (locale === "pt") return pt_oauth_error_two_factor(inputs)
	if (locale === "ru") return ru_oauth_error_two_factor(inputs)
	if (locale === "sv") return sv_oauth_error_two_factor(inputs)
	if (locale === "tr") return tr_oauth_error_two_factor(inputs)
	if (locale === "zh") return zh_oauth_error_two_factor(inputs)
	if (locale === "ja") return ja_oauth_error_two_factor(inputs)
	return en_oauth_error_two_factor(inputs)
});
