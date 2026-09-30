/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_Empty_TitleInputs */

const en_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quiet trail`)
};

const es_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Camino tranquilo`)
};

const de_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stiller Pfad`)
};

const fr_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sentier calme`)
};

const it_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sentiero tranquillo`)
};

const nl_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stil pad`)
};

const pl_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cichy szlak`)
};

const pt_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trilha tranquila`)
};

const ru_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тихая тропа`)
};

const sv_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tyst stig`)
};

const tr_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sessiz patika`)
};

const zh_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小径静悄悄`)
};

const ja_profile_activity_empty_title = /** @type {(inputs: Profile_Activity_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`静かな小道`)
};

/**
* | output |
* | --- |
* | "Quiet trail" |
*
* @param {Profile_Activity_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_empty_title = /** @type {((inputs?: Profile_Activity_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_empty_title(inputs)
	if (locale === "de") return de_profile_activity_empty_title(inputs)
	if (locale === "fr") return fr_profile_activity_empty_title(inputs)
	if (locale === "it") return it_profile_activity_empty_title(inputs)
	if (locale === "nl") return nl_profile_activity_empty_title(inputs)
	if (locale === "pl") return pl_profile_activity_empty_title(inputs)
	if (locale === "pt") return pt_profile_activity_empty_title(inputs)
	if (locale === "ru") return ru_profile_activity_empty_title(inputs)
	if (locale === "sv") return sv_profile_activity_empty_title(inputs)
	if (locale === "tr") return tr_profile_activity_empty_title(inputs)
	if (locale === "zh") return zh_profile_activity_empty_title(inputs)
	if (locale === "ja") return ja_profile_activity_empty_title(inputs)
	return en_profile_activity_empty_title(inputs)
});
