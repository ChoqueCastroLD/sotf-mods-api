/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Field_BreakingInputs */

const en_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breaking update`)
};

const es_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualización que rompe mods`)
};

const de_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inkompatibles Update`)
};

const fr_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mise à jour qui casse les mods`)
};

const it_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamento che rompe le mod`)
};

const nl_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update die mods breekt`)
};

const pl_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizacja psująca mody`)
};

const pt_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualização que quebra mods`)
};

const ru_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновление, ломающее моды`)
};

const sv_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdatering som bryter moddar`)
};

const tr_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozan güncelleme`)
};

const zh_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破坏性更新`)
};

const ja_admin_builds_field_breaking = /** @type {(inputs: Admin_Builds_Field_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を壊すアップデート`)
};

/**
* | output |
* | --- |
* | "Breaking update" |
*
* @param {Admin_Builds_Field_BreakingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_field_breaking = /** @type {((inputs?: Admin_Builds_Field_BreakingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Field_BreakingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_field_breaking(inputs)
	if (locale === "de") return de_admin_builds_field_breaking(inputs)
	if (locale === "fr") return fr_admin_builds_field_breaking(inputs)
	if (locale === "it") return it_admin_builds_field_breaking(inputs)
	if (locale === "nl") return nl_admin_builds_field_breaking(inputs)
	if (locale === "pl") return pl_admin_builds_field_breaking(inputs)
	if (locale === "pt") return pt_admin_builds_field_breaking(inputs)
	if (locale === "ru") return ru_admin_builds_field_breaking(inputs)
	if (locale === "sv") return sv_admin_builds_field_breaking(inputs)
	if (locale === "tr") return tr_admin_builds_field_breaking(inputs)
	if (locale === "zh") return zh_admin_builds_field_breaking(inputs)
	if (locale === "ja") return ja_admin_builds_field_breaking(inputs)
	return en_admin_builds_field_breaking(inputs)
});
