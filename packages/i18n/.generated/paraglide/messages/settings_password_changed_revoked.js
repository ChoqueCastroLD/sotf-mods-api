/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Password_Changed_RevokedInputs */

const en_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password changed and other devices logged out`)
};

const es_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contraseña cambiada y sesión cerrada en los otros dispositivos`)
};

const de_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort geändert und andere Geräte abgemeldet`)
};

const fr_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mot de passe modifié et autres appareils déconnectés`)
};

const it_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password cambiata e altri dispositivi disconnessi`)
};

const nl_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord gewijzigd en andere apparaten uitgelogd`)
};

const pl_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmieniono hasło i wylogowano pozostałe urządzenia`)
};

const pt_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senha alterada e outros dispositivos desconectados`)
};

const ru_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пароль изменён, выполнен выход на других устройствах`)
};

const sv_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösenordet har bytts och andra enheter har loggats ut`)
};

const tr_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifre değiştirildi ve diğer cihazlardan çıkış yapıldı`)
};

const zh_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密码已更改，其他设备已退出登录`)
};

const ja_settings_password_changed_revoked = /** @type {(inputs: Settings_Password_Changed_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードを変更し、他のデバイスからログアウトしました`)
};

/**
* | output |
* | --- |
* | "Password changed and other devices logged out" |
*
* @param {Settings_Password_Changed_RevokedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_changed_revoked = /** @type {((inputs?: Settings_Password_Changed_RevokedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_Changed_RevokedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_changed_revoked(inputs)
	if (locale === "de") return de_settings_password_changed_revoked(inputs)
	if (locale === "fr") return fr_settings_password_changed_revoked(inputs)
	if (locale === "it") return it_settings_password_changed_revoked(inputs)
	if (locale === "nl") return nl_settings_password_changed_revoked(inputs)
	if (locale === "pl") return pl_settings_password_changed_revoked(inputs)
	if (locale === "pt") return pt_settings_password_changed_revoked(inputs)
	if (locale === "ru") return ru_settings_password_changed_revoked(inputs)
	if (locale === "sv") return sv_settings_password_changed_revoked(inputs)
	if (locale === "tr") return tr_settings_password_changed_revoked(inputs)
	if (locale === "zh") return zh_settings_password_changed_revoked(inputs)
	if (locale === "ja") return ja_settings_password_changed_revoked(inputs)
	return en_settings_password_changed_revoked(inputs)
});
