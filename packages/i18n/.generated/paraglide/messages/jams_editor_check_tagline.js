/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Check_TaglineInputs */

const en_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A short tagline`)
};

const es_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un lema corto`)
};

const de_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein kurzer Untertitel`)
};

const fr_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un court slogan`)
};

const it_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uno slogan breve`)
};

const nl_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een korte ondertitel`)
};

const pl_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krótkie hasło`)
};

const pt_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um lema curto`)
};

const ru_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Короткий подзаголовок`)
};

const sv_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En kort slogan`)
};

const tr_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısa bir slogan`)
};

const zh_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简短的标语`)
};

const ja_jams_editor_check_tagline = /** @type {(inputs: Jams_Editor_Check_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短いキャッチコピー`)
};

/**
* | output |
* | --- |
* | "A short tagline" |
*
* @param {Jams_Editor_Check_TaglineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_check_tagline = /** @type {((inputs?: Jams_Editor_Check_TaglineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Check_TaglineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_check_tagline(inputs)
	if (locale === "de") return de_jams_editor_check_tagline(inputs)
	if (locale === "fr") return fr_jams_editor_check_tagline(inputs)
	if (locale === "it") return it_jams_editor_check_tagline(inputs)
	if (locale === "nl") return nl_jams_editor_check_tagline(inputs)
	if (locale === "pl") return pl_jams_editor_check_tagline(inputs)
	if (locale === "pt") return pt_jams_editor_check_tagline(inputs)
	if (locale === "ru") return ru_jams_editor_check_tagline(inputs)
	if (locale === "sv") return sv_jams_editor_check_tagline(inputs)
	if (locale === "tr") return tr_jams_editor_check_tagline(inputs)
	if (locale === "zh") return zh_jams_editor_check_tagline(inputs)
	if (locale === "ja") return ja_jams_editor_check_tagline(inputs)
	return en_jams_editor_check_tagline(inputs)
});
