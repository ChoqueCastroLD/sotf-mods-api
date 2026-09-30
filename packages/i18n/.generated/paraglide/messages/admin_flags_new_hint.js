/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Flags_New_HintInputs */

const en_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letters, digits, dots, hyphens and underscores.`)
};

const es_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letras, dígitos, puntos, guiones y guiones bajos.`)
};

const de_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buchstaben, Ziffern, Punkte, Binde- und Unterstriche.`)
};

const fr_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lettres, chiffres, points, tirets et tirets bas.`)
};

const it_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lettere, cifre, punti, trattini e trattini bassi.`)
};

const nl_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letters, cijfers, punten, koppeltekens en underscores.`)
};

const pl_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Litery, cyfry, kropki, myślniki i podkreślenia.`)
};

const pt_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letras, dígitos, pontos, hifens e sublinhados.`)
};

const ru_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Латинские буквы, цифры, точки, дефисы и подчёркивания.`)
};

const sv_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bokstäver, siffror, punkter, bindestreck och understreck.`)
};

const tr_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harf, rakam, nokta, tire ve alt çizgi.`)
};

const zh_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`字母、数字、点、连字符和下划线。`)
};

const ja_admin_flags_new_hint = /** @type {(inputs: Admin_Flags_New_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`英字、数字、ドット、ハイフン、アンダースコア。`)
};

/**
* | output |
* | --- |
* | "Letters, digits, dots, hyphens and underscores." |
*
* @param {Admin_Flags_New_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_flags_new_hint = /** @type {((inputs?: Admin_Flags_New_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Flags_New_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_flags_new_hint(inputs)
	if (locale === "de") return de_admin_flags_new_hint(inputs)
	if (locale === "fr") return fr_admin_flags_new_hint(inputs)
	if (locale === "it") return it_admin_flags_new_hint(inputs)
	if (locale === "nl") return nl_admin_flags_new_hint(inputs)
	if (locale === "pl") return pl_admin_flags_new_hint(inputs)
	if (locale === "pt") return pt_admin_flags_new_hint(inputs)
	if (locale === "ru") return ru_admin_flags_new_hint(inputs)
	if (locale === "sv") return sv_admin_flags_new_hint(inputs)
	if (locale === "tr") return tr_admin_flags_new_hint(inputs)
	if (locale === "zh") return zh_admin_flags_new_hint(inputs)
	if (locale === "ja") return ja_admin_flags_new_hint(inputs)
	return en_admin_flags_new_hint(inputs)
});
