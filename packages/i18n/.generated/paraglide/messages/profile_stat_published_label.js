/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Stat_Published_LabelInputs */

const en_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods published`)
};

const es_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods publicados`)
};

const de_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichte Mods`)
};

const fr_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods publiés`)
};

const it_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod pubblicate`)
};

const nl_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepubliceerde mods`)
};

const pl_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikowane mody`)
};

const pt_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods publicados`)
};

const ru_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовано модов`)
};

const sv_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicerade moddar`)
};

const tr_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlanan modlar`)
};

const zh_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已发布模组`)
};

const ja_profile_stat_published_label = /** @type {(inputs: Profile_Stat_Published_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開した MOD`)
};

/**
* | output |
* | --- |
* | "Mods published" |
*
* @param {Profile_Stat_Published_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_stat_published_label = /** @type {((inputs?: Profile_Stat_Published_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Stat_Published_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_stat_published_label(inputs)
	if (locale === "de") return de_profile_stat_published_label(inputs)
	if (locale === "fr") return fr_profile_stat_published_label(inputs)
	if (locale === "it") return it_profile_stat_published_label(inputs)
	if (locale === "nl") return nl_profile_stat_published_label(inputs)
	if (locale === "pl") return pl_profile_stat_published_label(inputs)
	if (locale === "pt") return pt_profile_stat_published_label(inputs)
	if (locale === "ru") return ru_profile_stat_published_label(inputs)
	if (locale === "sv") return sv_profile_stat_published_label(inputs)
	if (locale === "tr") return tr_profile_stat_published_label(inputs)
	if (locale === "zh") return zh_profile_stat_published_label(inputs)
	if (locale === "ja") return ja_profile_stat_published_label(inputs)
	return en_profile_stat_published_label(inputs)
});
