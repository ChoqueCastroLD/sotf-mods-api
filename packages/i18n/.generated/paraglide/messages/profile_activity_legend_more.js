/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_Legend_MoreInputs */

const en_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More`)
};

const es_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más`)
};

const de_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr`)
};

const fr_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus`)
};

const it_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più`)
};

const nl_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer`)
};

const pl_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej`)
};

const pt_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais`)
};

const ru_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше`)
};

const sv_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mer`)
};

const tr_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok`)
};

const zh_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多`)
};

const ja_profile_activity_legend_more = /** @type {(inputs: Profile_Activity_Legend_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多`)
};

/**
* | output |
* | --- |
* | "More" |
*
* @param {Profile_Activity_Legend_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_legend_more = /** @type {((inputs?: Profile_Activity_Legend_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Legend_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_legend_more(inputs)
	if (locale === "de") return de_profile_activity_legend_more(inputs)
	if (locale === "fr") return fr_profile_activity_legend_more(inputs)
	if (locale === "it") return it_profile_activity_legend_more(inputs)
	if (locale === "nl") return nl_profile_activity_legend_more(inputs)
	if (locale === "pl") return pl_profile_activity_legend_more(inputs)
	if (locale === "pt") return pt_profile_activity_legend_more(inputs)
	if (locale === "ru") return ru_profile_activity_legend_more(inputs)
	if (locale === "sv") return sv_profile_activity_legend_more(inputs)
	if (locale === "tr") return tr_profile_activity_legend_more(inputs)
	if (locale === "zh") return zh_profile_activity_legend_more(inputs)
	if (locale === "ja") return ja_profile_activity_legend_more(inputs)
	return en_profile_activity_legend_more(inputs)
});
