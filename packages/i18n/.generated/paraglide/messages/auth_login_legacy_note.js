/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Login_Legacy_NoteInputs */

const en_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Had an account before the rebuild? Your password still works.`)
};

const es_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Tenías cuenta antes de la renovación? Tu contraseña sigue funcionando.`)
};

const de_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hattest schon vor dem Umbau ein Konto? Dein Passwort funktioniert weiterhin.`)
};

const fr_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous aviez un compte avant la refonte ? Votre mot de passe fonctionne toujours.`)
};

const it_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avevi un account prima del rinnovamento? La tua password funziona ancora.`)
};

const nl_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Had je al een account vóór de vernieuwing? Je wachtwoord werkt nog steeds.`)
};

const pl_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Miałeś konto przed przebudową? Twoje hasło nadal działa.`)
};

const pt_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tinha conta antes da reconstrução? Sua senha continua funcionando.`)
};

const ru_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Был аккаунт до обновления сайта? Ваш пароль по-прежнему работает.`)
};

const sv_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hade du ett konto före ombyggnaden? Ditt lösenord fungerar fortfarande.`)
};

const tr_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yenilemeden önce hesabın var mıydı? Şifren hâlâ geçerli.`)
};

const zh_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在改版前就有账号？你的密码依然有效。`)
};

const ja_auth_login_legacy_note = /** @type {(inputs: Auth_Login_Legacy_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リニューアル前からアカウントをお持ちですか？パスワードはそのまま使えます。`)
};

/**
* | output |
* | --- |
* | "Had an account before the rebuild? Your password still works." |
*
* @param {Auth_Login_Legacy_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_legacy_note = /** @type {((inputs?: Auth_Login_Legacy_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_Legacy_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_legacy_note(inputs)
	if (locale === "de") return de_auth_login_legacy_note(inputs)
	if (locale === "fr") return fr_auth_login_legacy_note(inputs)
	if (locale === "it") return it_auth_login_legacy_note(inputs)
	if (locale === "nl") return nl_auth_login_legacy_note(inputs)
	if (locale === "pl") return pl_auth_login_legacy_note(inputs)
	if (locale === "pt") return pt_auth_login_legacy_note(inputs)
	if (locale === "ru") return ru_auth_login_legacy_note(inputs)
	if (locale === "sv") return sv_auth_login_legacy_note(inputs)
	if (locale === "tr") return tr_auth_login_legacy_note(inputs)
	if (locale === "zh") return zh_auth_login_legacy_note(inputs)
	if (locale === "ja") return ja_auth_login_legacy_note(inputs)
	return en_auth_login_legacy_note(inputs)
});
