/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Top_ModsInputs */

const en_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top mods`)
};

const es_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods destacados`)
};

const de_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top-Mods`)
};

const fr_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meilleurs mods`)
};

const it_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod principali`)
};

const nl_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topmods`)
};

const pl_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najlepsze mody`)
};

const pt_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods em destaque`)
};

const ru_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лучшие моды`)
};

const sv_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toppmoddar`)
};

const tr_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En iyi modlar`)
};

const zh_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热门模组`)
};

const ja_admin_traffic_top_mods = /** @type {(inputs: Admin_Traffic_Top_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人気 Mod`)
};

/**
* | output |
* | --- |
* | "Top mods" |
*
* @param {Admin_Traffic_Top_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_top_mods = /** @type {((inputs?: Admin_Traffic_Top_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Top_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_top_mods(inputs)
	if (locale === "de") return de_admin_traffic_top_mods(inputs)
	if (locale === "fr") return fr_admin_traffic_top_mods(inputs)
	if (locale === "it") return it_admin_traffic_top_mods(inputs)
	if (locale === "nl") return nl_admin_traffic_top_mods(inputs)
	if (locale === "pl") return pl_admin_traffic_top_mods(inputs)
	if (locale === "pt") return pt_admin_traffic_top_mods(inputs)
	if (locale === "ru") return ru_admin_traffic_top_mods(inputs)
	if (locale === "sv") return sv_admin_traffic_top_mods(inputs)
	if (locale === "tr") return tr_admin_traffic_top_mods(inputs)
	if (locale === "zh") return zh_admin_traffic_top_mods(inputs)
	if (locale === "ja") return ja_admin_traffic_top_mods(inputs)
	return en_admin_traffic_top_mods(inputs)
});
