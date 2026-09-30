/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ level: NonNullable<unknown> }} Ranger_Trust_LevelInputs */

const en_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Level ${i?.level}`)
};

const es_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nivel ${i?.level}`)
};

const de_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stufe ${i?.level}`)
};

const fr_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niveau ${i?.level}`)
};

const it_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Livello ${i?.level}`)
};

const nl_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niveau ${i?.level}`)
};

const pl_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Poziom ${i?.level}`)
};

const pt_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nível ${i?.level}`)
};

const ru_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Уровень ${i?.level}`)
};

const sv_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nivå ${i?.level}`)
};

const tr_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seviye ${i?.level}`)
};

const zh_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`等级 ${i?.level}`)
};

const ja_ranger_trust_level = /** @type {(inputs: Ranger_Trust_LevelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`レベル ${i?.level}`)
};

/**
* | output |
* | --- |
* | "Level {level}" |
*
* @param {Ranger_Trust_LevelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_trust_level = /** @type {((inputs: Ranger_Trust_LevelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Trust_LevelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_trust_level(inputs)
	if (locale === "de") return de_ranger_trust_level(inputs)
	if (locale === "fr") return fr_ranger_trust_level(inputs)
	if (locale === "it") return it_ranger_trust_level(inputs)
	if (locale === "nl") return nl_ranger_trust_level(inputs)
	if (locale === "pl") return pl_ranger_trust_level(inputs)
	if (locale === "pt") return pt_ranger_trust_level(inputs)
	if (locale === "ru") return ru_ranger_trust_level(inputs)
	if (locale === "sv") return sv_ranger_trust_level(inputs)
	if (locale === "tr") return tr_ranger_trust_level(inputs)
	if (locale === "zh") return zh_ranger_trust_level(inputs)
	if (locale === "ja") return ja_ranger_trust_level(inputs)
	return en_ranger_trust_level(inputs)
});
