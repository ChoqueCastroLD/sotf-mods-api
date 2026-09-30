/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_List_LabelInputs */

const en_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaded mods`)
};

const es_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods descargados`)
};

const de_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heruntergeladene Mods`)
};

const fr_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods téléchargés`)
};

const it_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod scaricate`)
};

const nl_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gedownloade mods`)
};

const pl_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrane mody`)
};

const pt_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods baixados`)
};

const ru_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачанные моды`)
};

const sv_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdade moddar`)
};

const tr_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirilen modlar`)
};

const zh_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已下载的模组`)
};

const ja_me_downloads_list_label = /** @type {(inputs: Me_Downloads_List_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードしたMOD`)
};

/**
* | output |
* | --- |
* | "Downloaded mods" |
*
* @param {Me_Downloads_List_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_list_label = /** @type {((inputs?: Me_Downloads_List_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_List_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_list_label(inputs)
	if (locale === "de") return de_me_downloads_list_label(inputs)
	if (locale === "fr") return fr_me_downloads_list_label(inputs)
	if (locale === "it") return it_me_downloads_list_label(inputs)
	if (locale === "nl") return nl_me_downloads_list_label(inputs)
	if (locale === "pl") return pl_me_downloads_list_label(inputs)
	if (locale === "pt") return pt_me_downloads_list_label(inputs)
	if (locale === "ru") return ru_me_downloads_list_label(inputs)
	if (locale === "sv") return sv_me_downloads_list_label(inputs)
	if (locale === "tr") return tr_me_downloads_list_label(inputs)
	if (locale === "zh") return zh_me_downloads_list_label(inputs)
	if (locale === "ja") return ja_me_downloads_list_label(inputs)
	return en_me_downloads_list_label(inputs)
});
