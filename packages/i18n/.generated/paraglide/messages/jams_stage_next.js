/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Stage_NextInputs */

const en_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coming up`)
};

const es_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiente`)
};

const de_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als Nächstes`)
};

const fr_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À venir`)
};

const it_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In arrivo`)
};

const nl_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hierna`)
};

const pl_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następny`)
};

const pt_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A seguir`)
};

const ru_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Впереди`)
};

const sv_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommer härnäst`)
};

const tr_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıradaki`)
};

const zh_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接下来`)
};

const ja_jams_stage_next = /** @type {(inputs: Jams_Stage_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これから`)
};

/**
* | output |
* | --- |
* | "Coming up" |
*
* @param {Jams_Stage_NextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_stage_next = /** @type {((inputs?: Jams_Stage_NextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Stage_NextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_stage_next(inputs)
	if (locale === "de") return de_jams_stage_next(inputs)
	if (locale === "fr") return fr_jams_stage_next(inputs)
	if (locale === "it") return it_jams_stage_next(inputs)
	if (locale === "nl") return nl_jams_stage_next(inputs)
	if (locale === "pl") return pl_jams_stage_next(inputs)
	if (locale === "pt") return pt_jams_stage_next(inputs)
	if (locale === "ru") return ru_jams_stage_next(inputs)
	if (locale === "sv") return sv_jams_stage_next(inputs)
	if (locale === "tr") return tr_jams_stage_next(inputs)
	if (locale === "zh") return zh_jams_stage_next(inputs)
	if (locale === "ja") return ja_jams_stage_next(inputs)
	return en_jams_stage_next(inputs)
});
