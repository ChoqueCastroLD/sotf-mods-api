/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_OverviewInputs */

const en_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overview`)
};

const es_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumen`)
};

const de_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersicht`)
};

const fr_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vue d’ensemble`)
};

const it_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panoramica`)
};

const nl_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overzicht`)
};

const pl_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przegląd`)
};

const pt_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visão geral`)
};

const ru_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обзор`)
};

const sv_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översikt`)
};

const tr_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Genel bakış`)
};

const zh_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概览`)
};

const ja_console_nav_overview = /** @type {(inputs: Console_Nav_OverviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概要`)
};

/**
* | output |
* | --- |
* | "Overview" |
*
* @param {Console_Nav_OverviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_overview = /** @type {((inputs?: Console_Nav_OverviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_OverviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_overview(inputs)
	if (locale === "de") return de_console_nav_overview(inputs)
	if (locale === "fr") return fr_console_nav_overview(inputs)
	if (locale === "it") return it_console_nav_overview(inputs)
	if (locale === "nl") return nl_console_nav_overview(inputs)
	if (locale === "pl") return pl_console_nav_overview(inputs)
	if (locale === "pt") return pt_console_nav_overview(inputs)
	if (locale === "ru") return ru_console_nav_overview(inputs)
	if (locale === "sv") return sv_console_nav_overview(inputs)
	if (locale === "tr") return tr_console_nav_overview(inputs)
	if (locale === "zh") return zh_console_nav_overview(inputs)
	if (locale === "ja") return ja_console_nav_overview(inputs)
	return en_console_nav_overview(inputs)
});
