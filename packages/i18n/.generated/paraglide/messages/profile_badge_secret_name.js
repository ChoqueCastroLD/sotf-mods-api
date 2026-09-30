/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Secret_NameInputs */

const en_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secret badge`)
};

const es_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignia secreta`)
};

const de_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geheimes Abzeichen`)
};

const fr_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badge secret`)
};

const it_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivo segreto`)
};

const nl_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geheime badge`)
};

const pl_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sekretna odznaka`)
};

const pt_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnia secreta`)
};

const ru_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Секретный значок`)
};

const sv_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hemligt märke`)
};

const tr_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizli rozet`)
};

const zh_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏徽章`)
};

const ja_profile_badge_secret_name = /** @type {(inputs: Profile_Badge_Secret_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シークレットバッジ`)
};

/**
* | output |
* | --- |
* | "Secret badge" |
*
* @param {Profile_Badge_Secret_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_secret_name = /** @type {((inputs?: Profile_Badge_Secret_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Secret_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_secret_name(inputs)
	if (locale === "de") return de_profile_badge_secret_name(inputs)
	if (locale === "fr") return fr_profile_badge_secret_name(inputs)
	if (locale === "it") return it_profile_badge_secret_name(inputs)
	if (locale === "nl") return nl_profile_badge_secret_name(inputs)
	if (locale === "pl") return pl_profile_badge_secret_name(inputs)
	if (locale === "pt") return pt_profile_badge_secret_name(inputs)
	if (locale === "ru") return ru_profile_badge_secret_name(inputs)
	if (locale === "sv") return sv_profile_badge_secret_name(inputs)
	if (locale === "tr") return tr_profile_badge_secret_name(inputs)
	if (locale === "zh") return zh_profile_badge_secret_name(inputs)
	if (locale === "ja") return ja_profile_badge_secret_name(inputs)
	return en_profile_badge_secret_name(inputs)
});
