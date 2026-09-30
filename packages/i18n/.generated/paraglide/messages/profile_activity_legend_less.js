/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_Legend_LessInputs */

const en_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Less`)
};

const es_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menos`)
};

const de_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weniger`)
};

const fr_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moins`)
};

const it_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meno`)
};

const nl_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minder`)
};

const pl_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mniej`)
};

const pt_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menos`)
};

const ru_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Меньше`)
};

const sv_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mindre`)
};

const tr_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Az`)
};

const zh_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`少`)
};

const ja_profile_activity_legend_less = /** @type {(inputs: Profile_Activity_Legend_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`少`)
};

/**
* | output |
* | --- |
* | "Less" |
*
* @param {Profile_Activity_Legend_LessInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_legend_less = /** @type {((inputs?: Profile_Activity_Legend_LessInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Legend_LessInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_legend_less(inputs)
	if (locale === "de") return de_profile_activity_legend_less(inputs)
	if (locale === "fr") return fr_profile_activity_legend_less(inputs)
	if (locale === "it") return it_profile_activity_legend_less(inputs)
	if (locale === "nl") return nl_profile_activity_legend_less(inputs)
	if (locale === "pl") return pl_profile_activity_legend_less(inputs)
	if (locale === "pt") return pt_profile_activity_legend_less(inputs)
	if (locale === "ru") return ru_profile_activity_legend_less(inputs)
	if (locale === "sv") return sv_profile_activity_legend_less(inputs)
	if (locale === "tr") return tr_profile_activity_legend_less(inputs)
	if (locale === "zh") return zh_profile_activity_legend_less(inputs)
	if (locale === "ja") return ja_profile_activity_legend_less(inputs)
	return en_profile_activity_legend_less(inputs)
});
