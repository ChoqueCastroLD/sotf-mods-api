/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_OutdatedInputs */

const en_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Possibly outdated`)
};

const es_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posiblemente desactualizado`)
};

const de_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Möglicherweise veraltet`)
};

const fr_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peut-être obsolète`)
};

const it_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forse obsoleta`)
};

const nl_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mogelijk verouderd`)
};

const pl_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Możliwie nieaktualny`)
};

const pt_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Possivelmente desatualizado`)
};

const ru_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Возможно, устарел`)
};

const sv_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanske inaktuell`)
};

const tr_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncelliğini yitirmiş olabilir`)
};

const zh_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可能已过时`)
};

const ja_content_radar_outdated = /** @type {(inputs: Content_Radar_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`古い可能性あり`)
};

/**
* | output |
* | --- |
* | "Possibly outdated" |
*
* @param {Content_Radar_OutdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_outdated = /** @type {((inputs?: Content_Radar_OutdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_OutdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_outdated(inputs)
	if (locale === "de") return de_content_radar_outdated(inputs)
	if (locale === "fr") return fr_content_radar_outdated(inputs)
	if (locale === "it") return it_content_radar_outdated(inputs)
	if (locale === "nl") return nl_content_radar_outdated(inputs)
	if (locale === "pl") return pl_content_radar_outdated(inputs)
	if (locale === "pt") return pt_content_radar_outdated(inputs)
	if (locale === "ru") return ru_content_radar_outdated(inputs)
	if (locale === "sv") return sv_content_radar_outdated(inputs)
	if (locale === "tr") return tr_content_radar_outdated(inputs)
	if (locale === "zh") return zh_content_radar_outdated(inputs)
	if (locale === "ja") return ja_content_radar_outdated(inputs)
	return en_content_radar_outdated(inputs)
});
