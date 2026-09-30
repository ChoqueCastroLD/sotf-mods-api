/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tag_Group_UiInputs */

const en_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interface`)
};

const es_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interfaz`)
};

const de_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oberfläche`)
};

const fr_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interface`)
};

const it_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interfaccia`)
};

const nl_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interface`)
};

const pl_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interfejs`)
};

const pt_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interface`)
};

const ru_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Интерфейс`)
};

const sv_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gränssnitt`)
};

const tr_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arayüz`)
};

const zh_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`界面`)
};

const ja_explore_tag_group_ui = /** @type {(inputs: Explore_Tag_Group_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インターフェース`)
};

/**
* | output |
* | --- |
* | "Interface" |
*
* @param {Explore_Tag_Group_UiInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tag_group_ui = /** @type {((inputs?: Explore_Tag_Group_UiInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tag_Group_UiInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tag_group_ui(inputs)
	if (locale === "de") return de_explore_tag_group_ui(inputs)
	if (locale === "fr") return fr_explore_tag_group_ui(inputs)
	if (locale === "it") return it_explore_tag_group_ui(inputs)
	if (locale === "nl") return nl_explore_tag_group_ui(inputs)
	if (locale === "pl") return pl_explore_tag_group_ui(inputs)
	if (locale === "pt") return pt_explore_tag_group_ui(inputs)
	if (locale === "ru") return ru_explore_tag_group_ui(inputs)
	if (locale === "sv") return sv_explore_tag_group_ui(inputs)
	if (locale === "tr") return tr_explore_tag_group_ui(inputs)
	if (locale === "zh") return zh_explore_tag_group_ui(inputs)
	if (locale === "ja") return ja_explore_tag_group_ui(inputs)
	return en_explore_tag_group_ui(inputs)
});
