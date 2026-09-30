/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Banner_Outdated_TitleInputs */

const en_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Possibly outdated`)
};

const es_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posiblemente desactualizada`)
};

const de_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Möglicherweise veraltet`)
};

const fr_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peut-être obsolète`)
};

const it_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forse obsoleta`)
};

const nl_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mogelijk verouderd`)
};

const pl_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Możliwie nieaktualny`)
};

const pt_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Possivelmente desatualizada`)
};

const ru_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Возможно, устарела`)
};

const sv_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanske inaktuellt`)
};

const tr_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel olmayabilir`)
};

const zh_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可能已过时`)
};

const ja_builds_banner_outdated_title = /** @type {(inputs: Builds_Banner_Outdated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`古い可能性あり`)
};

/**
* | output |
* | --- |
* | "Possibly outdated" |
*
* @param {Builds_Banner_Outdated_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_banner_outdated_title = /** @type {((inputs?: Builds_Banner_Outdated_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Outdated_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_banner_outdated_title(inputs)
	if (locale === "de") return de_builds_banner_outdated_title(inputs)
	if (locale === "fr") return fr_builds_banner_outdated_title(inputs)
	if (locale === "it") return it_builds_banner_outdated_title(inputs)
	if (locale === "nl") return nl_builds_banner_outdated_title(inputs)
	if (locale === "pl") return pl_builds_banner_outdated_title(inputs)
	if (locale === "pt") return pt_builds_banner_outdated_title(inputs)
	if (locale === "ru") return ru_builds_banner_outdated_title(inputs)
	if (locale === "sv") return sv_builds_banner_outdated_title(inputs)
	if (locale === "tr") return tr_builds_banner_outdated_title(inputs)
	if (locale === "zh") return zh_builds_banner_outdated_title(inputs)
	if (locale === "ja") return ja_builds_banner_outdated_title(inputs)
	return en_builds_banner_outdated_title(inputs)
});
