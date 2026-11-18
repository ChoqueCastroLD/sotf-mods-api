/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Link_GuideInputs */

const en_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guide`)
};

const es_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guía`)
};

const de_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anleitung`)
};

const fr_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guide`)
};

const it_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guida`)
};

const nl_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gids`)
};

const pl_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przewodnik`)
};

const pt_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guia`)
};

const ru_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Руководство`)
};

const sv_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guide`)
};

const tr_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rehber`)
};

const zh_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`指南`)
};

const ja_api_link_guide = /** @type {(inputs: Api_Link_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ガイド`)
};

/**
* | output |
* | --- |
* | "Guide" |
*
* @param {Api_Link_GuideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_link_guide = /** @type {((inputs?: Api_Link_GuideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Link_GuideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_link_guide(inputs)
	if (locale === "de") return de_api_link_guide(inputs)
	if (locale === "fr") return fr_api_link_guide(inputs)
	if (locale === "it") return it_api_link_guide(inputs)
	if (locale === "nl") return nl_api_link_guide(inputs)
	if (locale === "pl") return pl_api_link_guide(inputs)
	if (locale === "pt") return pt_api_link_guide(inputs)
	if (locale === "ru") return ru_api_link_guide(inputs)
	if (locale === "sv") return sv_api_link_guide(inputs)
	if (locale === "tr") return tr_api_link_guide(inputs)
	if (locale === "zh") return zh_api_link_guide(inputs)
	if (locale === "ja") return ja_api_link_guide(inputs)
	return en_api_link_guide(inputs)
});
