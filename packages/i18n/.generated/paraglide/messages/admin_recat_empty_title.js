/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Empty_TitleInputs */

const en_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything is in place`)
};

const es_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo está en su sitio`)
};

const de_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles am richtigen Platz`)
};

const fr_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout est en place`)
};

const it_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto al suo posto`)
};

const nl_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles staat op zijn plek`)
};

const pl_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko na swoim miejscu`)
};

const pt_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo no lugar`)
};

const ru_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё на своих местах`)
};

const sv_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt är på plats`)
};

const tr_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her şey yerinde`)
};

const zh_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一切就绪`)
};

const ja_admin_recat_empty_title = /** @type {(inputs: Admin_Recat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて整っています`)
};

/**
* | output |
* | --- |
* | "Everything is in place" |
*
* @param {Admin_Recat_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_empty_title = /** @type {((inputs?: Admin_Recat_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_empty_title(inputs)
	if (locale === "de") return de_admin_recat_empty_title(inputs)
	if (locale === "fr") return fr_admin_recat_empty_title(inputs)
	if (locale === "it") return it_admin_recat_empty_title(inputs)
	if (locale === "nl") return nl_admin_recat_empty_title(inputs)
	if (locale === "pl") return pl_admin_recat_empty_title(inputs)
	if (locale === "pt") return pt_admin_recat_empty_title(inputs)
	if (locale === "ru") return ru_admin_recat_empty_title(inputs)
	if (locale === "sv") return sv_admin_recat_empty_title(inputs)
	if (locale === "tr") return tr_admin_recat_empty_title(inputs)
	if (locale === "zh") return zh_admin_recat_empty_title(inputs)
	if (locale === "ja") return ja_admin_recat_empty_title(inputs)
	return en_admin_recat_empty_title(inputs)
});
