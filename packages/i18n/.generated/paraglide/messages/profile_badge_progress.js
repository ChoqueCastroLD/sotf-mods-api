/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ current: NonNullable<unknown>, target: NonNullable<unknown> }} Profile_Badge_ProgressInputs */

const en_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const es_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const de_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const fr_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const it_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const nl_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const pl_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const pt_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const ru_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const sv_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const tr_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const zh_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const ja_profile_badge_progress = /** @type {(inputs: Profile_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

/**
* | output |
* | --- |
* | "{current} / {target}" |
*
* @param {Profile_Badge_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_progress = /** @type {((inputs: Profile_Badge_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_progress(inputs)
	if (locale === "de") return de_profile_badge_progress(inputs)
	if (locale === "fr") return fr_profile_badge_progress(inputs)
	if (locale === "it") return it_profile_badge_progress(inputs)
	if (locale === "nl") return nl_profile_badge_progress(inputs)
	if (locale === "pl") return pl_profile_badge_progress(inputs)
	if (locale === "pt") return pt_profile_badge_progress(inputs)
	if (locale === "ru") return ru_profile_badge_progress(inputs)
	if (locale === "sv") return sv_profile_badge_progress(inputs)
	if (locale === "tr") return tr_profile_badge_progress(inputs)
	if (locale === "zh") return zh_profile_badge_progress(inputs)
	if (locale === "ja") return ja_profile_badge_progress(inputs)
	return en_profile_badge_progress(inputs)
});
