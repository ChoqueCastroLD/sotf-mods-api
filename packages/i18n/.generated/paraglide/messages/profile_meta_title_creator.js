/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, handle: NonNullable<unknown> }} Profile_Meta_Title_CreatorInputs */

const en_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — Sons of the Forest mod creator`)
};

const es_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — creador de mods de Sons of the Forest`)
};

const de_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — Mod-Ersteller für Sons of the Forest`)
};

const fr_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — créateur de mods Sons of the Forest`)
};

const it_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — creatore di mod per Sons of the Forest`)
};

const nl_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — maker van Sons of the Forest-mods`)
};

const pl_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — twórca modów do Sons of the Forest`)
};

const pt_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — criador de mods de Sons of the Forest`)
};

const ru_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — автор модов для Sons of the Forest`)
};

const sv_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — modskapare för Sons of the Forest`)
};

const tr_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) — Sons of the Forest mod üreticisi`)
};

const zh_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}（@${i?.handle}）— Sons of the Forest 模组创作者`)
};

const ja_profile_meta_title_creator = /** @type {(inputs: Profile_Meta_Title_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}（@${i?.handle}）— Sons of the Forest の MOD クリエイター`)
};

/**
* | output |
* | --- |
* | "{name} (@{handle}) — Sons of the Forest mod creator" |
*
* @param {Profile_Meta_Title_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_meta_title_creator = /** @type {((inputs: Profile_Meta_Title_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Meta_Title_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_meta_title_creator(inputs)
	if (locale === "de") return de_profile_meta_title_creator(inputs)
	if (locale === "fr") return fr_profile_meta_title_creator(inputs)
	if (locale === "it") return it_profile_meta_title_creator(inputs)
	if (locale === "nl") return nl_profile_meta_title_creator(inputs)
	if (locale === "pl") return pl_profile_meta_title_creator(inputs)
	if (locale === "pt") return pt_profile_meta_title_creator(inputs)
	if (locale === "ru") return ru_profile_meta_title_creator(inputs)
	if (locale === "sv") return sv_profile_meta_title_creator(inputs)
	if (locale === "tr") return tr_profile_meta_title_creator(inputs)
	if (locale === "zh") return zh_profile_meta_title_creator(inputs)
	if (locale === "ja") return ja_profile_meta_title_creator(inputs)
	return en_profile_meta_title_creator(inputs)
});
