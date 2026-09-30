/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ rank: NonNullable<unknown>, xp: NonNullable<unknown> }} Profile_Rank_TopInputs */

const en_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. The top of the island.`)
};

const es_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Lo más alto de la isla.`)
};

const de_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Ganz oben auf der Insel.`)
};

const fr_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Le sommet de l’île.`)
};

const it_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. La vetta dell’isola.`)
};

const nl_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. De top van het eiland.`)
};

const pl_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Szczyt wyspy.`)
};

const pt_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. O topo da ilha.`)
};

const ru_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Вершина острова.`)
};

const sv_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Toppen av ön.`)
};

const tr_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP. Adanın zirvesi.`)
};

const zh_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP。已登顶小岛。`)
};

const ja_profile_rank_top = /** @type {(inputs: Profile_Rank_TopInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rank} · ${i?.xp} XP。島の頂点です。`)
};

/**
* | output |
* | --- |
* | "{rank} · {xp} XP. The top of the island." |
*
* @param {Profile_Rank_TopInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_rank_top = /** @type {((inputs: Profile_Rank_TopInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_TopInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_rank_top(inputs)
	if (locale === "de") return de_profile_rank_top(inputs)
	if (locale === "fr") return fr_profile_rank_top(inputs)
	if (locale === "it") return it_profile_rank_top(inputs)
	if (locale === "nl") return nl_profile_rank_top(inputs)
	if (locale === "pl") return pl_profile_rank_top(inputs)
	if (locale === "pt") return pt_profile_rank_top(inputs)
	if (locale === "ru") return ru_profile_rank_top(inputs)
	if (locale === "sv") return sv_profile_rank_top(inputs)
	if (locale === "tr") return tr_profile_rank_top(inputs)
	if (locale === "zh") return zh_profile_rank_top(inputs)
	if (locale === "ja") return ja_profile_rank_top(inputs)
	return en_profile_rank_top(inputs)
});
