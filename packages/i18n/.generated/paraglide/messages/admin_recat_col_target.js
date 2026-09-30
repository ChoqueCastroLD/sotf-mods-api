/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Col_TargetInputs */

const en_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move to`)
};

const es_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mover a`)
};

const de_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verschieben nach`)
};

const fr_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déplacer vers`)
};

const it_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sposta in`)
};

const nl_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verplaatsen naar`)
};

const pl_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przenieś do`)
};

const pt_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mover para`)
};

const ru_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перенести в`)
};

const sv_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flytta till`)
};

const tr_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taşınacak yer`)
};

const zh_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移至`)
};

const ja_admin_recat_col_target = /** @type {(inputs: Admin_Recat_Col_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移動先`)
};

/**
* | output |
* | --- |
* | "Move to" |
*
* @param {Admin_Recat_Col_TargetInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_col_target = /** @type {((inputs?: Admin_Recat_Col_TargetInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Col_TargetInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_col_target(inputs)
	if (locale === "de") return de_admin_recat_col_target(inputs)
	if (locale === "fr") return fr_admin_recat_col_target(inputs)
	if (locale === "it") return it_admin_recat_col_target(inputs)
	if (locale === "nl") return nl_admin_recat_col_target(inputs)
	if (locale === "pl") return pl_admin_recat_col_target(inputs)
	if (locale === "pt") return pt_admin_recat_col_target(inputs)
	if (locale === "ru") return ru_admin_recat_col_target(inputs)
	if (locale === "sv") return sv_admin_recat_col_target(inputs)
	if (locale === "tr") return tr_admin_recat_col_target(inputs)
	if (locale === "zh") return zh_admin_recat_col_target(inputs)
	if (locale === "ja") return ja_admin_recat_col_target(inputs)
	return en_admin_recat_col_target(inputs)
});
