/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_TakenInputs */

const en_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That address can’t be used. Try another one.`)
};

const es_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se puede usar esa dirección. Prueba con otra.`)
};

const de_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Adresse kann nicht verwendet werden. Versuch eine andere.`)
};

const fr_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette adresse ne peut pas être utilisée. Essayez-en une autre.`)
};

const it_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo indirizzo non si può usare. Provane un altro.`)
};

const nl_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat adres kan niet worden gebruikt. Probeer een ander.`)
};

const pl_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tego adresu nie można użyć. Spróbuj innego.`)
};

const pt_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esse endereço não pode ser usado. Tente outro.`)
};

const ru_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот адрес нельзя использовать. Попробуйте другой.`)
};

const sv_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den adressen kan inte användas. Prova en annan.`)
};

const tr_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu adres kullanılamıyor. Başka birini dene.`)
};

const zh_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该地址无法使用。请换一个。`)
};

const ja_settings_email_taken = /** @type {(inputs: Settings_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアドレスは使用できません。別のアドレスをお試しください。`)
};

/**
* | output |
* | --- |
* | "That address can’t be used. Try another one." |
*
* @param {Settings_Email_TakenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_taken = /** @type {((inputs?: Settings_Email_TakenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_TakenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_taken(inputs)
	if (locale === "de") return de_settings_email_taken(inputs)
	if (locale === "fr") return fr_settings_email_taken(inputs)
	if (locale === "it") return it_settings_email_taken(inputs)
	if (locale === "nl") return nl_settings_email_taken(inputs)
	if (locale === "pl") return pl_settings_email_taken(inputs)
	if (locale === "pt") return pt_settings_email_taken(inputs)
	if (locale === "ru") return ru_settings_email_taken(inputs)
	if (locale === "sv") return sv_settings_email_taken(inputs)
	if (locale === "tr") return tr_settings_email_taken(inputs)
	if (locale === "zh") return zh_settings_email_taken(inputs)
	if (locale === "ja") return ja_settings_email_taken(inputs)
	return en_settings_email_taken(inputs)
});
