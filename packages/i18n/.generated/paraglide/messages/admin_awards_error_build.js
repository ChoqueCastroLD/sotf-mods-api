/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Error_BuildInputs */

const en_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick a build.`)
};

const es_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige una build.`)
};

const de_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle einen Build.`)
};

const fr_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez un build.`)
};

const it_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli una build.`)
};

const nl_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een build.`)
};

const pl_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz build.`)
};

const pt_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um build.`)
};

const ru_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите билд.`)
};

const sv_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj ett bygge.`)
};

const tr_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir yapı seç.`)
};

const zh_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择一个建筑。`)
};

const ja_admin_awards_error_build = /** @type {(inputs: Admin_Awards_Error_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築データを選んでください。`)
};

/**
* | output |
* | --- |
* | "Pick a build." |
*
* @param {Admin_Awards_Error_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_error_build = /** @type {((inputs?: Admin_Awards_Error_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Error_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_error_build(inputs)
	if (locale === "de") return de_admin_awards_error_build(inputs)
	if (locale === "fr") return fr_admin_awards_error_build(inputs)
	if (locale === "it") return it_admin_awards_error_build(inputs)
	if (locale === "nl") return nl_admin_awards_error_build(inputs)
	if (locale === "pl") return pl_admin_awards_error_build(inputs)
	if (locale === "pt") return pt_admin_awards_error_build(inputs)
	if (locale === "ru") return ru_admin_awards_error_build(inputs)
	if (locale === "sv") return sv_admin_awards_error_build(inputs)
	if (locale === "tr") return tr_admin_awards_error_build(inputs)
	if (locale === "zh") return zh_admin_awards_error_build(inputs)
	if (locale === "ja") return ja_admin_awards_error_build(inputs)
	return en_admin_awards_error_build(inputs)
});
