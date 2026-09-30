/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Creators_TitleInputs */

const en_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creators`)
};

const es_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creadores`)
};

const de_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersteller`)
};

const fr_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateurs`)
};

const it_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatori`)
};

const nl_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makers`)
};

const pl_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórcy`)
};

const pt_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criadores`)
};

const ru_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы`)
};

const sv_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üreticiler`)
};

const zh_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者`)
};

const ja_profile_creators_title = /** @type {(inputs: Profile_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター`)
};

/**
* | output |
* | --- |
* | "Creators" |
*
* @param {Profile_Creators_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_title = /** @type {((inputs?: Profile_Creators_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_title(inputs)
	if (locale === "de") return de_profile_creators_title(inputs)
	if (locale === "fr") return fr_profile_creators_title(inputs)
	if (locale === "it") return it_profile_creators_title(inputs)
	if (locale === "nl") return nl_profile_creators_title(inputs)
	if (locale === "pl") return pl_profile_creators_title(inputs)
	if (locale === "pt") return pt_profile_creators_title(inputs)
	if (locale === "ru") return ru_profile_creators_title(inputs)
	if (locale === "sv") return sv_profile_creators_title(inputs)
	if (locale === "tr") return tr_profile_creators_title(inputs)
	if (locale === "zh") return zh_profile_creators_title(inputs)
	if (locale === "ja") return ja_profile_creators_title(inputs)
	return en_profile_creators_title(inputs)
});
