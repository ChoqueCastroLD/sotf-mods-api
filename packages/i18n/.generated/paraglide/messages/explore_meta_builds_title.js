/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Meta_Builds_TitleInputs */

const en_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("en", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest builds (${count__number})`)
};

const es_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("es", i?.count, {});return /** @type {LocalizedString} */ (`Builds de Sons of the Forest (${count__number})`)
};

const de_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("de", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest Builds (${count__number})`)
};

const fr_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("fr", i?.count, {});return /** @type {LocalizedString} */ (`Builds Sons of the Forest (${count__number})`)
};

const it_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("it", i?.count, {});return /** @type {LocalizedString} */ (`Build di Sons of the Forest (${count__number})`)
};

const nl_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("nl", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest-builds (${count__number})`)
};

const pl_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pl", i?.count, {});return /** @type {LocalizedString} */ (`Buildy do Sons of the Forest (${count__number})`)
};

const pt_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pt", i?.count, {});return /** @type {LocalizedString} */ (`Builds de Sons of the Forest (${count__number})`)
};

const ru_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ru", i?.count, {});return /** @type {LocalizedString} */ (`Постройки для Sons of the Forest (${count__number})`)
};

const sv_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("sv", i?.count, {});return /** @type {LocalizedString} */ (`Byggen till Sons of the Forest (${count__number})`)
};

const tr_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("tr", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest yapıları (${count__number})`)
};

const zh_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest 建筑（${count__number}）`)
};

const ja_explore_meta_builds_title = /** @type {(inputs: Explore_Meta_Builds_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest の建築（${count__number} 件）`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest builds ({count__number})" |
*
* @param {Explore_Meta_Builds_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_meta_builds_title = /** @type {((inputs: Explore_Meta_Builds_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_Builds_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_meta_builds_title(inputs)
	if (locale === "de") return de_explore_meta_builds_title(inputs)
	if (locale === "fr") return fr_explore_meta_builds_title(inputs)
	if (locale === "it") return it_explore_meta_builds_title(inputs)
	if (locale === "nl") return nl_explore_meta_builds_title(inputs)
	if (locale === "pl") return pl_explore_meta_builds_title(inputs)
	if (locale === "pt") return pt_explore_meta_builds_title(inputs)
	if (locale === "ru") return ru_explore_meta_builds_title(inputs)
	if (locale === "sv") return sv_explore_meta_builds_title(inputs)
	if (locale === "tr") return tr_explore_meta_builds_title(inputs)
	if (locale === "zh") return zh_explore_meta_builds_title(inputs)
	if (locale === "ja") return ja_explore_meta_builds_title(inputs)
	return en_explore_meta_builds_title(inputs)
});
