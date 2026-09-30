/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Stat_Mods_LabelInputs */

const en_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar`)
};

const zh_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_profile_stat_mods_label = /** @type {(inputs: Profile_Stat_Mods_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Profile_Stat_Mods_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_stat_mods_label = /** @type {((inputs?: Profile_Stat_Mods_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Stat_Mods_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_stat_mods_label(inputs)
	if (locale === "de") return de_profile_stat_mods_label(inputs)
	if (locale === "fr") return fr_profile_stat_mods_label(inputs)
	if (locale === "it") return it_profile_stat_mods_label(inputs)
	if (locale === "nl") return nl_profile_stat_mods_label(inputs)
	if (locale === "pl") return pl_profile_stat_mods_label(inputs)
	if (locale === "pt") return pt_profile_stat_mods_label(inputs)
	if (locale === "ru") return ru_profile_stat_mods_label(inputs)
	if (locale === "sv") return sv_profile_stat_mods_label(inputs)
	if (locale === "tr") return tr_profile_stat_mods_label(inputs)
	if (locale === "zh") return zh_profile_stat_mods_label(inputs)
	if (locale === "ja") return ja_profile_stat_mods_label(inputs)
	return en_profile_stat_mods_label(inputs)
});
