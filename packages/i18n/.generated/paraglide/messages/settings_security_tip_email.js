/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Security_Tip_EmailInputs */

const en_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We never ask for your password by email or on Discord.`)
};

const es_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nunca te pediremos la contraseña por correo ni por Discord.`)
};

const de_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir fragen nie per E-Mail oder auf Discord nach deinem Passwort.`)
};

const fr_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nous ne demandons jamais votre mot de passe par e-mail ni sur Discord.`)
};

const it_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ti chiediamo mai la password via email o su Discord.`)
};

const nl_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We vragen nooit om je wachtwoord via e-mail of Discord.`)
};

const pl_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nigdy nie prosimy o hasło e-mailem ani na Discordzie.`)
};

const pt_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nunca pedimos sua senha por e-mail nem no Discord.`)
};

const ru_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мы никогда не просим пароль по почте или в Discord.`)
};

const sv_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi ber aldrig om ditt lösenord via e-post eller Discord.`)
};

const tr_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifreni asla e-postayla ya da Discord’da istemeyiz.`)
};

const zh_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我们绝不会通过邮件或 Discord 索要你的密码。`)
};

const ja_settings_security_tip_email = /** @type {(inputs: Settings_Security_Tip_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールや Discord でパスワードを尋ねることは絶対にありません。`)
};

/**
* | output |
* | --- |
* | "We never ask for your password by email or on Discord." |
*
* @param {Settings_Security_Tip_EmailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_security_tip_email = /** @type {((inputs?: Settings_Security_Tip_EmailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Security_Tip_EmailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_security_tip_email(inputs)
	if (locale === "de") return de_settings_security_tip_email(inputs)
	if (locale === "fr") return fr_settings_security_tip_email(inputs)
	if (locale === "it") return it_settings_security_tip_email(inputs)
	if (locale === "nl") return nl_settings_security_tip_email(inputs)
	if (locale === "pl") return pl_settings_security_tip_email(inputs)
	if (locale === "pt") return pt_settings_security_tip_email(inputs)
	if (locale === "ru") return ru_settings_security_tip_email(inputs)
	if (locale === "sv") return sv_settings_security_tip_email(inputs)
	if (locale === "tr") return tr_settings_security_tip_email(inputs)
	if (locale === "zh") return zh_settings_security_tip_email(inputs)
	if (locale === "ja") return ja_settings_security_tip_email(inputs)
	return en_settings_security_tip_email(inputs)
});
