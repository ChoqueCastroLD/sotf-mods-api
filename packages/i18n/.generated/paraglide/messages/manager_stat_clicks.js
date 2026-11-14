/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Stat_ClicksInputs */

const en_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`click per mod`)
};

const es_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`clic por mod`)
};

const de_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klick pro Mod`)
};

const fr_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`clic par mod`)
};

const it_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`clic per mod`)
};

const nl_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`klik per mod`)
};

const pl_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`kliknięcie na mod`)
};

const pt_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`clique por mod`)
};

const ru_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`клик на мод`)
};

const sv_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`klick per modd`)
};

const tr_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mod başına tık`)
};

const zh_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次点击即可装一个模组`)
};

const ja_manager_stat_clicks = /** @type {(inputs: Manager_Stat_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ごとのクリック数`)
};

/**
* | output |
* | --- |
* | "click per mod" |
*
* @param {Manager_Stat_ClicksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_stat_clicks = /** @type {((inputs?: Manager_Stat_ClicksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Stat_ClicksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_stat_clicks(inputs)
	if (locale === "de") return de_manager_stat_clicks(inputs)
	if (locale === "fr") return fr_manager_stat_clicks(inputs)
	if (locale === "it") return it_manager_stat_clicks(inputs)
	if (locale === "nl") return nl_manager_stat_clicks(inputs)
	if (locale === "pl") return pl_manager_stat_clicks(inputs)
	if (locale === "pt") return pt_manager_stat_clicks(inputs)
	if (locale === "ru") return ru_manager_stat_clicks(inputs)
	if (locale === "sv") return sv_manager_stat_clicks(inputs)
	if (locale === "tr") return tr_manager_stat_clicks(inputs)
	if (locale === "zh") return zh_manager_stat_clicks(inputs)
	if (locale === "ja") return ja_manager_stat_clicks(inputs)
	return en_manager_stat_clicks(inputs)
});
