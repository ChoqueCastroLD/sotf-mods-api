/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Profile_Creator_Top_ModInputs */

const en_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Top mod: ${i?.mod}`)
};

const es_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod más popular: ${i?.mod}`)
};

const de_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Top-Mod: ${i?.mod}`)
};

const fr_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod phare : ${i?.mod}`)
};

const it_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod di punta: ${i?.mod}`)
};

const nl_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Topmod: ${i?.mod}`)
};

const pl_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Najpopularniejszy mod: ${i?.mod}`)
};

const pt_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod principal: ${i?.mod}`)
};

const ru_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Главный мод: ${i?.mod}`)
};

const sv_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toppmodd: ${i?.mod}`)
};

const tr_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En popüler mod: ${i?.mod}`)
};

const zh_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`代表作：${i?.mod}`)
};

const ja_profile_creator_top_mod = /** @type {(inputs: Profile_Creator_Top_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`代表作：${i?.mod}`)
};

/**
* | output |
* | --- |
* | "Top mod: {mod}" |
*
* @param {Profile_Creator_Top_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creator_top_mod = /** @type {((inputs: Profile_Creator_Top_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creator_Top_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creator_top_mod(inputs)
	if (locale === "de") return de_profile_creator_top_mod(inputs)
	if (locale === "fr") return fr_profile_creator_top_mod(inputs)
	if (locale === "it") return it_profile_creator_top_mod(inputs)
	if (locale === "nl") return nl_profile_creator_top_mod(inputs)
	if (locale === "pl") return pl_profile_creator_top_mod(inputs)
	if (locale === "pt") return pt_profile_creator_top_mod(inputs)
	if (locale === "ru") return ru_profile_creator_top_mod(inputs)
	if (locale === "sv") return sv_profile_creator_top_mod(inputs)
	if (locale === "tr") return tr_profile_creator_top_mod(inputs)
	if (locale === "zh") return zh_profile_creator_top_mod(inputs)
	if (locale === "ja") return ja_profile_creator_top_mod(inputs)
	return en_profile_creator_top_mod(inputs)
});
