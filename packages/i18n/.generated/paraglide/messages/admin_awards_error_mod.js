/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Error_ModInputs */

const en_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick a mod.`)
};

const es_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige un mod.`)
};

const de_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle einen Mod.`)
};

const fr_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez un mod.`)
};

const it_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli una mod.`)
};

const nl_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een mod.`)
};

const pl_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz mod.`)
};

const pt_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um mod.`)
};

const ru_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите мод.`)
};

const sv_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en modd.`)
};

const tr_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir mod seç.`)
};

const zh_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择一个模组。`)
};

const ja_admin_awards_error_mod = /** @type {(inputs: Admin_Awards_Error_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を選んでください。`)
};

/**
* | output |
* | --- |
* | "Pick a mod." |
*
* @param {Admin_Awards_Error_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_error_mod = /** @type {((inputs?: Admin_Awards_Error_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Error_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_error_mod(inputs)
	if (locale === "de") return de_admin_awards_error_mod(inputs)
	if (locale === "fr") return fr_admin_awards_error_mod(inputs)
	if (locale === "it") return it_admin_awards_error_mod(inputs)
	if (locale === "nl") return nl_admin_awards_error_mod(inputs)
	if (locale === "pl") return pl_admin_awards_error_mod(inputs)
	if (locale === "pt") return pt_admin_awards_error_mod(inputs)
	if (locale === "ru") return ru_admin_awards_error_mod(inputs)
	if (locale === "sv") return sv_admin_awards_error_mod(inputs)
	if (locale === "tr") return tr_admin_awards_error_mod(inputs)
	if (locale === "zh") return zh_admin_awards_error_mod(inputs)
	if (locale === "ja") return ja_admin_awards_error_mod(inputs)
	return en_admin_awards_error_mod(inputs)
});
