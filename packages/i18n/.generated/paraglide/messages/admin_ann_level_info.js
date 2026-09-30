/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Level_InfoInputs */

const en_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const es_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Información`)
};

const de_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const fr_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const it_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const nl_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const pl_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informacja`)
};

const pt_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informação`)
};

const ru_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Информация`)
};

const sv_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const tr_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilgi`)
};

const zh_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信息`)
};

const ja_admin_ann_level_info = /** @type {(inputs: Admin_Ann_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`情報`)
};

/**
* | output |
* | --- |
* | "Info" |
*
* @param {Admin_Ann_Level_InfoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_level_info = /** @type {((inputs?: Admin_Ann_Level_InfoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Level_InfoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_level_info(inputs)
	if (locale === "de") return de_admin_ann_level_info(inputs)
	if (locale === "fr") return fr_admin_ann_level_info(inputs)
	if (locale === "it") return it_admin_ann_level_info(inputs)
	if (locale === "nl") return nl_admin_ann_level_info(inputs)
	if (locale === "pl") return pl_admin_ann_level_info(inputs)
	if (locale === "pt") return pt_admin_ann_level_info(inputs)
	if (locale === "ru") return ru_admin_ann_level_info(inputs)
	if (locale === "sv") return sv_admin_ann_level_info(inputs)
	if (locale === "tr") return tr_admin_ann_level_info(inputs)
	if (locale === "zh") return zh_admin_ann_level_info(inputs)
	if (locale === "ja") return ja_admin_ann_level_info(inputs)
	return en_admin_ann_level_info(inputs)
});
