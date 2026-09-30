/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, handle: NonNullable<unknown> }} Profile_Meta_Title_MemberInputs */

const en_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — Sons of the Forest modding community`)
};

const es_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — comunidad de mods de Sons of the Forest`)
};

const de_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — Sons-of-the-Forest-Modding-Community`)
};

const fr_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — communauté de modding Sons of the Forest`)
};

const it_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — community di modding di Sons of the Forest`)
};

const nl_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — Sons of the Forest-moddingcommunity`)
};

const pl_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — społeczność moderska Sons of the Forest`)
};

const pt_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — comunidade de mods de Sons of the Forest`)
};

const ru_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — сообщество моддинга Sons of the Forest`)
};

const sv_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — moddinggemenskapen för Sons of the Forest`)
};

const tr_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — Sons of the Forest mod topluluğu`)
};

const zh_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}（@${i?.handle}）— Sons of the Forest 模组社区`)
};

const ja_profile_meta_title_member = /** @type {(inputs: Profile_Meta_Title_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}（@${i?.handle}）— Sons of the Forest MOD コミュニティ`)
};

/**
* | output |
* | --- |
* | "{name} (@{handle}) — Sons of the Forest modding community" |
*
* @param {Profile_Meta_Title_MemberInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_meta_title_member = /** @type {((inputs: Profile_Meta_Title_MemberInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Meta_Title_MemberInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_meta_title_member(inputs)
	if (locale === "de") return de_profile_meta_title_member(inputs)
	if (locale === "fr") return fr_profile_meta_title_member(inputs)
	if (locale === "it") return it_profile_meta_title_member(inputs)
	if (locale === "nl") return nl_profile_meta_title_member(inputs)
	if (locale === "pl") return pl_profile_meta_title_member(inputs)
	if (locale === "pt") return pt_profile_meta_title_member(inputs)
	if (locale === "ru") return ru_profile_meta_title_member(inputs)
	if (locale === "sv") return sv_profile_meta_title_member(inputs)
	if (locale === "tr") return tr_profile_meta_title_member(inputs)
	if (locale === "zh") return zh_profile_meta_title_member(inputs)
	if (locale === "ja") return ja_profile_meta_title_member(inputs)
	return en_profile_meta_title_member(inputs)
});
