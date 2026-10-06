/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Account_HintInputs */

const en_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Login email and password.`)
};

const es_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correo de acceso y contraseña.`)
};

const de_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmelde-E-Mail und Passwort.`)
};

const fr_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail de connexion et mot de passe.`)
};

const it_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email di accesso e password.`)
};

const nl_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inlog-e-mailadres en wachtwoord.`)
};

const pl_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail do logowania i hasło.`)
};

const pt_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail de acesso e senha.`)
};

const ru_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Почта для входа и пароль.`)
};

const sv_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggningsadress och lösenord.`)
};

const tr_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş e-postası ve şifre.`)
};

const zh_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录邮箱和密码。`)
};

const ja_settings_account_hint = /** @type {(inputs: Settings_Account_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン用メールアドレスとパスワード。`)
};

/**
* | output |
* | --- |
* | "Login email and password." |
*
* @param {Settings_Account_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_account_hint = /** @type {((inputs?: Settings_Account_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Account_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_account_hint(inputs)
	if (locale === "de") return de_settings_account_hint(inputs)
	if (locale === "fr") return fr_settings_account_hint(inputs)
	if (locale === "it") return it_settings_account_hint(inputs)
	if (locale === "nl") return nl_settings_account_hint(inputs)
	if (locale === "pl") return pl_settings_account_hint(inputs)
	if (locale === "pt") return pt_settings_account_hint(inputs)
	if (locale === "ru") return ru_settings_account_hint(inputs)
	if (locale === "sv") return sv_settings_account_hint(inputs)
	if (locale === "tr") return tr_settings_account_hint(inputs)
	if (locale === "zh") return zh_settings_account_hint(inputs)
	if (locale === "ja") return ja_settings_account_hint(inputs)
	return en_settings_account_hint(inputs)
});
