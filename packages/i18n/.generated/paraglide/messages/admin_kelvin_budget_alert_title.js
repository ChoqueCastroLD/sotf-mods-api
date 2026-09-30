/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Budget_Alert_TitleInputs */

const en_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close to today’s budget`)
};

const es_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca del presupuesto de hoy`)
};

const de_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nahe am heutigen Budget`)
};

const fr_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proche du budget du jour`)
};

const it_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vicino al budget di oggi`)
};

const nl_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijna aan het budget van vandaag`)
};

const pl_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blisko dzisiejszego budżetu`)
};

const pt_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perto do orçamento de hoje`)
};

const ru_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бюджет на сегодня почти исчерпан`)
};

const sv_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nära dagens budget`)
};

const tr_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugünkü bütçeye yakın`)
};

const zh_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接近今日预算`)
};

const ja_admin_kelvin_budget_alert_title = /** @type {(inputs: Admin_Kelvin_Budget_Alert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今日の予算に近づいています`)
};

/**
* | output |
* | --- |
* | "Close to today’s budget" |
*
* @param {Admin_Kelvin_Budget_Alert_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_budget_alert_title = /** @type {((inputs?: Admin_Kelvin_Budget_Alert_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Budget_Alert_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_budget_alert_title(inputs)
	if (locale === "de") return de_admin_kelvin_budget_alert_title(inputs)
	if (locale === "fr") return fr_admin_kelvin_budget_alert_title(inputs)
	if (locale === "it") return it_admin_kelvin_budget_alert_title(inputs)
	if (locale === "nl") return nl_admin_kelvin_budget_alert_title(inputs)
	if (locale === "pl") return pl_admin_kelvin_budget_alert_title(inputs)
	if (locale === "pt") return pt_admin_kelvin_budget_alert_title(inputs)
	if (locale === "ru") return ru_admin_kelvin_budget_alert_title(inputs)
	if (locale === "sv") return sv_admin_kelvin_budget_alert_title(inputs)
	if (locale === "tr") return tr_admin_kelvin_budget_alert_title(inputs)
	if (locale === "zh") return zh_admin_kelvin_budget_alert_title(inputs)
	if (locale === "ja") return ja_admin_kelvin_budget_alert_title(inputs)
	return en_admin_kelvin_budget_alert_title(inputs)
});
