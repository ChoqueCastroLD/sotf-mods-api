/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kit_Picks_Col_ItemsInputs */

const en_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar`)
};

const zh_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_admin_kit_picks_col_items = /** @type {(inputs: Admin_Kit_Picks_Col_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Admin_Kit_Picks_Col_ItemsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_col_items = /** @type {((inputs?: Admin_Kit_Picks_Col_ItemsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_Col_ItemsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_col_items(inputs)
	if (locale === "de") return de_admin_kit_picks_col_items(inputs)
	if (locale === "fr") return fr_admin_kit_picks_col_items(inputs)
	if (locale === "it") return it_admin_kit_picks_col_items(inputs)
	if (locale === "nl") return nl_admin_kit_picks_col_items(inputs)
	if (locale === "pl") return pl_admin_kit_picks_col_items(inputs)
	if (locale === "pt") return pt_admin_kit_picks_col_items(inputs)
	if (locale === "ru") return ru_admin_kit_picks_col_items(inputs)
	if (locale === "sv") return sv_admin_kit_picks_col_items(inputs)
	if (locale === "tr") return tr_admin_kit_picks_col_items(inputs)
	if (locale === "zh") return zh_admin_kit_picks_col_items(inputs)
	if (locale === "ja") return ja_admin_kit_picks_col_items(inputs)
	return en_admin_kit_picks_col_items(inputs)
});
