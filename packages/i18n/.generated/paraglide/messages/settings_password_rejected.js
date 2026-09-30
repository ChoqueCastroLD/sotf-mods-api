/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Password_RejectedInputs */

const en_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This password appeared in a data breach. Choose a different one.`)
};

const es_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta contraseña ha aparecido en una filtración de datos. Elige otra.`)
};

const de_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Passwort ist in einem Datenleck aufgetaucht. Wähle ein anderes.`)
};

const fr_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce mot de passe apparaît dans une fuite de données. Choisissez-en un autre.`)
};

const it_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa password è comparsa in una violazione di dati. Scegline un’altra.`)
};

const nl_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit wachtwoord is opgedoken in een datalek. Kies een ander.`)
};

const pl_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To hasło pojawiło się w wycieku danych. Wybierz inne.`)
};

const pt_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta senha apareceu em um vazamento de dados. Escolha outra.`)
};

const ru_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот пароль встречался в утечке данных. Выберите другой.`)
};

const sv_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här lösenordet har förekommit i ett dataläckage. Välj ett annat.`)
};

const tr_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu şifre bir veri sızıntısında görüldü. Başka bir şifre seç.`)
};

const zh_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该密码曾出现在数据泄露中。请换一个。`)
};

const ja_settings_password_rejected = /** @type {(inputs: Settings_Password_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このパスワードはデータ漏えいで見つかっています。別のものを選んでください。`)
};

/**
* | output |
* | --- |
* | "This password appeared in a data breach. Choose a different one." |
*
* @param {Settings_Password_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_rejected = /** @type {((inputs?: Settings_Password_RejectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_RejectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_rejected(inputs)
	if (locale === "de") return de_settings_password_rejected(inputs)
	if (locale === "fr") return fr_settings_password_rejected(inputs)
	if (locale === "it") return it_settings_password_rejected(inputs)
	if (locale === "nl") return nl_settings_password_rejected(inputs)
	if (locale === "pl") return pl_settings_password_rejected(inputs)
	if (locale === "pt") return pt_settings_password_rejected(inputs)
	if (locale === "ru") return ru_settings_password_rejected(inputs)
	if (locale === "sv") return sv_settings_password_rejected(inputs)
	if (locale === "tr") return tr_settings_password_rejected(inputs)
	if (locale === "zh") return zh_settings_password_rejected(inputs)
	if (locale === "ja") return ja_settings_password_rejected(inputs)
	return en_settings_password_rejected(inputs)
});
