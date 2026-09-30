/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Level_WarningInputs */

const en_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warning`)
};

const es_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso`)
};

const de_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warnung`)
};

const fr_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avertissement`)
};

const it_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avviso`)
};

const nl_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waarschuwing`)
};

const pl_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostrzeżenie`)
};

const pt_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alerta`)
};

const ru_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предупреждение`)
};

const sv_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varning`)
};

const tr_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyarı`)
};

const zh_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

const ja_admin_ann_level_warning = /** @type {(inputs: Admin_Ann_Level_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

/**
* | output |
* | --- |
* | "Warning" |
*
* @param {Admin_Ann_Level_WarningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_level_warning = /** @type {((inputs?: Admin_Ann_Level_WarningInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Level_WarningInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_level_warning(inputs)
	if (locale === "de") return de_admin_ann_level_warning(inputs)
	if (locale === "fr") return fr_admin_ann_level_warning(inputs)
	if (locale === "it") return it_admin_ann_level_warning(inputs)
	if (locale === "nl") return nl_admin_ann_level_warning(inputs)
	if (locale === "pl") return pl_admin_ann_level_warning(inputs)
	if (locale === "pt") return pt_admin_ann_level_warning(inputs)
	if (locale === "ru") return ru_admin_ann_level_warning(inputs)
	if (locale === "sv") return sv_admin_ann_level_warning(inputs)
	if (locale === "tr") return tr_admin_ann_level_warning(inputs)
	if (locale === "zh") return zh_admin_ann_level_warning(inputs)
	if (locale === "ja") return ja_admin_ann_level_warning(inputs)
	return en_admin_ann_level_warning(inputs)
});
