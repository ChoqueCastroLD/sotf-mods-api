/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Tabs_LabelInputs */

const en_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile sections`)
};

const es_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secciones del perfil`)
};

const de_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilbereiche`)
};

const fr_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sections du profil`)
};

const it_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sezioni del profilo`)
};

const nl_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profielonderdelen`)
};

const pl_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sekcje profilu`)
};

const pt_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seções do perfil`)
};

const ru_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разделы профиля`)
};

const sv_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilavsnitt`)
};

const tr_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil bölümleri`)
};

const zh_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人主页板块`)
};

const ja_profile_tabs_label = /** @type {(inputs: Profile_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィールのセクション`)
};

/**
* | output |
* | --- |
* | "Profile sections" |
*
* @param {Profile_Tabs_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_tabs_label = /** @type {((inputs?: Profile_Tabs_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Tabs_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_tabs_label(inputs)
	if (locale === "de") return de_profile_tabs_label(inputs)
	if (locale === "fr") return fr_profile_tabs_label(inputs)
	if (locale === "it") return it_profile_tabs_label(inputs)
	if (locale === "nl") return nl_profile_tabs_label(inputs)
	if (locale === "pl") return pl_profile_tabs_label(inputs)
	if (locale === "pt") return pt_profile_tabs_label(inputs)
	if (locale === "ru") return ru_profile_tabs_label(inputs)
	if (locale === "sv") return sv_profile_tabs_label(inputs)
	if (locale === "tr") return tr_profile_tabs_label(inputs)
	if (locale === "zh") return zh_profile_tabs_label(inputs)
	if (locale === "ja") return ja_profile_tabs_label(inputs)
	return en_profile_tabs_label(inputs)
});
