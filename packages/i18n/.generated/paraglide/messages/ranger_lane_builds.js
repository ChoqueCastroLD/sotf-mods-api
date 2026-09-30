/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_BuildsInputs */

const en_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const es_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const de_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const fr_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const it_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const nl_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const pl_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildy`)
};

const pt_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const ru_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройки`)
};

const sv_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggen`)
};

const tr_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılar`)
};

const zh_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑`)
};

const ja_ranger_lane_builds = /** @type {(inputs: Ranger_Lane_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築`)
};

/**
* | output |
* | --- |
* | "Builds" |
*
* @param {Ranger_Lane_BuildsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_builds = /** @type {((inputs?: Ranger_Lane_BuildsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_BuildsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_builds(inputs)
	if (locale === "de") return de_ranger_lane_builds(inputs)
	if (locale === "fr") return fr_ranger_lane_builds(inputs)
	if (locale === "it") return it_ranger_lane_builds(inputs)
	if (locale === "nl") return nl_ranger_lane_builds(inputs)
	if (locale === "pl") return pl_ranger_lane_builds(inputs)
	if (locale === "pt") return pt_ranger_lane_builds(inputs)
	if (locale === "ru") return ru_ranger_lane_builds(inputs)
	if (locale === "sv") return sv_ranger_lane_builds(inputs)
	if (locale === "tr") return tr_ranger_lane_builds(inputs)
	if (locale === "zh") return zh_ranger_lane_builds(inputs)
	if (locale === "ja") return ja_ranger_lane_builds(inputs)
	return en_ranger_lane_builds(inputs)
});
