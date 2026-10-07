/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Filter_Current_NoInputs */

const en_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not current`)
};

const es_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las demás`)
};

const de_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht aktuell`)
};

const fr_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non actuels`)
};

const it_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non attuali`)
};

const nl_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet huidig`)
};

const pl_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieaktualne`)
};

const pt_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não atuais`)
};

const ru_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не текущие`)
};

const sv_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte aktuella`)
};

const tr_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel olmayanlar`)
};

const zh_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非当前版本`)
};

const ja_admin_builds_filter_current_no = /** @type {(inputs: Admin_Builds_Filter_Current_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在以外`)
};

/**
* | output |
* | --- |
* | "Not current" |
*
* @param {Admin_Builds_Filter_Current_NoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_filter_current_no = /** @type {((inputs?: Admin_Builds_Filter_Current_NoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Filter_Current_NoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_filter_current_no(inputs)
	if (locale === "de") return de_admin_builds_filter_current_no(inputs)
	if (locale === "fr") return fr_admin_builds_filter_current_no(inputs)
	if (locale === "it") return it_admin_builds_filter_current_no(inputs)
	if (locale === "nl") return nl_admin_builds_filter_current_no(inputs)
	if (locale === "pl") return pl_admin_builds_filter_current_no(inputs)
	if (locale === "pt") return pt_admin_builds_filter_current_no(inputs)
	if (locale === "ru") return ru_admin_builds_filter_current_no(inputs)
	if (locale === "sv") return sv_admin_builds_filter_current_no(inputs)
	if (locale === "tr") return tr_admin_builds_filter_current_no(inputs)
	if (locale === "zh") return zh_admin_builds_filter_current_no(inputs)
	if (locale === "ja") return ja_admin_builds_filter_current_no(inputs)
	return en_admin_builds_filter_current_no(inputs)
});
