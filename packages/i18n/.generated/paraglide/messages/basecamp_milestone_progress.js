/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ current: NonNullable<unknown>, threshold: NonNullable<unknown> }} Basecamp_Milestone_ProgressInputs */

const en_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} of ${i?.threshold}`)
};

const es_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} de ${i?.threshold}`)
};

const de_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} von ${i?.threshold}`)
};

const fr_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} sur ${i?.threshold}`)
};

const it_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} su ${i?.threshold}`)
};

const nl_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} van ${i?.threshold}`)
};

const pl_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} z ${i?.threshold}`)
};

const pt_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} de ${i?.threshold}`)
};

const ru_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} из ${i?.threshold}`)
};

const sv_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} av ${i?.threshold}`)
};

const tr_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.threshold}`)
};

const zh_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.threshold}`)
};

const ja_basecamp_milestone_progress = /** @type {(inputs: Basecamp_Milestone_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.threshold}`)
};

/**
* | output |
* | --- |
* | "{current} of {threshold}" |
*
* @param {Basecamp_Milestone_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_milestone_progress = /** @type {((inputs: Basecamp_Milestone_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_milestone_progress(inputs)
	if (locale === "de") return de_basecamp_milestone_progress(inputs)
	if (locale === "fr") return fr_basecamp_milestone_progress(inputs)
	if (locale === "it") return it_basecamp_milestone_progress(inputs)
	if (locale === "nl") return nl_basecamp_milestone_progress(inputs)
	if (locale === "pl") return pl_basecamp_milestone_progress(inputs)
	if (locale === "pt") return pt_basecamp_milestone_progress(inputs)
	if (locale === "ru") return ru_basecamp_milestone_progress(inputs)
	if (locale === "sv") return sv_basecamp_milestone_progress(inputs)
	if (locale === "tr") return tr_basecamp_milestone_progress(inputs)
	if (locale === "zh") return zh_basecamp_milestone_progress(inputs)
	if (locale === "ja") return ja_basecamp_milestone_progress(inputs)
	return en_basecamp_milestone_progress(inputs)
});
