/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Visits_TitleInputs */

const en_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visits`)
};

const es_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitas`)
};

const de_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besuche`)
};

const fr_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visites`)
};

const it_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visite`)
};

const nl_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezoeken`)
};

const pl_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odwiedziny`)
};

const pt_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitas`)
};

const ru_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Посещения`)
};

const sv_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besök`)
};

const tr_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziyaretler`)
};

const zh_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访问`)
};

const ja_admin_traffic_visits_title = /** @type {(inputs: Admin_Traffic_Visits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`訪問`)
};

/**
* | output |
* | --- |
* | "Visits" |
*
* @param {Admin_Traffic_Visits_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_visits_title = /** @type {((inputs?: Admin_Traffic_Visits_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Visits_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_visits_title(inputs)
	if (locale === "de") return de_admin_traffic_visits_title(inputs)
	if (locale === "fr") return fr_admin_traffic_visits_title(inputs)
	if (locale === "it") return it_admin_traffic_visits_title(inputs)
	if (locale === "nl") return nl_admin_traffic_visits_title(inputs)
	if (locale === "pl") return pl_admin_traffic_visits_title(inputs)
	if (locale === "pt") return pt_admin_traffic_visits_title(inputs)
	if (locale === "ru") return ru_admin_traffic_visits_title(inputs)
	if (locale === "sv") return sv_admin_traffic_visits_title(inputs)
	if (locale === "tr") return tr_admin_traffic_visits_title(inputs)
	if (locale === "zh") return zh_admin_traffic_visits_title(inputs)
	if (locale === "ja") return ja_admin_traffic_visits_title(inputs)
	return en_admin_traffic_visits_title(inputs)
});
