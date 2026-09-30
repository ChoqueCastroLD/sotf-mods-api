/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dead_LettersInputs */

const en_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dead letters`)
};

const es_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tareas fallidas`)
};

const de_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dead Letters`)
};

const fr_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échecs définitifs`)
};

const it_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falliti definitivi`)
};

const nl_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dead letters`)
};

const pl_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieudane na stałe`)
};

const pt_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falhas definitivas`)
};

const ru_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неудачные задачи`)
};

const sv_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dead letters`)
};

const tr_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başarısız işler`)
};

const zh_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`死信`)
};

const ja_admin_ops_dead_letters = /** @type {(inputs: Admin_Ops_Dead_LettersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デッドレター`)
};

/**
* | output |
* | --- |
* | "Dead letters" |
*
* @param {Admin_Ops_Dead_LettersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dead_letters = /** @type {((inputs?: Admin_Ops_Dead_LettersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dead_LettersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dead_letters(inputs)
	if (locale === "de") return de_admin_ops_dead_letters(inputs)
	if (locale === "fr") return fr_admin_ops_dead_letters(inputs)
	if (locale === "it") return it_admin_ops_dead_letters(inputs)
	if (locale === "nl") return nl_admin_ops_dead_letters(inputs)
	if (locale === "pl") return pl_admin_ops_dead_letters(inputs)
	if (locale === "pt") return pt_admin_ops_dead_letters(inputs)
	if (locale === "ru") return ru_admin_ops_dead_letters(inputs)
	if (locale === "sv") return sv_admin_ops_dead_letters(inputs)
	if (locale === "tr") return tr_admin_ops_dead_letters(inputs)
	if (locale === "zh") return zh_admin_ops_dead_letters(inputs)
	if (locale === "ja") return ja_admin_ops_dead_letters(inputs)
	return en_admin_ops_dead_letters(inputs)
});
