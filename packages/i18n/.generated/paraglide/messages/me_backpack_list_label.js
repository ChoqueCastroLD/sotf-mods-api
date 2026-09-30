/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_List_LabelInputs */

const en_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Followed mods`)
};

const es_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods seguidos`)
};

const de_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gefolgte Mods`)
};

const fr_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods suivis`)
};

const it_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod seguite`)
};

const nl_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gevolgde mods`)
};

const pl_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwowane mody`)
};

const pt_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods seguidos`)
};

const ru_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отслеживаемые моды`)
};

const sv_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följda moddar`)
};

const tr_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip edilen modlar`)
};

const zh_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已关注的模组`)
};

const ja_me_backpack_list_label = /** @type {(inputs: Me_Backpack_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中のMOD`)
};

/**
* | output |
* | --- |
* | "Followed mods" |
*
* @param {Me_Backpack_List_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_list_label = /** @type {((inputs?: Me_Backpack_List_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_List_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_list_label(inputs)
	if (locale === "de") return de_me_backpack_list_label(inputs)
	if (locale === "fr") return fr_me_backpack_list_label(inputs)
	if (locale === "it") return it_me_backpack_list_label(inputs)
	if (locale === "nl") return nl_me_backpack_list_label(inputs)
	if (locale === "pl") return pl_me_backpack_list_label(inputs)
	if (locale === "pt") return pt_me_backpack_list_label(inputs)
	if (locale === "ru") return ru_me_backpack_list_label(inputs)
	if (locale === "sv") return sv_me_backpack_list_label(inputs)
	if (locale === "tr") return tr_me_backpack_list_label(inputs)
	if (locale === "zh") return zh_me_backpack_list_label(inputs)
	if (locale === "ja") return ja_me_backpack_list_label(inputs)
	return en_me_backpack_list_label(inputs)
});
