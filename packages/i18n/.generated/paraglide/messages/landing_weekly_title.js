/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Weekly_TitleInputs */

const en_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods of the week`)
};

const es_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de la semana`)
};

const de_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods der Woche`)
};

const fr_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de la semaine`)
};

const it_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod della settimana`)
};

const nl_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods van de week`)
};

const pl_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody tygodnia`)
};

const pt_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods da semana`)
};

const ru_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды недели`)
};

const sv_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veckans mods`)
};

const tr_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haftanın modları`)
};

const zh_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周模组`)
};

const ja_landing_weekly_title = /** @type {(inputs: Landing_Weekly_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週のMOD`)
};

/**
* | output |
* | --- |
* | "Mods of the week" |
*
* @param {Landing_Weekly_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_weekly_title = /** @type {((inputs?: Landing_Weekly_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Weekly_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_weekly_title(inputs)
	if (locale === "de") return de_landing_weekly_title(inputs)
	if (locale === "fr") return fr_landing_weekly_title(inputs)
	if (locale === "it") return it_landing_weekly_title(inputs)
	if (locale === "nl") return nl_landing_weekly_title(inputs)
	if (locale === "pl") return pl_landing_weekly_title(inputs)
	if (locale === "pt") return pt_landing_weekly_title(inputs)
	if (locale === "ru") return ru_landing_weekly_title(inputs)
	if (locale === "sv") return sv_landing_weekly_title(inputs)
	if (locale === "tr") return tr_landing_weekly_title(inputs)
	if (locale === "zh") return zh_landing_weekly_title(inputs)
	if (locale === "ja") return ja_landing_weekly_title(inputs)
	return en_landing_weekly_title(inputs)
});
