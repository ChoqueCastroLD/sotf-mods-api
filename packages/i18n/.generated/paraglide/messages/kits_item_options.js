/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Item_OptionsInputs */

const en_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note & version`)
};

const es_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota y versión`)
};

const de_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notiz & Version`)
};

const fr_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note et version`)
};

const it_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota e versione`)
};

const nl_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notitie en versie`)
};

const pl_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notatka i wersja`)
};

const pt_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota e versão`)
};

const ru_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заметка и версия`)
};

const sv_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckning och version`)
};

const tr_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not ve sürüm`)
};

const zh_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`备注与版本`)
};

const ja_kits_item_options = /** @type {(inputs: Kits_Item_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモとバージョン`)
};

/**
* | output |
* | --- |
* | "Note & version" |
*
* @param {Kits_Item_OptionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_item_options = /** @type {((inputs?: Kits_Item_OptionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_OptionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_item_options(inputs)
	if (locale === "de") return de_kits_item_options(inputs)
	if (locale === "fr") return fr_kits_item_options(inputs)
	if (locale === "it") return it_kits_item_options(inputs)
	if (locale === "nl") return nl_kits_item_options(inputs)
	if (locale === "pl") return pl_kits_item_options(inputs)
	if (locale === "pt") return pt_kits_item_options(inputs)
	if (locale === "ru") return ru_kits_item_options(inputs)
	if (locale === "sv") return sv_kits_item_options(inputs)
	if (locale === "tr") return tr_kits_item_options(inputs)
	if (locale === "zh") return zh_kits_item_options(inputs)
	if (locale === "ja") return ja_kits_item_options(inputs)
	return en_kits_item_options(inputs)
});
