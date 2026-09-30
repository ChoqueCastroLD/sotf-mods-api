/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ spent: NonNullable<unknown>, budget: NonNullable<unknown>, share: NonNullable<unknown> }} Admin_Kelvin_Budget_UsedInputs */

const en_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Today: ${i?.spent} of ${i?.budget} (${i?.share}).`)
};

const es_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hoy: ${i?.spent} de ${i?.budget} (${i?.share}).`)
};

const de_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Heute: ${i?.spent} von ${i?.budget} (${i?.share}).`)
};

const fr_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aujourd’hui : ${i?.spent} sur ${i?.budget} (${i?.share}).`)
};

const it_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oggi: ${i?.spent} di ${i?.budget} (${i?.share}).`)
};

const nl_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vandaag: ${i?.spent} van ${i?.budget} (${i?.share}).`)
};

const pl_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dziś: ${i?.spent} z ${i?.budget} (${i?.share}).`)
};

const pt_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hoje: ${i?.spent} de ${i?.budget} (${i?.share}).`)
};

const ru_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Сегодня: ${i?.spent} из ${i?.budget} (${i?.share}).`)
};

const sv_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`I dag: ${i?.spent} av ${i?.budget} (${i?.share}).`)
};

const tr_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bugün: ${i?.budget} bütçenin ${i?.spent} kadarı (${i?.share}).`)
};

const zh_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`今日：${i?.spent} / ${i?.budget}（${i?.share}）。`)
};

const ja_admin_kelvin_budget_used = /** @type {(inputs: Admin_Kelvin_Budget_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`今日：${i?.budget} のうち ${i?.spent}（${i?.share}）。`)
};

/**
* | output |
* | --- |
* | "Today: {spent} of {budget} ({share})." |
*
* @param {Admin_Kelvin_Budget_UsedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_budget_used = /** @type {((inputs: Admin_Kelvin_Budget_UsedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Budget_UsedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_budget_used(inputs)
	if (locale === "de") return de_admin_kelvin_budget_used(inputs)
	if (locale === "fr") return fr_admin_kelvin_budget_used(inputs)
	if (locale === "it") return it_admin_kelvin_budget_used(inputs)
	if (locale === "nl") return nl_admin_kelvin_budget_used(inputs)
	if (locale === "pl") return pl_admin_kelvin_budget_used(inputs)
	if (locale === "pt") return pt_admin_kelvin_budget_used(inputs)
	if (locale === "ru") return ru_admin_kelvin_budget_used(inputs)
	if (locale === "sv") return sv_admin_kelvin_budget_used(inputs)
	if (locale === "tr") return tr_admin_kelvin_budget_used(inputs)
	if (locale === "zh") return zh_admin_kelvin_budget_used(inputs)
	if (locale === "ja") return ja_admin_kelvin_budget_used(inputs)
	return en_admin_kelvin_budget_used(inputs)
});
