/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Downloads_MinInputs */

const en_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("en", i?.count, {});return /** @type {LocalizedString} */ (`${count__number}+ downloads`)
};

const es_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("es", i?.count, {});return /** @type {LocalizedString} */ (`${count__number}+ descargas`)
};

const de_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("de", i?.count, {});return /** @type {LocalizedString} */ (`Ab ${count__number} Downloads`)
};

const fr_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("fr", i?.count, {});return /** @type {LocalizedString} */ (`${count__number}+ téléchargements`)
};

const it_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("it", i?.count, {});return /** @type {LocalizedString} */ (`${count__number}+ download`)
};

const nl_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("nl", i?.count, {});return /** @type {LocalizedString} */ (`${count__number}+ downloads`)
};

const pl_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pl", i?.count, {});return /** @type {LocalizedString} */ (`${count__number}+ pobrań`)
};

const pt_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pt", i?.count, {});return /** @type {LocalizedString} */ (`${count__number}+ downloads`)
};

const ru_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ru", i?.count, {});return /** @type {LocalizedString} */ (`От ${count__number} загрузок`)
};

const sv_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("sv", i?.count, {});return /** @type {LocalizedString} */ (`${count__number}+ nedladdningar`)
};

const tr_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("tr", i?.count, {});return /** @type {LocalizedString} */ (`${count__number}+ indirme`)
};

const zh_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`下载量 ${count__number}+`)
};

const ja_explore_downloads_min = /** @type {(inputs: Explore_Downloads_MinInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 回以上`)
};

/**
* | output |
* | --- |
* | "{count__number}+ downloads" |
*
* @param {Explore_Downloads_MinInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_downloads_min = /** @type {((inputs: Explore_Downloads_MinInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Downloads_MinInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_downloads_min(inputs)
	if (locale === "de") return de_explore_downloads_min(inputs)
	if (locale === "fr") return fr_explore_downloads_min(inputs)
	if (locale === "it") return it_explore_downloads_min(inputs)
	if (locale === "nl") return nl_explore_downloads_min(inputs)
	if (locale === "pl") return pl_explore_downloads_min(inputs)
	if (locale === "pt") return pt_explore_downloads_min(inputs)
	if (locale === "ru") return ru_explore_downloads_min(inputs)
	if (locale === "sv") return sv_explore_downloads_min(inputs)
	if (locale === "tr") return tr_explore_downloads_min(inputs)
	if (locale === "zh") return zh_explore_downloads_min(inputs)
	if (locale === "ja") return ja_explore_downloads_min(inputs)
	return en_explore_downloads_min(inputs)
});
