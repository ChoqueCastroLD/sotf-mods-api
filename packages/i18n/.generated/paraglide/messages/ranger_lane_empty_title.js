/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_Empty_TitleInputs */

const en_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All clear on this trail`)
};

const es_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo despejado en este sendero`)
};

const de_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles frei auf diesem Pfad`)
};

const fr_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien sur ce sentier`)
};

const it_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sentiero sgombro`)
};

const nl_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles vrij op dit pad`)
};

const pl_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szlak jest czysty`)
};

const pt_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trilha livre`)
};

const ru_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На этой тропе чисто`)
};

const sv_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fri stig`)
};

const tr_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu patika temiz`)
};

const zh_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这条小径很干净`)
};

const ja_ranger_lane_empty_title = /** @type {(inputs: Ranger_Lane_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この道は異常なし`)
};

/**
* | output |
* | --- |
* | "All clear on this trail" |
*
* @param {Ranger_Lane_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_empty_title = /** @type {((inputs?: Ranger_Lane_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_empty_title(inputs)
	if (locale === "de") return de_ranger_lane_empty_title(inputs)
	if (locale === "fr") return fr_ranger_lane_empty_title(inputs)
	if (locale === "it") return it_ranger_lane_empty_title(inputs)
	if (locale === "nl") return nl_ranger_lane_empty_title(inputs)
	if (locale === "pl") return pl_ranger_lane_empty_title(inputs)
	if (locale === "pt") return pt_ranger_lane_empty_title(inputs)
	if (locale === "ru") return ru_ranger_lane_empty_title(inputs)
	if (locale === "sv") return sv_ranger_lane_empty_title(inputs)
	if (locale === "tr") return tr_ranger_lane_empty_title(inputs)
	if (locale === "zh") return zh_ranger_lane_empty_title(inputs)
	if (locale === "ja") return ja_ranger_lane_empty_title(inputs)
	return en_ranger_lane_empty_title(inputs)
});
