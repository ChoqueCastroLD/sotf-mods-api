/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Breakdowns_TitleInputs */

const en_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Where the visits come from`)
};

const es_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De dónde vienen las visitas`)
};

const de_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Woher die Besuche kommen`)
};

const fr_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`D’où viennent les visites`)
};

const it_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da dove arrivano le visite`)
};

const nl_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waar de bezoeken vandaan komen`)
};

const pl_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skąd przychodzą odwiedziny`)
};

const pt_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De onde vêm as visitas`)
};

const ru_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Откуда приходят посетители`)
};

const sv_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Var besöken kommer ifrån`)
};

const tr_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziyaretler nereden geliyor`)
};

const zh_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访问来源`)
};

const ja_admin_traffic_breakdowns_title = /** @type {(inputs: Admin_Traffic_Breakdowns_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`訪問の流入元`)
};

/**
* | output |
* | --- |
* | "Where the visits come from" |
*
* @param {Admin_Traffic_Breakdowns_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_breakdowns_title = /** @type {((inputs?: Admin_Traffic_Breakdowns_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Breakdowns_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_breakdowns_title(inputs)
	if (locale === "de") return de_admin_traffic_breakdowns_title(inputs)
	if (locale === "fr") return fr_admin_traffic_breakdowns_title(inputs)
	if (locale === "it") return it_admin_traffic_breakdowns_title(inputs)
	if (locale === "nl") return nl_admin_traffic_breakdowns_title(inputs)
	if (locale === "pl") return pl_admin_traffic_breakdowns_title(inputs)
	if (locale === "pt") return pt_admin_traffic_breakdowns_title(inputs)
	if (locale === "ru") return ru_admin_traffic_breakdowns_title(inputs)
	if (locale === "sv") return sv_admin_traffic_breakdowns_title(inputs)
	if (locale === "tr") return tr_admin_traffic_breakdowns_title(inputs)
	if (locale === "zh") return zh_admin_traffic_breakdowns_title(inputs)
	if (locale === "ja") return ja_admin_traffic_breakdowns_title(inputs)
	return en_admin_traffic_breakdowns_title(inputs)
});
