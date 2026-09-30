/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Password_ConfirmInputs */

const en_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Repeat the new password`)
};

const es_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Repite la contraseña nueva`)
};

const de_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Passwort wiederholen`)
};

const fr_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répétez le nouveau mot de passe`)
};

const it_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ripeti la nuova password`)
};

const nl_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herhaal het nieuwe wachtwoord`)
};

const pl_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powtórz nowe hasło`)
};

const pt_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Repita a nova senha`)
};

const ru_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторите новый пароль`)
};

const sv_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upprepa det nya lösenordet`)
};

const tr_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni şifreyi tekrarla`)
};

const zh_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再次输入新密码`)
};

const ja_settings_password_confirm = /** @type {(inputs: Settings_Password_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいパスワード（確認）`)
};

/**
* | output |
* | --- |
* | "Repeat the new password" |
*
* @param {Settings_Password_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_confirm = /** @type {((inputs?: Settings_Password_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_confirm(inputs)
	if (locale === "de") return de_settings_password_confirm(inputs)
	if (locale === "fr") return fr_settings_password_confirm(inputs)
	if (locale === "it") return it_settings_password_confirm(inputs)
	if (locale === "nl") return nl_settings_password_confirm(inputs)
	if (locale === "pl") return pl_settings_password_confirm(inputs)
	if (locale === "pt") return pt_settings_password_confirm(inputs)
	if (locale === "ru") return ru_settings_password_confirm(inputs)
	if (locale === "sv") return sv_settings_password_confirm(inputs)
	if (locale === "tr") return tr_settings_password_confirm(inputs)
	if (locale === "zh") return zh_settings_password_confirm(inputs)
	if (locale === "ja") return ja_settings_password_confirm(inputs)
	return en_settings_password_confirm(inputs)
});
