/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Error_SlugInputs */

const en_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use at least 3 lowercase letters, digits or hyphens.`)
};

const es_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa al menos 3 minúsculas, dígitos o guiones.`)
};

const de_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwende mindestens 3 Kleinbuchstaben, Ziffern oder Bindestriche.`)
};

const fr_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez au moins 3 minuscules, chiffres ou tirets.`)
};

const it_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa almeno 3 lettere minuscole, cifre o trattini.`)
};

const nl_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik minstens 3 kleine letters, cijfers of streepjes.`)
};

const pl_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj co najmniej 3 małych liter, cyfr lub myślników.`)
};

const pt_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use pelo menos 3 minúsculas, dígitos ou hifens.`)
};

const ru_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте не менее 3 строчных букв, цифр или дефисов.`)
};

const sv_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd minst 3 gemener, siffror eller bindestreck.`)
};

const tr_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En az 3 küçük harf, rakam veya tire kullanın.`)
};

const zh_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请至少使用 3 个小写字母、数字或连字符。`)
};

const ja_jams_admin_error_slug = /** @type {(inputs: Jams_Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小文字・数字・ハイフンを3文字以上使ってください。`)
};

/**
* | output |
* | --- |
* | "Use at least 3 lowercase letters, digits or hyphens." |
*
* @param {Jams_Admin_Error_SlugInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_error_slug = /** @type {((inputs?: Jams_Admin_Error_SlugInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Error_SlugInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_error_slug(inputs)
	if (locale === "de") return de_jams_admin_error_slug(inputs)
	if (locale === "fr") return fr_jams_admin_error_slug(inputs)
	if (locale === "it") return it_jams_admin_error_slug(inputs)
	if (locale === "nl") return nl_jams_admin_error_slug(inputs)
	if (locale === "pl") return pl_jams_admin_error_slug(inputs)
	if (locale === "pt") return pt_jams_admin_error_slug(inputs)
	if (locale === "ru") return ru_jams_admin_error_slug(inputs)
	if (locale === "sv") return sv_jams_admin_error_slug(inputs)
	if (locale === "tr") return tr_jams_admin_error_slug(inputs)
	if (locale === "zh") return zh_jams_admin_error_slug(inputs)
	if (locale === "ja") return ja_jams_admin_error_slug(inputs)
	return en_jams_admin_error_slug(inputs)
});
