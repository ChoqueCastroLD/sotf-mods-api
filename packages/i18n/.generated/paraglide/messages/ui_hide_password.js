/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Hide_PasswordInputs */

const en_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide password`)
};

const es_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar contraseña`)
};

const de_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort verbergen`)
};

const fr_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer le mot de passe`)
};

const it_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi password`)
};

const nl_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord verbergen`)
};

const pl_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj hasło`)
};

const pt_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar senha`)
};

const ru_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть пароль`)
};

const sv_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj lösenord`)
};

const tr_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifreyi gizle`)
};

const zh_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏密码`)
};

const ja_ui_hide_password = /** @type {(inputs: Ui_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードを隠す`)
};

/**
* | output |
* | --- |
* | "Hide password" |
*
* @param {Ui_Hide_PasswordInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_hide_password = /** @type {((inputs?: Ui_Hide_PasswordInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Hide_PasswordInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_hide_password(inputs)
	if (locale === "de") return de_ui_hide_password(inputs)
	if (locale === "fr") return fr_ui_hide_password(inputs)
	if (locale === "it") return it_ui_hide_password(inputs)
	if (locale === "nl") return nl_ui_hide_password(inputs)
	if (locale === "pl") return pl_ui_hide_password(inputs)
	if (locale === "pt") return pt_ui_hide_password(inputs)
	if (locale === "ru") return ru_ui_hide_password(inputs)
	if (locale === "sv") return sv_ui_hide_password(inputs)
	if (locale === "tr") return tr_ui_hide_password(inputs)
	if (locale === "zh") return zh_ui_hide_password(inputs)
	if (locale === "ja") return ja_ui_hide_password(inputs)
	return en_ui_hide_password(inputs)
});
