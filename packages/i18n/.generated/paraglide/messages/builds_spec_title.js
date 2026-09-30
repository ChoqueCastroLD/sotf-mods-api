/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_TitleInputs */

const en_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spec sheet`)
};

const es_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ficha técnica`)
};

const de_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datenblatt`)
};

const fr_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fiche technique`)
};

const it_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scheda tecnica`)
};

const nl_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Specificaties`)
};

const pl_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karta techniczna`)
};

const pt_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ficha técnica`)
};

const ru_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Технический паспорт`)
};

const sv_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datablad`)
};

const tr_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teknik sayfa`)
};

const zh_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`技术参数`)
};

const ja_builds_spec_title = /** @type {(inputs: Builds_Spec_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仕様書`)
};

/**
* | output |
* | --- |
* | "Spec sheet" |
*
* @param {Builds_Spec_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_title = /** @type {((inputs?: Builds_Spec_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_title(inputs)
	if (locale === "de") return de_builds_spec_title(inputs)
	if (locale === "fr") return fr_builds_spec_title(inputs)
	if (locale === "it") return it_builds_spec_title(inputs)
	if (locale === "nl") return nl_builds_spec_title(inputs)
	if (locale === "pl") return pl_builds_spec_title(inputs)
	if (locale === "pt") return pt_builds_spec_title(inputs)
	if (locale === "ru") return ru_builds_spec_title(inputs)
	if (locale === "sv") return sv_builds_spec_title(inputs)
	if (locale === "tr") return tr_builds_spec_title(inputs)
	if (locale === "zh") return zh_builds_spec_title(inputs)
	if (locale === "ja") return ja_builds_spec_title(inputs)
	return en_builds_spec_title(inputs)
});
