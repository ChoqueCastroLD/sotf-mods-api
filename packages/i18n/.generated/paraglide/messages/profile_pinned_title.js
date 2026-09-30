/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Pinned_TitleInputs */

const en_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pinned`)
};

const es_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fijados`)
};

const de_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angepinnt`)
};

const fr_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Épinglés`)
};

const it_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In evidenza`)
};

const nl_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vastgezet`)
};

const pl_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przypięte`)
};

const pt_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixados`)
};

const ru_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закреплённые`)
};

const sv_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fästa`)
};

const tr_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sabitlenenler`)
};

const zh_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`置顶`)
};

const ja_profile_pinned_title = /** @type {(inputs: Profile_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ピン留め`)
};

/**
* | output |
* | --- |
* | "Pinned" |
*
* @param {Profile_Pinned_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_pinned_title = /** @type {((inputs?: Profile_Pinned_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Pinned_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_pinned_title(inputs)
	if (locale === "de") return de_profile_pinned_title(inputs)
	if (locale === "fr") return fr_profile_pinned_title(inputs)
	if (locale === "it") return it_profile_pinned_title(inputs)
	if (locale === "nl") return nl_profile_pinned_title(inputs)
	if (locale === "pl") return pl_profile_pinned_title(inputs)
	if (locale === "pt") return pt_profile_pinned_title(inputs)
	if (locale === "ru") return ru_profile_pinned_title(inputs)
	if (locale === "sv") return sv_profile_pinned_title(inputs)
	if (locale === "tr") return tr_profile_pinned_title(inputs)
	if (locale === "zh") return zh_profile_pinned_title(inputs)
	if (locale === "ja") return ja_profile_pinned_title(inputs)
	return en_profile_pinned_title(inputs)
});
