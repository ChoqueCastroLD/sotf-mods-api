/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Creators_Sort_SpotlightInputs */

const en_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spotlight`)
};

const es_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destacados`)
};

const de_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Im Rampenlicht`)
};

const fr_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À la une`)
};

const it_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In primo piano`)
};

const nl_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In de schijnwerpers`)
};

const pl_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W centrum uwagi`)
};

const pt_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em destaque`)
};

const ru_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В центре внимания`)
};

const sv_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I rampljuset`)
};

const tr_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öne çıkanlar`)
};

const zh_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`焦点`)
};

const ja_profile_creators_sort_spotlight = /** @type {(inputs: Profile_Creators_Sort_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スポットライト`)
};

/**
* | output |
* | --- |
* | "Spotlight" |
*
* @param {Profile_Creators_Sort_SpotlightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_sort_spotlight = /** @type {((inputs?: Profile_Creators_Sort_SpotlightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Sort_SpotlightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_sort_spotlight(inputs)
	if (locale === "de") return de_profile_creators_sort_spotlight(inputs)
	if (locale === "fr") return fr_profile_creators_sort_spotlight(inputs)
	if (locale === "it") return it_profile_creators_sort_spotlight(inputs)
	if (locale === "nl") return nl_profile_creators_sort_spotlight(inputs)
	if (locale === "pl") return pl_profile_creators_sort_spotlight(inputs)
	if (locale === "pt") return pt_profile_creators_sort_spotlight(inputs)
	if (locale === "ru") return ru_profile_creators_sort_spotlight(inputs)
	if (locale === "sv") return sv_profile_creators_sort_spotlight(inputs)
	if (locale === "tr") return tr_profile_creators_sort_spotlight(inputs)
	if (locale === "zh") return zh_profile_creators_sort_spotlight(inputs)
	if (locale === "ja") return ja_profile_creators_sort_spotlight(inputs)
	return en_profile_creators_sort_spotlight(inputs)
});
