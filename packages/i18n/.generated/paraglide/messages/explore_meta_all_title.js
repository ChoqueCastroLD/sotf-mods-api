/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Meta_All_TitleInputs */

const en_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("en", i?.count, {});return /** @type {LocalizedString} */ (`All Sons of the Forest mods and builds (${count__number})`)
};

const es_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("es", i?.count, {});return /** @type {LocalizedString} */ (`Todos los mods y builds de Sons of the Forest (${count__number})`)
};

const de_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("de", i?.count, {});return /** @type {LocalizedString} */ (`Alle Sons of the Forest Mods und Builds (${count__number})`)
};

const fr_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("fr", i?.count, {});return /** @type {LocalizedString} */ (`Tous les mods et builds Sons of the Forest (${count__number})`)
};

const it_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("it", i?.count, {});return /** @type {LocalizedString} */ (`Tutte le mod e build di Sons of the Forest (${count__number})`)
};

const nl_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("nl", i?.count, {});return /** @type {LocalizedString} */ (`Alle Sons of the Forest-mods en -builds (${count__number})`)
};

const pl_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pl", i?.count, {});return /** @type {LocalizedString} */ (`Wszystkie mody i buildy do Sons of the Forest (${count__number})`)
};

const pt_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pt", i?.count, {});return /** @type {LocalizedString} */ (`Todos os mods e builds de Sons of the Forest (${count__number})`)
};

const ru_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ru", i?.count, {});return /** @type {LocalizedString} */ (`Все моды и постройки для Sons of the Forest (${count__number})`)
};

const sv_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("sv", i?.count, {});return /** @type {LocalizedString} */ (`Alla moddar och byggen till Sons of the Forest (${count__number})`)
};

const tr_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("tr", i?.count, {});return /** @type {LocalizedString} */ (`Tüm Sons of the Forest modları ve yapıları (${count__number})`)
};

const zh_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`全部 Sons of the Forest 模组与建筑（${count__number}）`)
};

const ja_explore_meta_all_title = /** @type {(inputs: Explore_Meta_All_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest の MOD と建築すべて（${count__number} 件）`)
};

/**
* | output |
* | --- |
* | "All Sons of the Forest mods and builds ({count__number})" |
*
* @param {Explore_Meta_All_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_meta_all_title = /** @type {((inputs: Explore_Meta_All_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_All_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_meta_all_title(inputs)
	if (locale === "de") return de_explore_meta_all_title(inputs)
	if (locale === "fr") return fr_explore_meta_all_title(inputs)
	if (locale === "it") return it_explore_meta_all_title(inputs)
	if (locale === "nl") return nl_explore_meta_all_title(inputs)
	if (locale === "pl") return pl_explore_meta_all_title(inputs)
	if (locale === "pt") return pt_explore_meta_all_title(inputs)
	if (locale === "ru") return ru_explore_meta_all_title(inputs)
	if (locale === "sv") return sv_explore_meta_all_title(inputs)
	if (locale === "tr") return tr_explore_meta_all_title(inputs)
	if (locale === "zh") return zh_explore_meta_all_title(inputs)
	if (locale === "ja") return ja_explore_meta_all_title(inputs)
	return en_explore_meta_all_title(inputs)
});
