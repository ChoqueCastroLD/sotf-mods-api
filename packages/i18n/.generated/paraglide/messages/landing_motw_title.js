/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Motw_TitleInputs */

const en_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod of the Week`)
};

const es_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la semana`)
};

const de_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod der Woche`)
};

const fr_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la semaine`)
};

const it_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod della settimana`)
};

const nl_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod van de week`)
};

const pl_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod tygodnia`)
};

const pt_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod da semana`)
};

const ru_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод недели`)
};

const sv_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veckans modd`)
};

const tr_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haftanın modu`)
};

const zh_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周模组`)
};

const ja_landing_motw_title = /** @type {(inputs: Landing_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週のMOD`)
};

/**
* | output |
* | --- |
* | "Mod of the Week" |
*
* @param {Landing_Motw_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_motw_title = /** @type {((inputs?: Landing_Motw_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Motw_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_motw_title(inputs)
	if (locale === "de") return de_landing_motw_title(inputs)
	if (locale === "fr") return fr_landing_motw_title(inputs)
	if (locale === "it") return it_landing_motw_title(inputs)
	if (locale === "nl") return nl_landing_motw_title(inputs)
	if (locale === "pl") return pl_landing_motw_title(inputs)
	if (locale === "pt") return pt_landing_motw_title(inputs)
	if (locale === "ru") return ru_landing_motw_title(inputs)
	if (locale === "sv") return sv_landing_motw_title(inputs)
	if (locale === "tr") return tr_landing_motw_title(inputs)
	if (locale === "zh") return zh_landing_motw_title(inputs)
	if (locale === "ja") return ja_landing_motw_title(inputs)
	return en_landing_motw_title(inputs)
});
