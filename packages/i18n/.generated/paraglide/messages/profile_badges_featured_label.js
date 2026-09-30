/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badges_Featured_LabelInputs */

const en_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Featured badges`)
};

const es_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignias destacadas`)
};

const de_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hervorgehobene Abzeichen`)
};

const fr_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges mis en avant`)
};

const it_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivi in evidenza`)
};

const nl_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitgelichte badges`)
};

const pl_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyróżnione odznaki`)
};

const pt_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnias em destaque`)
};

const ru_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Избранные значки`)
};

const sv_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvalda märken`)
};

const tr_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öne çıkan rozetler`)
};

const zh_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`精选徽章`)
};

const ja_profile_badges_featured_label = /** @type {(inputs: Profile_Badges_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注目のバッジ`)
};

/**
* | output |
* | --- |
* | "Featured badges" |
*
* @param {Profile_Badges_Featured_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badges_featured_label = /** @type {((inputs?: Profile_Badges_Featured_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badges_Featured_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badges_featured_label(inputs)
	if (locale === "de") return de_profile_badges_featured_label(inputs)
	if (locale === "fr") return fr_profile_badges_featured_label(inputs)
	if (locale === "it") return it_profile_badges_featured_label(inputs)
	if (locale === "nl") return nl_profile_badges_featured_label(inputs)
	if (locale === "pl") return pl_profile_badges_featured_label(inputs)
	if (locale === "pt") return pt_profile_badges_featured_label(inputs)
	if (locale === "ru") return ru_profile_badges_featured_label(inputs)
	if (locale === "sv") return sv_profile_badges_featured_label(inputs)
	if (locale === "tr") return tr_profile_badges_featured_label(inputs)
	if (locale === "zh") return zh_profile_badges_featured_label(inputs)
	if (locale === "ja") return ja_profile_badges_featured_label(inputs)
	return en_profile_badges_featured_label(inputs)
});
