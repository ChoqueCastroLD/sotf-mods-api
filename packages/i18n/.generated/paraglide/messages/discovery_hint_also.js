/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Discovery_Hint_AlsoInputs */

const en_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`People who downloaded this mod also took these.`)
};

const es_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quienes descargaron este mod también se llevaron estos.`)
};

const de_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wer diese Mod geladen hat, hat auch diese geladen.`)
};

const fr_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ceux qui ont téléchargé ce mod ont aussi pris ceux-ci.`)
};

const it_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chi ha scaricato questa mod ha scaricato anche queste.`)
};

const nl_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie deze mod downloadde, nam ook deze mee.`)
};

const pl_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osoby, które pobrały tego moda, pobrały też te.`)
};

const pt_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quem descarregou este mod também levou estes.`)
};

const ru_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Те, кто скачал этот мод, скачали и эти.`)
};

const sv_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den som laddade ner den här modden laddade också ner dessa.`)
};

const tr_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modu indirenler bunları da indirdi.`)
};

const zh_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载过此模组的玩家也下载了这些。`)
};

const ja_discovery_hint_also = /** @type {(inputs: Discovery_Hint_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このModをダウンロードした人は、これらもダウンロードしています。`)
};

/**
* | output |
* | --- |
* | "People who downloaded this mod also took these." |
*
* @param {Discovery_Hint_AlsoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const discovery_hint_also = /** @type {((inputs?: Discovery_Hint_AlsoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Discovery_Hint_AlsoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_discovery_hint_also(inputs)
	if (locale === "de") return de_discovery_hint_also(inputs)
	if (locale === "fr") return fr_discovery_hint_also(inputs)
	if (locale === "it") return it_discovery_hint_also(inputs)
	if (locale === "nl") return nl_discovery_hint_also(inputs)
	if (locale === "pl") return pl_discovery_hint_also(inputs)
	if (locale === "pt") return pt_discovery_hint_also(inputs)
	if (locale === "ru") return ru_discovery_hint_also(inputs)
	if (locale === "sv") return sv_discovery_hint_also(inputs)
	if (locale === "tr") return tr_discovery_hint_also(inputs)
	if (locale === "zh") return zh_discovery_hint_also(inputs)
	if (locale === "ja") return ja_discovery_hint_also(inputs)
	return en_discovery_hint_also(inputs)
});
