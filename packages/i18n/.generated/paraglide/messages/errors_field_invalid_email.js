/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Field_Invalid_EmailInputs */

const en_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a valid email address, like name@example.com.`)
};

const es_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe un email válido, como nombre@ejemplo.com.`)
};

const de_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib eine gültige E-Mail-Adresse ein, z. B. name@beispiel.de.`)
};

const fr_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez une adresse e-mail valide, comme nom@exemple.fr.`)
};

const it_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci un indirizzo email valido, come nome@esempio.it.`)
};

const nl_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vul een geldig e-mailadres in, zoals naam@voorbeeld.nl.`)
};

const pl_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podaj prawidłowy adres e-mail, np. nazwa@przyklad.pl.`)
};

const pt_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite um e-mail válido, como nome@exemplo.com.`)
};

const ru_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите корректный e-mail, например name@example.com.`)
};

const sv_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange en giltig e-postadress, till exempel namn@exempel.se.`)
};

const tr_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçerli bir e-posta adresi gir, örneğin ad@ornek.com.`)
};

const zh_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入有效的邮箱地址，例如 name@example.com。`)
};

const ja_errors_field_invalid_email = /** @type {(inputs: Errors_Field_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`name@example.com のような有効なメールアドレスを入力してください。`)
};

/**
* | output |
* | --- |
* | "Enter a valid email address, like name@example.com." |
*
* @param {Errors_Field_Invalid_EmailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_field_invalid_email = /** @type {((inputs?: Errors_Field_Invalid_EmailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Field_Invalid_EmailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_field_invalid_email(inputs)
	if (locale === "de") return de_errors_field_invalid_email(inputs)
	if (locale === "fr") return fr_errors_field_invalid_email(inputs)
	if (locale === "it") return it_errors_field_invalid_email(inputs)
	if (locale === "nl") return nl_errors_field_invalid_email(inputs)
	if (locale === "pl") return pl_errors_field_invalid_email(inputs)
	if (locale === "pt") return pt_errors_field_invalid_email(inputs)
	if (locale === "ru") return ru_errors_field_invalid_email(inputs)
	if (locale === "sv") return sv_errors_field_invalid_email(inputs)
	if (locale === "tr") return tr_errors_field_invalid_email(inputs)
	if (locale === "zh") return zh_errors_field_invalid_email(inputs)
	if (locale === "ja") return ja_errors_field_invalid_email(inputs)
	return en_errors_field_invalid_email(inputs)
});
