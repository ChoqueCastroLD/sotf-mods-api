/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Flags_Error_KeyInputs */

const en_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use 1–60 letters, digits, dots, hyphens or underscores.`)
};

const es_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa de 1 a 60 letras, dígitos, puntos, guiones o guiones bajos.`)
};

const de_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutze 1–60 Buchstaben, Ziffern, Punkte, Binde- oder Unterstriche.`)
};

const fr_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez 1 à 60 lettres, chiffres, points, tirets ou tirets bas.`)
};

const it_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa da 1 a 60 lettere, cifre, punti, trattini o trattini bassi.`)
};

const nl_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik 1–60 letters, cijfers, punten, koppeltekens of underscores.`)
};

const pl_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj od 1 do 60 liter, cyfr, kropek, myślników lub podkreśleń.`)
};

const pt_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use de 1 a 60 letras, dígitos, pontos, hifens ou sublinhados.`)
};

const ru_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`От 1 до 60 латинских букв, цифр, точек, дефисов или подчёркиваний.`)
};

const sv_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd 1–60 bokstäver, siffror, punkter, bindestreck eller understreck.`)
};

const tr_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1–60 harf, rakam, nokta, tire veya alt çizgi kullan.`)
};

const zh_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请使用 1–60 个字母、数字、点、连字符或下划线。`)
};

const ja_admin_flags_error_key = /** @type {(inputs: Admin_Flags_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1〜60 文字の英字、数字、ドット、ハイフン、アンダースコアを使ってください。`)
};

/**
* | output |
* | --- |
* | "Use 1–60 letters, digits, dots, hyphens or underscores." |
*
* @param {Admin_Flags_Error_KeyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_flags_error_key = /** @type {((inputs?: Admin_Flags_Error_KeyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Flags_Error_KeyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_flags_error_key(inputs)
	if (locale === "de") return de_admin_flags_error_key(inputs)
	if (locale === "fr") return fr_admin_flags_error_key(inputs)
	if (locale === "it") return it_admin_flags_error_key(inputs)
	if (locale === "nl") return nl_admin_flags_error_key(inputs)
	if (locale === "pl") return pl_admin_flags_error_key(inputs)
	if (locale === "pt") return pt_admin_flags_error_key(inputs)
	if (locale === "ru") return ru_admin_flags_error_key(inputs)
	if (locale === "sv") return sv_admin_flags_error_key(inputs)
	if (locale === "tr") return tr_admin_flags_error_key(inputs)
	if (locale === "zh") return zh_admin_flags_error_key(inputs)
	if (locale === "ja") return ja_admin_flags_error_key(inputs)
	return en_admin_flags_error_key(inputs)
});
