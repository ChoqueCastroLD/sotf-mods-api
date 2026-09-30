/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Tab_BuildsInputs */

const en_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const es_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const de_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const fr_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const it_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const nl_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const pl_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildy`)
};

const pt_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const ru_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройки`)
};

const sv_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggen`)
};

const tr_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılar`)
};

const zh_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑`)
};

const ja_profile_tab_builds = /** @type {(inputs: Profile_Tab_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築`)
};

/**
* | output |
* | --- |
* | "Builds" |
*
* @param {Profile_Tab_BuildsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_tab_builds = /** @type {((inputs?: Profile_Tab_BuildsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Tab_BuildsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_tab_builds(inputs)
	if (locale === "de") return de_profile_tab_builds(inputs)
	if (locale === "fr") return fr_profile_tab_builds(inputs)
	if (locale === "it") return it_profile_tab_builds(inputs)
	if (locale === "nl") return nl_profile_tab_builds(inputs)
	if (locale === "pl") return pl_profile_tab_builds(inputs)
	if (locale === "pt") return pt_profile_tab_builds(inputs)
	if (locale === "ru") return ru_profile_tab_builds(inputs)
	if (locale === "sv") return sv_profile_tab_builds(inputs)
	if (locale === "tr") return tr_profile_tab_builds(inputs)
	if (locale === "zh") return zh_profile_tab_builds(inputs)
	if (locale === "ja") return ja_profile_tab_builds(inputs)
	return en_profile_tab_builds(inputs)
});
