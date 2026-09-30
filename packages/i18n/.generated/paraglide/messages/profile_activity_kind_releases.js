/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_Kind_ReleasesInputs */

const en_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Releases`)
};

const es_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicaciones`)
};

const de_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichungen`)
};

const fr_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publications`)
};

const it_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicazioni`)
};

const nl_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Releases`)
};

const pl_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wydania`)
};

const pt_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicações`)
};

const ru_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Релизы`)
};

const sv_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp`)
};

const tr_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlar`)
};

const zh_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布`)
};

const ja_profile_activity_kind_releases = /** @type {(inputs: Profile_Activity_Kind_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリース`)
};

/**
* | output |
* | --- |
* | "Releases" |
*
* @param {Profile_Activity_Kind_ReleasesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_kind_releases = /** @type {((inputs?: Profile_Activity_Kind_ReleasesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Kind_ReleasesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_kind_releases(inputs)
	if (locale === "de") return de_profile_activity_kind_releases(inputs)
	if (locale === "fr") return fr_profile_activity_kind_releases(inputs)
	if (locale === "it") return it_profile_activity_kind_releases(inputs)
	if (locale === "nl") return nl_profile_activity_kind_releases(inputs)
	if (locale === "pl") return pl_profile_activity_kind_releases(inputs)
	if (locale === "pt") return pt_profile_activity_kind_releases(inputs)
	if (locale === "ru") return ru_profile_activity_kind_releases(inputs)
	if (locale === "sv") return sv_profile_activity_kind_releases(inputs)
	if (locale === "tr") return tr_profile_activity_kind_releases(inputs)
	if (locale === "zh") return zh_profile_activity_kind_releases(inputs)
	if (locale === "ja") return ja_profile_activity_kind_releases(inputs)
	return en_profile_activity_kind_releases(inputs)
});
