/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kit_Picks_Col_KitInputs */

const en_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const es_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const de_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const fr_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const it_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const nl_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const pl_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestaw`)
};

const pt_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const ru_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Набор`)
};

const sv_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const tr_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const zh_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合集`)
};

const ja_admin_kit_picks_col_kit = /** @type {(inputs: Admin_Kit_Picks_Col_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キット`)
};

/**
* | output |
* | --- |
* | "Kit" |
*
* @param {Admin_Kit_Picks_Col_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_col_kit = /** @type {((inputs?: Admin_Kit_Picks_Col_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_Col_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_col_kit(inputs)
	if (locale === "de") return de_admin_kit_picks_col_kit(inputs)
	if (locale === "fr") return fr_admin_kit_picks_col_kit(inputs)
	if (locale === "it") return it_admin_kit_picks_col_kit(inputs)
	if (locale === "nl") return nl_admin_kit_picks_col_kit(inputs)
	if (locale === "pl") return pl_admin_kit_picks_col_kit(inputs)
	if (locale === "pt") return pt_admin_kit_picks_col_kit(inputs)
	if (locale === "ru") return ru_admin_kit_picks_col_kit(inputs)
	if (locale === "sv") return sv_admin_kit_picks_col_kit(inputs)
	if (locale === "tr") return tr_admin_kit_picks_col_kit(inputs)
	if (locale === "zh") return zh_admin_kit_picks_col_kit(inputs)
	if (locale === "ja") return ja_admin_kit_picks_col_kit(inputs)
	return en_admin_kit_picks_col_kit(inputs)
});
