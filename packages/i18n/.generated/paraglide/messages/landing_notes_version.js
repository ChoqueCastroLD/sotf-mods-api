/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Landing_Notes_VersionInputs */

const en_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const es_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const de_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const fr_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const it_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const nl_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const pl_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const pt_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const ru_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const sv_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const tr_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const zh_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const ja_landing_notes_version = /** @type {(inputs: Landing_Notes_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

/**
* | output |
* | --- |
* | "v{version}" |
*
* @param {Landing_Notes_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_notes_version = /** @type {((inputs: Landing_Notes_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Notes_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_notes_version(inputs)
	if (locale === "de") return de_landing_notes_version(inputs)
	if (locale === "fr") return fr_landing_notes_version(inputs)
	if (locale === "it") return it_landing_notes_version(inputs)
	if (locale === "nl") return nl_landing_notes_version(inputs)
	if (locale === "pl") return pl_landing_notes_version(inputs)
	if (locale === "pt") return pt_landing_notes_version(inputs)
	if (locale === "ru") return ru_landing_notes_version(inputs)
	if (locale === "sv") return sv_landing_notes_version(inputs)
	if (locale === "tr") return tr_landing_notes_version(inputs)
	if (locale === "zh") return zh_landing_notes_version(inputs)
	if (locale === "ja") return ja_landing_notes_version(inputs)
	return en_landing_notes_version(inputs)
});
