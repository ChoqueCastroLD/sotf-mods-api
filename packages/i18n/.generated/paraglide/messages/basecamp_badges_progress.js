/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ current: NonNullable<unknown>, target: NonNullable<unknown> }} Basecamp_Badges_ProgressInputs */

const en_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} of ${i?.target}`)
};

const es_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} de ${i?.target}`)
};

const de_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} von ${i?.target}`)
};

const fr_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} sur ${i?.target}`)
};

const it_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} su ${i?.target}`)
};

const nl_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} van ${i?.target}`)
};

const pl_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} z ${i?.target}`)
};

const pt_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} de ${i?.target}`)
};

const ru_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} из ${i?.target}`)
};

const sv_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} av ${i?.target}`)
};

const tr_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const zh_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const ja_basecamp_badges_progress = /** @type {(inputs: Basecamp_Badges_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

/**
* | output |
* | --- |
* | "{current} of {target}" |
*
* @param {Basecamp_Badges_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_progress = /** @type {((inputs: Basecamp_Badges_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_progress(inputs)
	if (locale === "de") return de_basecamp_badges_progress(inputs)
	if (locale === "fr") return fr_basecamp_badges_progress(inputs)
	if (locale === "it") return it_basecamp_badges_progress(inputs)
	if (locale === "nl") return nl_basecamp_badges_progress(inputs)
	if (locale === "pl") return pl_basecamp_badges_progress(inputs)
	if (locale === "pt") return pt_basecamp_badges_progress(inputs)
	if (locale === "ru") return ru_basecamp_badges_progress(inputs)
	if (locale === "sv") return sv_basecamp_badges_progress(inputs)
	if (locale === "tr") return tr_basecamp_badges_progress(inputs)
	if (locale === "zh") return zh_basecamp_badges_progress(inputs)
	if (locale === "ja") return ja_basecamp_badges_progress(inputs)
	return en_basecamp_badges_progress(inputs)
});
