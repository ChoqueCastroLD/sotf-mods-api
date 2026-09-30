/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Level_PatchInputs */

const en_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch`)
};

const es_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parche`)
};

const de_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch`)
};

const fr_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch`)
};

const it_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch`)
};

const nl_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch`)
};

const pl_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Łatka`)
};

const pt_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch`)
};

const ru_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Патч`)
};

const sv_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch`)
};

const tr_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yama`)
};

const zh_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`补丁`)
};

const ja_admin_ann_level_patch = /** @type {(inputs: Admin_Ann_Level_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パッチ`)
};

/**
* | output |
* | --- |
* | "Patch" |
*
* @param {Admin_Ann_Level_PatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_level_patch = /** @type {((inputs?: Admin_Ann_Level_PatchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Level_PatchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_level_patch(inputs)
	if (locale === "de") return de_admin_ann_level_patch(inputs)
	if (locale === "fr") return fr_admin_ann_level_patch(inputs)
	if (locale === "it") return it_admin_ann_level_patch(inputs)
	if (locale === "nl") return nl_admin_ann_level_patch(inputs)
	if (locale === "pl") return pl_admin_ann_level_patch(inputs)
	if (locale === "pt") return pt_admin_ann_level_patch(inputs)
	if (locale === "ru") return ru_admin_ann_level_patch(inputs)
	if (locale === "sv") return sv_admin_ann_level_patch(inputs)
	if (locale === "tr") return tr_admin_ann_level_patch(inputs)
	if (locale === "zh") return zh_admin_ann_level_patch(inputs)
	if (locale === "ja") return ja_admin_ann_level_patch(inputs)
	return en_admin_ann_level_patch(inputs)
});
