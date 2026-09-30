/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Password_MismatchInputs */

const en_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The two new passwords don’t match.`)
};

const es_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las dos contraseñas nuevas no coinciden.`)
};

const de_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die beiden neuen Passwörter stimmen nicht überein.`)
};

const fr_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les deux nouveaux mots de passe ne correspondent pas.`)
};

const it_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le due nuove password non coincidono.`)
};

const nl_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De twee nieuwe wachtwoorden komen niet overeen.`)
};

const pl_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe hasła nie są takie same.`)
};

const pt_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As duas novas senhas não coincidem.`)
};

const ru_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые пароли не совпадают.`)
};

const sv_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De två nya lösenorden stämmer inte överens.`)
};

const tr_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İki yeni şifre eşleşmiyor.`)
};

const zh_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`两次输入的新密码不一致。`)
};

const ja_settings_password_mismatch = /** @type {(inputs: Settings_Password_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいパスワードが一致しません。`)
};

/**
* | output |
* | --- |
* | "The two new passwords don’t match." |
*
* @param {Settings_Password_MismatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_mismatch = /** @type {((inputs?: Settings_Password_MismatchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_MismatchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_mismatch(inputs)
	if (locale === "de") return de_settings_password_mismatch(inputs)
	if (locale === "fr") return fr_settings_password_mismatch(inputs)
	if (locale === "it") return it_settings_password_mismatch(inputs)
	if (locale === "nl") return nl_settings_password_mismatch(inputs)
	if (locale === "pl") return pl_settings_password_mismatch(inputs)
	if (locale === "pt") return pt_settings_password_mismatch(inputs)
	if (locale === "ru") return ru_settings_password_mismatch(inputs)
	if (locale === "sv") return sv_settings_password_mismatch(inputs)
	if (locale === "tr") return tr_settings_password_mismatch(inputs)
	if (locale === "zh") return zh_settings_password_mismatch(inputs)
	if (locale === "ja") return ja_settings_password_mismatch(inputs)
	return en_settings_password_mismatch(inputs)
});
