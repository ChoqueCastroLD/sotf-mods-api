/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_TaglineInputs */

const en_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagline`)
};

const es_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eslogan`)
};

const de_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slogan`)
};

const fr_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accroche`)
};

const it_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slogan`)
};

const nl_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slogan`)
};

const pl_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasło`)
};

const pt_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slogan`)
};

const ru_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подзаголовок`)
};

const sv_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slogan`)
};

const tr_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slogan`)
};

const zh_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标语`)
};

const ja_jams_editor_tagline = /** @type {(inputs: Jams_Editor_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャッチコピー`)
};

/**
* | output |
* | --- |
* | "Tagline" |
*
* @param {Jams_Editor_TaglineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_tagline = /** @type {((inputs?: Jams_Editor_TaglineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_TaglineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_tagline(inputs)
	if (locale === "de") return de_jams_editor_tagline(inputs)
	if (locale === "fr") return fr_jams_editor_tagline(inputs)
	if (locale === "it") return it_jams_editor_tagline(inputs)
	if (locale === "nl") return nl_jams_editor_tagline(inputs)
	if (locale === "pl") return pl_jams_editor_tagline(inputs)
	if (locale === "pt") return pt_jams_editor_tagline(inputs)
	if (locale === "ru") return ru_jams_editor_tagline(inputs)
	if (locale === "sv") return sv_jams_editor_tagline(inputs)
	if (locale === "tr") return tr_jams_editor_tagline(inputs)
	if (locale === "zh") return zh_jams_editor_tagline(inputs)
	if (locale === "ja") return ja_jams_editor_tagline(inputs)
	return en_jams_editor_tagline(inputs)
});
