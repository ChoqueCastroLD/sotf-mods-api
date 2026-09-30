/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_DurationInputs */

const en_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duration`)
};

const es_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duración`)
};

const de_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dauer`)
};

const fr_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durée`)
};

const it_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durata`)
};

const nl_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duur`)
};

const pl_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czas trwania`)
};

const pt_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duração`)
};

const ru_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Срок`)
};

const sv_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Längd`)
};

const tr_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Süre`)
};

const zh_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时长`)
};

const ja_ranger_sanction_duration = /** @type {(inputs: Ranger_Sanction_DurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期間`)
};

/**
* | output |
* | --- |
* | "Duration" |
*
* @param {Ranger_Sanction_DurationInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_duration = /** @type {((inputs?: Ranger_Sanction_DurationInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_DurationInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_duration(inputs)
	if (locale === "de") return de_ranger_sanction_duration(inputs)
	if (locale === "fr") return fr_ranger_sanction_duration(inputs)
	if (locale === "it") return it_ranger_sanction_duration(inputs)
	if (locale === "nl") return nl_ranger_sanction_duration(inputs)
	if (locale === "pl") return pl_ranger_sanction_duration(inputs)
	if (locale === "pt") return pt_ranger_sanction_duration(inputs)
	if (locale === "ru") return ru_ranger_sanction_duration(inputs)
	if (locale === "sv") return sv_ranger_sanction_duration(inputs)
	if (locale === "tr") return tr_ranger_sanction_duration(inputs)
	if (locale === "zh") return zh_ranger_sanction_duration(inputs)
	if (locale === "ja") return ja_ranger_sanction_duration(inputs)
	return en_ranger_sanction_duration(inputs)
});
