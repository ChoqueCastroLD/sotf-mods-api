/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Links_LabelInputs */

const en_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links`)
};

const es_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlaces`)
};

const de_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links`)
};

const fr_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liens`)
};

const it_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const nl_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links`)
};

const pl_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linki`)
};

const pt_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links`)
};

const ru_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылки`)
};

const sv_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länkar`)
};

const tr_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantılar`)
};

const zh_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接`)
};

const ja_profile_links_label = /** @type {(inputs: Profile_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンク`)
};

/**
* | output |
* | --- |
* | "Links" |
*
* @param {Profile_Links_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_links_label = /** @type {((inputs?: Profile_Links_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Links_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_links_label(inputs)
	if (locale === "de") return de_profile_links_label(inputs)
	if (locale === "fr") return fr_profile_links_label(inputs)
	if (locale === "it") return it_profile_links_label(inputs)
	if (locale === "nl") return nl_profile_links_label(inputs)
	if (locale === "pl") return pl_profile_links_label(inputs)
	if (locale === "pt") return pt_profile_links_label(inputs)
	if (locale === "ru") return ru_profile_links_label(inputs)
	if (locale === "sv") return sv_profile_links_label(inputs)
	if (locale === "tr") return tr_profile_links_label(inputs)
	if (locale === "zh") return zh_profile_links_label(inputs)
	if (locale === "ja") return ja_profile_links_label(inputs)
	return en_profile_links_label(inputs)
});
