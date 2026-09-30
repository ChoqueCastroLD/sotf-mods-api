/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Stat_Helpful_LabelInputs */

const en_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Helpful votes`)
};

const es_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votos útiles`)
};

const de_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hilfreich-Stimmen`)
};

const fr_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votes utiles`)
};

const it_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voti utili`)
};

const nl_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuttig-stemmen`)
};

const pl_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głosy „pomocne”`)
};

const pt_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votos úteis`)
};

const ru_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голоса «полезно»`)
};

const sv_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hjälpsam-röster`)
};

const tr_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faydalı oyları`)
};

const zh_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“有帮助”票`)
};

const ja_profile_stat_helpful_label = /** @type {(inputs: Profile_Stat_Helpful_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`「役に立った」票`)
};

/**
* | output |
* | --- |
* | "Helpful votes" |
*
* @param {Profile_Stat_Helpful_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_stat_helpful_label = /** @type {((inputs?: Profile_Stat_Helpful_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Stat_Helpful_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_stat_helpful_label(inputs)
	if (locale === "de") return de_profile_stat_helpful_label(inputs)
	if (locale === "fr") return fr_profile_stat_helpful_label(inputs)
	if (locale === "it") return it_profile_stat_helpful_label(inputs)
	if (locale === "nl") return nl_profile_stat_helpful_label(inputs)
	if (locale === "pl") return pl_profile_stat_helpful_label(inputs)
	if (locale === "pt") return pt_profile_stat_helpful_label(inputs)
	if (locale === "ru") return ru_profile_stat_helpful_label(inputs)
	if (locale === "sv") return sv_profile_stat_helpful_label(inputs)
	if (locale === "tr") return tr_profile_stat_helpful_label(inputs)
	if (locale === "zh") return zh_profile_stat_helpful_label(inputs)
	if (locale === "ja") return ja_profile_stat_helpful_label(inputs)
	return en_profile_stat_helpful_label(inputs)
});
