/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Helping_Hand_NameInputs */

const en_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Helping Hand`)
};

const es_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mano amiga`)
};

const de_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Helfende Hand`)
};

const fr_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coup de main`)
};

const it_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mano amica`)
};

const nl_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Helpende hand`)
};

const pl_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pomocna dłoń`)
};

const pt_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mão amiga`)
};

const ru_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рука помощи`)
};

const sv_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hjälpande hand`)
};

const tr_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yardım Eli`)
};

const zh_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`援手`)
};

const ja_profile_badge_helping_hand_name = /** @type {(inputs: Profile_Badge_Helping_Hand_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`助けの手`)
};

/**
* | output |
* | --- |
* | "Helping Hand" |
*
* @param {Profile_Badge_Helping_Hand_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_helping_hand_name = /** @type {((inputs?: Profile_Badge_Helping_Hand_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Helping_Hand_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_helping_hand_name(inputs)
	if (locale === "de") return de_profile_badge_helping_hand_name(inputs)
	if (locale === "fr") return fr_profile_badge_helping_hand_name(inputs)
	if (locale === "it") return it_profile_badge_helping_hand_name(inputs)
	if (locale === "nl") return nl_profile_badge_helping_hand_name(inputs)
	if (locale === "pl") return pl_profile_badge_helping_hand_name(inputs)
	if (locale === "pt") return pt_profile_badge_helping_hand_name(inputs)
	if (locale === "ru") return ru_profile_badge_helping_hand_name(inputs)
	if (locale === "sv") return sv_profile_badge_helping_hand_name(inputs)
	if (locale === "tr") return tr_profile_badge_helping_hand_name(inputs)
	if (locale === "zh") return zh_profile_badge_helping_hand_name(inputs)
	if (locale === "ja") return ja_profile_badge_helping_hand_name(inputs)
	return en_profile_badge_helping_hand_name(inputs)
});
