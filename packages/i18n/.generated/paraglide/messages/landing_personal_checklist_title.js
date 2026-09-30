/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_Checklist_TitleInputs */

const en_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day 1 on the island`)
};

const es_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Día 1 en la isla`)
};

const de_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag 1 auf der Insel`)
};

const fr_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jour 1 sur l’île`)
};

const it_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorno 1 sull’isola`)
};

const nl_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag 1 op het eiland`)
};

const pl_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzień 1 na wyspie`)
};

const pt_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dia 1 na ilha`)
};

const ru_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`День 1 на острове`)
};

const sv_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag 1 på ön`)
};

const tr_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adada 1. gün`)
};

const zh_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`岛上第 1 天`)
};

const ja_landing_personal_checklist_title = /** @type {(inputs: Landing_Personal_Checklist_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島での1日目`)
};

/**
* | output |
* | --- |
* | "Day 1 on the island" |
*
* @param {Landing_Personal_Checklist_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_checklist_title = /** @type {((inputs?: Landing_Personal_Checklist_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_Checklist_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_checklist_title(inputs)
	if (locale === "de") return de_landing_personal_checklist_title(inputs)
	if (locale === "fr") return fr_landing_personal_checklist_title(inputs)
	if (locale === "it") return it_landing_personal_checklist_title(inputs)
	if (locale === "nl") return nl_landing_personal_checklist_title(inputs)
	if (locale === "pl") return pl_landing_personal_checklist_title(inputs)
	if (locale === "pt") return pt_landing_personal_checklist_title(inputs)
	if (locale === "ru") return ru_landing_personal_checklist_title(inputs)
	if (locale === "sv") return sv_landing_personal_checklist_title(inputs)
	if (locale === "tr") return tr_landing_personal_checklist_title(inputs)
	if (locale === "zh") return zh_landing_personal_checklist_title(inputs)
	if (locale === "ja") return ja_landing_personal_checklist_title(inputs)
	return en_landing_personal_checklist_title(inputs)
});
