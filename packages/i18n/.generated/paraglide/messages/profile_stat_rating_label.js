/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Stat_Rating_LabelInputs */

const en_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avg. rating`)
};

const es_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valoración media`)
};

const de_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ø Bewertung`)
};

const fr_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note moyenne`)
};

const it_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voto medio`)
};

const nl_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gem. beoordeling`)
};

const pl_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Średnia ocena`)
};

const pt_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota média`)
};

const ru_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Средняя оценка`)
};

const sv_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Snittbetyg`)
};

const tr_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ort. puan`)
};

const zh_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平均评分`)
};

const ja_profile_stat_rating_label = /** @type {(inputs: Profile_Stat_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平均評価`)
};

/**
* | output |
* | --- |
* | "Avg. rating" |
*
* @param {Profile_Stat_Rating_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_stat_rating_label = /** @type {((inputs?: Profile_Stat_Rating_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Stat_Rating_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_stat_rating_label(inputs)
	if (locale === "de") return de_profile_stat_rating_label(inputs)
	if (locale === "fr") return fr_profile_stat_rating_label(inputs)
	if (locale === "it") return it_profile_stat_rating_label(inputs)
	if (locale === "nl") return nl_profile_stat_rating_label(inputs)
	if (locale === "pl") return pl_profile_stat_rating_label(inputs)
	if (locale === "pt") return pt_profile_stat_rating_label(inputs)
	if (locale === "ru") return ru_profile_stat_rating_label(inputs)
	if (locale === "sv") return sv_profile_stat_rating_label(inputs)
	if (locale === "tr") return tr_profile_stat_rating_label(inputs)
	if (locale === "zh") return zh_profile_stat_rating_label(inputs)
	if (locale === "ja") return ja_profile_stat_rating_label(inputs)
	return en_profile_stat_rating_label(inputs)
});
