/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Well_Documented_NameInputs */

const en_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Well Documented`)
};

const es_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bien documentado`)
};

const de_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gut dokumentiert`)
};

const fr_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bien documenté`)
};

const it_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ben documentata`)
};

const nl_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Goed gedocumenteerd`)
};

const pl_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dobrze udokumentowany`)
};

const pt_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bem documentado`)
};

const ru_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Хорошо задокументирован`)
};

const sv_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väldokumenterad`)
};

const tr_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İyi Belgelenmiş`)
};

const zh_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文档完善`)
};

const ja_profile_badge_well_documented_name = /** @type {(inputs: Profile_Badge_Well_Documented_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ドキュメント充実`)
};

/**
* | output |
* | --- |
* | "Well Documented" |
*
* @param {Profile_Badge_Well_Documented_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_well_documented_name = /** @type {((inputs?: Profile_Badge_Well_Documented_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Well_Documented_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_well_documented_name(inputs)
	if (locale === "de") return de_profile_badge_well_documented_name(inputs)
	if (locale === "fr") return fr_profile_badge_well_documented_name(inputs)
	if (locale === "it") return it_profile_badge_well_documented_name(inputs)
	if (locale === "nl") return nl_profile_badge_well_documented_name(inputs)
	if (locale === "pl") return pl_profile_badge_well_documented_name(inputs)
	if (locale === "pt") return pt_profile_badge_well_documented_name(inputs)
	if (locale === "ru") return ru_profile_badge_well_documented_name(inputs)
	if (locale === "sv") return sv_profile_badge_well_documented_name(inputs)
	if (locale === "tr") return tr_profile_badge_well_documented_name(inputs)
	if (locale === "zh") return zh_profile_badge_well_documented_name(inputs)
	if (locale === "ja") return ja_profile_badge_well_documented_name(inputs)
	return en_profile_badge_well_documented_name(inputs)
});
