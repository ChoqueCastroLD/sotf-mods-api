/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Growth_TitleInputs */

const en_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Growth`)
};

const es_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crecimiento`)
};

const de_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachstum`)
};

const fr_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Croissance`)
};

const it_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crescita`)
};

const nl_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Groei`)
};

const pl_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wzrost`)
};

const pt_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crescimento`)
};

const ru_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рост`)
};

const sv_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillväxt`)
};

const tr_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Büyüme`)
};

const zh_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`增长`)
};

const ja_admin_traffic_growth_title = /** @type {(inputs: Admin_Traffic_Growth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成長`)
};

/**
* | output |
* | --- |
* | "Growth" |
*
* @param {Admin_Traffic_Growth_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_growth_title = /** @type {((inputs?: Admin_Traffic_Growth_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Growth_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_growth_title(inputs)
	if (locale === "de") return de_admin_traffic_growth_title(inputs)
	if (locale === "fr") return fr_admin_traffic_growth_title(inputs)
	if (locale === "it") return it_admin_traffic_growth_title(inputs)
	if (locale === "nl") return nl_admin_traffic_growth_title(inputs)
	if (locale === "pl") return pl_admin_traffic_growth_title(inputs)
	if (locale === "pt") return pt_admin_traffic_growth_title(inputs)
	if (locale === "ru") return ru_admin_traffic_growth_title(inputs)
	if (locale === "sv") return sv_admin_traffic_growth_title(inputs)
	if (locale === "tr") return tr_admin_traffic_growth_title(inputs)
	if (locale === "zh") return zh_admin_traffic_growth_title(inputs)
	if (locale === "ja") return ja_admin_traffic_growth_title(inputs)
	return en_admin_traffic_growth_title(inputs)
});
