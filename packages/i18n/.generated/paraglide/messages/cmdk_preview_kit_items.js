/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Preview_Kit_ItemsInputs */

const en_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Included mods`)
};

const es_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods incluidos`)
};

const de_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enthaltene Mods`)
};

const fr_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods inclus`)
};

const it_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod inclusi`)
};

const nl_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgenomen mods`)
};

const pl_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zawarte mody`)
};

const pt_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods incluídos`)
};

const ru_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Входящие моды`)
};

const sv_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inkluderade mods`)
};

const tr_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dahil olan modlar`)
};

const zh_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`包含的模组`)
};

const ja_cmdk_preview_kit_items = /** @type {(inputs: Cmdk_Preview_Kit_ItemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`含まれる Mod`)
};

/**
* | output |
* | --- |
* | "Included mods" |
*
* @param {Cmdk_Preview_Kit_ItemsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_preview_kit_items = /** @type {((inputs?: Cmdk_Preview_Kit_ItemsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Preview_Kit_ItemsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_preview_kit_items(inputs)
	if (locale === "de") return de_cmdk_preview_kit_items(inputs)
	if (locale === "fr") return fr_cmdk_preview_kit_items(inputs)
	if (locale === "it") return it_cmdk_preview_kit_items(inputs)
	if (locale === "nl") return nl_cmdk_preview_kit_items(inputs)
	if (locale === "pl") return pl_cmdk_preview_kit_items(inputs)
	if (locale === "pt") return pt_cmdk_preview_kit_items(inputs)
	if (locale === "ru") return ru_cmdk_preview_kit_items(inputs)
	if (locale === "sv") return sv_cmdk_preview_kit_items(inputs)
	if (locale === "tr") return tr_cmdk_preview_kit_items(inputs)
	if (locale === "zh") return zh_cmdk_preview_kit_items(inputs)
	if (locale === "ja") return ja_cmdk_preview_kit_items(inputs)
	return en_cmdk_preview_kit_items(inputs)
});
