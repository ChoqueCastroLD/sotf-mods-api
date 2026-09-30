/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Live_Empty_TitleInputs */

const en_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing new yet`)
};

const es_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada nuevo todavía`)
};

const de_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch nichts Neues`)
};

const fr_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien de neuf pour l’instant`)
};

const it_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora niente di nuovo`)
};

const nl_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog niets nieuws`)
};

const pl_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie nic nowego`)
};

const pt_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada novo ainda`)
};

const ru_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока ничего нового`)
};

const sv_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget nytt än`)
};

const tr_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz yeni bir şey yok`)
};

const zh_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无新动态`)
};

const ja_basecamp_live_empty_title = /** @type {(inputs: Basecamp_Live_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ新しい動きはありません`)
};

/**
* | output |
* | --- |
* | "Nothing new yet" |
*
* @param {Basecamp_Live_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_live_empty_title = /** @type {((inputs?: Basecamp_Live_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Live_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_live_empty_title(inputs)
	if (locale === "de") return de_basecamp_live_empty_title(inputs)
	if (locale === "fr") return fr_basecamp_live_empty_title(inputs)
	if (locale === "it") return it_basecamp_live_empty_title(inputs)
	if (locale === "nl") return nl_basecamp_live_empty_title(inputs)
	if (locale === "pl") return pl_basecamp_live_empty_title(inputs)
	if (locale === "pt") return pt_basecamp_live_empty_title(inputs)
	if (locale === "ru") return ru_basecamp_live_empty_title(inputs)
	if (locale === "sv") return sv_basecamp_live_empty_title(inputs)
	if (locale === "tr") return tr_basecamp_live_empty_title(inputs)
	if (locale === "zh") return zh_basecamp_live_empty_title(inputs)
	if (locale === "ja") return ja_basecamp_live_empty_title(inputs)
	return en_basecamp_live_empty_title(inputs)
});
