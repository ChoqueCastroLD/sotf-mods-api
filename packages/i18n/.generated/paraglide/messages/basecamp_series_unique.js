/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Series_UniqueInputs */

const en_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unique downloads`)
};

const es_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas únicas`)
};

const de_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eindeutige Downloads`)
};

const fr_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements uniques`)
};

const it_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download unici`)
};

const nl_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unieke downloads`)
};

const pl_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unikalne pobrania`)
};

const pt_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads únicos`)
};

const ru_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уникальные загрузки`)
};

const sv_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unika nedladdningar`)
};

const tr_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekil indirmeler`)
};

const zh_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`独立下载量`)
};

const ja_basecamp_series_unique = /** @type {(inputs: Basecamp_Series_UniqueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユニークダウンロード`)
};

/**
* | output |
* | --- |
* | "Unique downloads" |
*
* @param {Basecamp_Series_UniqueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_series_unique = /** @type {((inputs?: Basecamp_Series_UniqueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Series_UniqueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_series_unique(inputs)
	if (locale === "de") return de_basecamp_series_unique(inputs)
	if (locale === "fr") return fr_basecamp_series_unique(inputs)
	if (locale === "it") return it_basecamp_series_unique(inputs)
	if (locale === "nl") return nl_basecamp_series_unique(inputs)
	if (locale === "pl") return pl_basecamp_series_unique(inputs)
	if (locale === "pt") return pt_basecamp_series_unique(inputs)
	if (locale === "ru") return ru_basecamp_series_unique(inputs)
	if (locale === "sv") return sv_basecamp_series_unique(inputs)
	if (locale === "tr") return tr_basecamp_series_unique(inputs)
	if (locale === "zh") return zh_basecamp_series_unique(inputs)
	if (locale === "ja") return ja_basecamp_series_unique(inputs)
	return en_basecamp_series_unique(inputs)
});
