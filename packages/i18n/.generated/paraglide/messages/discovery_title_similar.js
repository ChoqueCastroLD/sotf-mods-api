/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Discovery_Title_SimilarInputs */

const en_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Similar mods`)
};

const es_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods similares`)
};

const de_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ähnliche Mods`)
};

const fr_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods similaires`)
};

const it_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod simili`)
};

const nl_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergelijkbare mods`)
};

const pl_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podobne mody`)
};

const pt_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods semelhantes`)
};

const ru_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Похожие моды`)
};

const sv_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liknande moddar`)
};

const tr_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benzer modlar`)
};

const zh_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`相似模组`)
};

const ja_discovery_title_similar = /** @type {(inputs: Discovery_Title_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`似たMod`)
};

/**
* | output |
* | --- |
* | "Similar mods" |
*
* @param {Discovery_Title_SimilarInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const discovery_title_similar = /** @type {((inputs?: Discovery_Title_SimilarInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Discovery_Title_SimilarInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_discovery_title_similar(inputs)
	if (locale === "de") return de_discovery_title_similar(inputs)
	if (locale === "fr") return fr_discovery_title_similar(inputs)
	if (locale === "it") return it_discovery_title_similar(inputs)
	if (locale === "nl") return nl_discovery_title_similar(inputs)
	if (locale === "pl") return pl_discovery_title_similar(inputs)
	if (locale === "pt") return pt_discovery_title_similar(inputs)
	if (locale === "ru") return ru_discovery_title_similar(inputs)
	if (locale === "sv") return sv_discovery_title_similar(inputs)
	if (locale === "tr") return tr_discovery_title_similar(inputs)
	if (locale === "zh") return zh_discovery_title_similar(inputs)
	if (locale === "ja") return ja_discovery_title_similar(inputs)
	return en_discovery_title_similar(inputs)
});
