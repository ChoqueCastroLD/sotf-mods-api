/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Add_TagInputs */

const en_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Tag`)
};

const es_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Etiqueta`)
};

const de_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Tag`)
};

const fr_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Tag`)
};

const it_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Tag`)
};

const nl_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Tag`)
};

const pl_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Tag`)
};

const pt_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Tag`)
};

const ru_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Тег`)
};

const sv_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Tagg`)
};

const tr_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Etiket`)
};

const zh_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ 标签`)
};

const ja_admin_recat_add_tag = /** @type {(inputs: Admin_Recat_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ タグ`)
};

/**
* | output |
* | --- |
* | "+ Tag" |
*
* @param {Admin_Recat_Add_TagInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_add_tag = /** @type {((inputs?: Admin_Recat_Add_TagInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Add_TagInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_add_tag(inputs)
	if (locale === "de") return de_admin_recat_add_tag(inputs)
	if (locale === "fr") return fr_admin_recat_add_tag(inputs)
	if (locale === "it") return it_admin_recat_add_tag(inputs)
	if (locale === "nl") return nl_admin_recat_add_tag(inputs)
	if (locale === "pl") return pl_admin_recat_add_tag(inputs)
	if (locale === "pt") return pt_admin_recat_add_tag(inputs)
	if (locale === "ru") return ru_admin_recat_add_tag(inputs)
	if (locale === "sv") return sv_admin_recat_add_tag(inputs)
	if (locale === "tr") return tr_admin_recat_add_tag(inputs)
	if (locale === "zh") return zh_admin_recat_add_tag(inputs)
	if (locale === "ja") return ja_admin_recat_add_tag(inputs)
	return en_admin_recat_add_tag(inputs)
});
