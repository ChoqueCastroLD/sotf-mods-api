/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Stage_BuildInputs */

const en_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const es_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea`)
};

const de_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bauen`)
};

const fr_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Création`)
};

const it_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creazione`)
};

const nl_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bouwen`)
};

const pl_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tworzenie`)
};

const pt_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criação`)
};

const ru_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создание`)
};

const sv_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygg`)
};

const tr_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapım`)
};

const zh_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制作`)
};

const ja_jams_stage_build = /** @type {(inputs: Jams_Stage_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制作`)
};

/**
* | output |
* | --- |
* | "Build" |
*
* @param {Jams_Stage_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_stage_build = /** @type {((inputs?: Jams_Stage_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Stage_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_stage_build(inputs)
	if (locale === "de") return de_jams_stage_build(inputs)
	if (locale === "fr") return fr_jams_stage_build(inputs)
	if (locale === "it") return it_jams_stage_build(inputs)
	if (locale === "nl") return nl_jams_stage_build(inputs)
	if (locale === "pl") return pl_jams_stage_build(inputs)
	if (locale === "pt") return pt_jams_stage_build(inputs)
	if (locale === "ru") return ru_jams_stage_build(inputs)
	if (locale === "sv") return sv_jams_stage_build(inputs)
	if (locale === "tr") return tr_jams_stage_build(inputs)
	if (locale === "zh") return zh_jams_stage_build(inputs)
	if (locale === "ja") return ja_jams_stage_build(inputs)
	return en_jams_stage_build(inputs)
});
