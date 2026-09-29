/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Show_PasswordInputs */

const en_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show password`)
};

const es_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar contraseña`)
};

const de_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort anzeigen`)
};

const fr_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher le mot de passe`)
};

const it_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra password`)
};

const nl_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord tonen`)
};

const pl_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż hasło`)
};

const pt_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar senha`)
};

const ru_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать пароль`)
};

const sv_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa lösenord`)
};

const tr_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifreyi göster`)
};

const zh_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示密码`)
};

const ja_ui_show_password = /** @type {(inputs: Ui_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードを表示`)
};

/**
* | output |
* | --- |
* | "Show password" |
*
* @param {Ui_Show_PasswordInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_show_password = /** @type {((inputs?: Ui_Show_PasswordInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Show_PasswordInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_show_password(inputs)
	if (locale === "de") return de_ui_show_password(inputs)
	if (locale === "fr") return fr_ui_show_password(inputs)
	if (locale === "it") return it_ui_show_password(inputs)
	if (locale === "nl") return nl_ui_show_password(inputs)
	if (locale === "pl") return pl_ui_show_password(inputs)
	if (locale === "pt") return pt_ui_show_password(inputs)
	if (locale === "ru") return ru_ui_show_password(inputs)
	if (locale === "sv") return sv_ui_show_password(inputs)
	if (locale === "tr") return tr_ui_show_password(inputs)
	if (locale === "zh") return zh_ui_show_password(inputs)
	if (locale === "ja") return ja_ui_show_password(inputs)
	return en_ui_show_password(inputs)
});
