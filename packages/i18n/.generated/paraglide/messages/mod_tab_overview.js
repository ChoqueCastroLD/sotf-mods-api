/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Tab_OverviewInputs */

const en_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overview`)
};

const es_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumen`)
};

const de_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersicht`)
};

const fr_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Présentation`)
};

const it_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panoramica`)
};

const nl_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overzicht`)
};

const pl_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przegląd`)
};

const pt_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visão geral`)
};

const ru_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обзор`)
};

const sv_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översikt`)
};

const tr_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Genel bakış`)
};

const zh_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概览`)
};

const ja_mod_tab_overview = /** @type {(inputs: Mod_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概要`)
};

/**
* | output |
* | --- |
* | "Overview" |
*
* @param {Mod_Tab_OverviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_tab_overview = /** @type {((inputs?: Mod_Tab_OverviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Tab_OverviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_tab_overview(inputs)
	if (locale === "de") return de_mod_tab_overview(inputs)
	if (locale === "fr") return fr_mod_tab_overview(inputs)
	if (locale === "it") return it_mod_tab_overview(inputs)
	if (locale === "nl") return nl_mod_tab_overview(inputs)
	if (locale === "pl") return pl_mod_tab_overview(inputs)
	if (locale === "pt") return pt_mod_tab_overview(inputs)
	if (locale === "ru") return ru_mod_tab_overview(inputs)
	if (locale === "sv") return sv_mod_tab_overview(inputs)
	if (locale === "tr") return tr_mod_tab_overview(inputs)
	if (locale === "zh") return zh_mod_tab_overview(inputs)
	if (locale === "ja") return ja_mod_tab_overview(inputs)
	return en_mod_tab_overview(inputs)
});
