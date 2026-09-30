/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ rank: NonNullable<unknown>, xp: NonNullable<unknown>, needed: NonNullable<unknown>, next: NonNullable<unknown> }} Profile_Rank_ProgressInputs */

const en_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. ${i?.needed} XP to ${i?.next}.`)
};

const es_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Faltan ${i?.needed} XP para ${i?.next}.`)
};

const de_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Noch ${i?.needed} XP bis ${i?.next}.`)
};

const fr_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Encore ${i?.needed} XP avant ${i?.next}.`)
};

const it_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Mancano ${i?.needed} XP per ${i?.next}.`)
};

const nl_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Nog ${i?.needed} XP tot ${i?.next}.`)
};

const pl_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Do rangi „${i?.next}” brakuje ${i?.needed} XP.`)
};

const pt_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Faltam ${i?.needed} XP para ${i?.next}.`)
};

const ru_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. До ранга «${i?.next}» осталось ${i?.needed} XP.`)
};

const sv_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. ${i?.needed} XP kvar till ${i?.next}.`)
};

const tr_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. ${i?.next} için ${i?.needed} XP kaldı.`)
};

const zh_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP。距离${i?.next}还差 ${i?.needed} XP。`)
};

const ja_profile_rank_progress = /** @type {(inputs: Profile_Rank_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP。${i?.next} まであと ${i?.needed} XP。`)
};

/**
* | output |
* | --- |
* | "{rank} · {xp} XP. {needed} XP to {next}." |
*
* @param {Profile_Rank_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_rank_progress = /** @type {((inputs: Profile_Rank_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_rank_progress(inputs)
	if (locale === "de") return de_profile_rank_progress(inputs)
	if (locale === "fr") return fr_profile_rank_progress(inputs)
	if (locale === "it") return it_profile_rank_progress(inputs)
	if (locale === "nl") return nl_profile_rank_progress(inputs)
	if (locale === "pl") return pl_profile_rank_progress(inputs)
	if (locale === "pt") return pt_profile_rank_progress(inputs)
	if (locale === "ru") return ru_profile_rank_progress(inputs)
	if (locale === "sv") return sv_profile_rank_progress(inputs)
	if (locale === "tr") return tr_profile_rank_progress(inputs)
	if (locale === "zh") return zh_profile_rank_progress(inputs)
	if (locale === "ja") return ja_profile_rank_progress(inputs)
	return en_profile_rank_progress(inputs)
});
