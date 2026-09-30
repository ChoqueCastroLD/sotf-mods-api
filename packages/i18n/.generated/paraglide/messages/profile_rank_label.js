/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Rank_LabelInputs */

const en_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivor rank`)
};

const es_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rango de superviviente`)
};

const de_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Überlebenden-Rang`)
};

const fr_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rang de survivant`)
};

const it_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grado di sopravvissuto`)
};

const nl_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overlevingsrang`)
};

const pl_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranga ocalałego`)
};

const pt_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patente de sobrevivente`)
};

const ru_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ранг выжившего`)
};

const sv_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlevarrang`)
};

const tr_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayatta kalan rütbesi`)
};

const zh_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`幸存者等级`)
};

const ja_profile_rank_label = /** @type {(inputs: Profile_Rank_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サバイバーランク`)
};

/**
* | output |
* | --- |
* | "Survivor rank" |
*
* @param {Profile_Rank_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_rank_label = /** @type {((inputs?: Profile_Rank_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_rank_label(inputs)
	if (locale === "de") return de_profile_rank_label(inputs)
	if (locale === "fr") return fr_profile_rank_label(inputs)
	if (locale === "it") return it_profile_rank_label(inputs)
	if (locale === "nl") return nl_profile_rank_label(inputs)
	if (locale === "pl") return pl_profile_rank_label(inputs)
	if (locale === "pt") return pt_profile_rank_label(inputs)
	if (locale === "ru") return ru_profile_rank_label(inputs)
	if (locale === "sv") return sv_profile_rank_label(inputs)
	if (locale === "tr") return tr_profile_rank_label(inputs)
	if (locale === "zh") return zh_profile_rank_label(inputs)
	if (locale === "ja") return ja_profile_rank_label(inputs)
	return en_profile_rank_label(inputs)
});
