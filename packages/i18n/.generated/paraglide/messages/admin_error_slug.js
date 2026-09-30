/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Error_SlugInputs */

const en_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lowercase letters, digits and hyphens only (no hyphen at the ends).`)
};

const es_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo minúsculas, dígitos y guiones (sin guion al principio ni al final).`)
};

const de_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Kleinbuchstaben, Ziffern und Bindestriche (kein Bindestrich am Anfang oder Ende).`)
};

const fr_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minuscules, chiffres et tirets uniquement (pas de tiret au début ni à la fin).`)
};

const it_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo minuscole, cifre e trattini (niente trattino all’inizio o alla fine).`)
};

const nl_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen kleine letters, cijfers en koppeltekens (geen koppelteken aan begin of eind).`)
};

const pl_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko małe litery, cyfry i myślniki (bez myślnika na początku i końcu).`)
};

const pt_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apenas minúsculas, dígitos e hifens (sem hífen no início ou no fim).`)
};

const ru_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только строчные латинские буквы, цифры и дефисы (без дефиса в начале и в конце).`)
};

const sv_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast gemener, siffror och bindestreck (inget bindestreck först eller sist).`)
};

const tr_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca küçük harf, rakam ve tire (başta ve sonda tire olmadan).`)
};

const zh_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只能使用小写字母、数字和连字符（开头和结尾不能是连字符）。`)
};

const ja_admin_error_slug = /** @type {(inputs: Admin_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小文字の英字、数字、ハイフンのみ（先頭と末尾にハイフンは不可）。`)
};

/**
* | output |
* | --- |
* | "Lowercase letters, digits and hyphens only (no hyphen at the ends)." |
*
* @param {Admin_Error_SlugInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_error_slug = /** @type {((inputs?: Admin_Error_SlugInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Error_SlugInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_error_slug(inputs)
	if (locale === "de") return de_admin_error_slug(inputs)
	if (locale === "fr") return fr_admin_error_slug(inputs)
	if (locale === "it") return it_admin_error_slug(inputs)
	if (locale === "nl") return nl_admin_error_slug(inputs)
	if (locale === "pl") return pl_admin_error_slug(inputs)
	if (locale === "pt") return pt_admin_error_slug(inputs)
	if (locale === "ru") return ru_admin_error_slug(inputs)
	if (locale === "sv") return sv_admin_error_slug(inputs)
	if (locale === "tr") return tr_admin_error_slug(inputs)
	if (locale === "zh") return zh_admin_error_slug(inputs)
	if (locale === "ja") return ja_admin_error_slug(inputs)
	return en_admin_error_slug(inputs)
});
