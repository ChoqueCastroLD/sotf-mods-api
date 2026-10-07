/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Tab_OverviewInputs */

const en_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overview`)
};

const es_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumen`)
};

const de_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersicht`)
};

const fr_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperçu`)
};

const it_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panoramica`)
};

const nl_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overzicht`)
};

const pl_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przegląd`)
};

const pt_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visão geral`)
};

const ru_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обзор`)
};

const sv_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översikt`)
};

const tr_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Genel bakış`)
};

const zh_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概览`)
};

const ja_jams_editor_tab_overview = /** @type {(inputs: Jams_Editor_Tab_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概要`)
};

/**
* | output |
* | --- |
* | "Overview" |
*
* @param {Jams_Editor_Tab_OverviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_tab_overview = /** @type {((inputs?: Jams_Editor_Tab_OverviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Tab_OverviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_tab_overview(inputs)
	if (locale === "de") return de_jams_editor_tab_overview(inputs)
	if (locale === "fr") return fr_jams_editor_tab_overview(inputs)
	if (locale === "it") return it_jams_editor_tab_overview(inputs)
	if (locale === "nl") return nl_jams_editor_tab_overview(inputs)
	if (locale === "pl") return pl_jams_editor_tab_overview(inputs)
	if (locale === "pt") return pt_jams_editor_tab_overview(inputs)
	if (locale === "ru") return ru_jams_editor_tab_overview(inputs)
	if (locale === "sv") return sv_jams_editor_tab_overview(inputs)
	if (locale === "tr") return tr_jams_editor_tab_overview(inputs)
	if (locale === "zh") return zh_jams_editor_tab_overview(inputs)
	if (locale === "ja") return ja_jams_editor_tab_overview(inputs)
	return en_jams_editor_tab_overview(inputs)
});
