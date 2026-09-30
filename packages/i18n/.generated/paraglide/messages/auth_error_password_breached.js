/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Password_BreachedInputs */

const en_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This password appeared in a data breach. Choose a different one.`)
};

const es_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta contraseña ha aparecido en una filtración de datos. Elige otra.`)
};

const de_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Passwort ist in einem Datenleck aufgetaucht. Wähl ein anderes.`)
};

const fr_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce mot de passe figure dans une fuite de données. Choisissez-en un autre.`)
};

const it_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa password è comparsa in una violazione di dati. Scegline un’altra.`)
};

const nl_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit wachtwoord is opgedoken in een datalek. Kies een ander.`)
};

const pl_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To hasło pojawiło się w wycieku danych. Wybierz inne.`)
};

const pt_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta senha apareceu em um vazamento de dados. Escolha outra.`)
};

const ru_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот пароль встречался в утечке данных. Выберите другой.`)
};

const sv_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösenordet har förekommit i en dataläcka. Välj ett annat.`)
};

const tr_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu şifre bir veri sızıntısında görüldü. Başka bir şifre seç.`)
};

const zh_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该密码曾出现在数据泄露中，请换一个。`)
};

const ja_auth_error_password_breached = /** @type {(inputs: Auth_Error_Password_BreachedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このパスワードはデータ漏えいで見つかっています。別のパスワードを選んでください。`)
};

/**
* | output |
* | --- |
* | "This password appeared in a data breach. Choose a different one." |
*
* @param {Auth_Error_Password_BreachedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_error_password_breached = /** @type {((inputs?: Auth_Error_Password_BreachedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Password_BreachedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_error_password_breached(inputs)
	if (locale === "de") return de_auth_error_password_breached(inputs)
	if (locale === "fr") return fr_auth_error_password_breached(inputs)
	if (locale === "it") return it_auth_error_password_breached(inputs)
	if (locale === "nl") return nl_auth_error_password_breached(inputs)
	if (locale === "pl") return pl_auth_error_password_breached(inputs)
	if (locale === "pt") return pt_auth_error_password_breached(inputs)
	if (locale === "ru") return ru_auth_error_password_breached(inputs)
	if (locale === "sv") return sv_auth_error_password_breached(inputs)
	if (locale === "tr") return tr_auth_error_password_breached(inputs)
	if (locale === "zh") return zh_auth_error_password_breached(inputs)
	if (locale === "ja") return ja_auth_error_password_breached(inputs)
	return en_auth_error_password_breached(inputs)
});
