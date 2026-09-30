/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Group_LegacyInputs */

const en_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Original survivors`)
};

const es_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supervivientes originales`)
};

const de_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ursprüngliche Überlebende`)
};

const fr_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivants d’origine`)
};

const it_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sopravvissuti originali`)
};

const nl_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oorspronkelijke overlevenden`)
};

const pl_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwsi ocaleni`)
};

const pt_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobreviventes originais`)
};

const ru_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первые выжившие`)
};

const sv_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ursprungliga överlevare`)
};

const tr_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk hayatta kalanlar`)
};

const zh_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元老幸存者`)
};

const ja_profile_badge_group_legacy = /** @type {(inputs: Profile_Badge_Group_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`初期サバイバー`)
};

/**
* | output |
* | --- |
* | "Original survivors" |
*
* @param {Profile_Badge_Group_LegacyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_group_legacy = /** @type {((inputs?: Profile_Badge_Group_LegacyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Group_LegacyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_group_legacy(inputs)
	if (locale === "de") return de_profile_badge_group_legacy(inputs)
	if (locale === "fr") return fr_profile_badge_group_legacy(inputs)
	if (locale === "it") return it_profile_badge_group_legacy(inputs)
	if (locale === "nl") return nl_profile_badge_group_legacy(inputs)
	if (locale === "pl") return pl_profile_badge_group_legacy(inputs)
	if (locale === "pt") return pt_profile_badge_group_legacy(inputs)
	if (locale === "ru") return ru_profile_badge_group_legacy(inputs)
	if (locale === "sv") return sv_profile_badge_group_legacy(inputs)
	if (locale === "tr") return tr_profile_badge_group_legacy(inputs)
	if (locale === "zh") return zh_profile_badge_group_legacy(inputs)
	if (locale === "ja") return ja_profile_badge_group_legacy(inputs)
	return en_profile_badge_group_legacy(inputs)
});
