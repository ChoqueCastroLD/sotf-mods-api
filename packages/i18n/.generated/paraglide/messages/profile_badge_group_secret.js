/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Group_SecretInputs */

const en_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secret`)
};

const es_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secretas`)
};

const de_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geheim`)
};

const fr_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secrets`)
};

const it_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segreti`)
};

const nl_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geheim`)
};

const pl_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sekretne`)
};

const pt_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secretas`)
};

const ru_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Секретные`)
};

const sv_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hemliga`)
};

const tr_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizli`)
};

const zh_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏`)
};

const ja_profile_badge_group_secret = /** @type {(inputs: Profile_Badge_Group_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シークレット`)
};

/**
* | output |
* | --- |
* | "Secret" |
*
* @param {Profile_Badge_Group_SecretInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_group_secret = /** @type {((inputs?: Profile_Badge_Group_SecretInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Group_SecretInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_group_secret(inputs)
	if (locale === "de") return de_profile_badge_group_secret(inputs)
	if (locale === "fr") return fr_profile_badge_group_secret(inputs)
	if (locale === "it") return it_profile_badge_group_secret(inputs)
	if (locale === "nl") return nl_profile_badge_group_secret(inputs)
	if (locale === "pl") return pl_profile_badge_group_secret(inputs)
	if (locale === "pt") return pt_profile_badge_group_secret(inputs)
	if (locale === "ru") return ru_profile_badge_group_secret(inputs)
	if (locale === "sv") return sv_profile_badge_group_secret(inputs)
	if (locale === "tr") return tr_profile_badge_group_secret(inputs)
	if (locale === "zh") return zh_profile_badge_group_secret(inputs)
	if (locale === "ja") return ja_profile_badge_group_secret(inputs)
	return en_profile_badge_group_secret(inputs)
});
