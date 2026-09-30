/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Item_Gone_TitleInputs */

const en_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Already handled`)
};

const es_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya está resuelto`)
};

const de_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereits erledigt`)
};

const fr_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déjà traité`)
};

const it_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Già gestito`)
};

const nl_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al afgehandeld`)
};

const pl_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Już załatwione`)
};

const pt_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Já resolvido`)
};

const ru_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уже обработано`)
};

const sv_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redan hanterat`)
};

const tr_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaten ele alındı`)
};

const zh_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已处理`)
};

const ja_ranger_item_gone_title = /** @type {(inputs: Ranger_Item_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対応済み`)
};

/**
* | output |
* | --- |
* | "Already handled" |
*
* @param {Ranger_Item_Gone_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_item_gone_title = /** @type {((inputs?: Ranger_Item_Gone_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Item_Gone_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_item_gone_title(inputs)
	if (locale === "de") return de_ranger_item_gone_title(inputs)
	if (locale === "fr") return fr_ranger_item_gone_title(inputs)
	if (locale === "it") return it_ranger_item_gone_title(inputs)
	if (locale === "nl") return nl_ranger_item_gone_title(inputs)
	if (locale === "pl") return pl_ranger_item_gone_title(inputs)
	if (locale === "pt") return pt_ranger_item_gone_title(inputs)
	if (locale === "ru") return ru_ranger_item_gone_title(inputs)
	if (locale === "sv") return sv_ranger_item_gone_title(inputs)
	if (locale === "tr") return tr_ranger_item_gone_title(inputs)
	if (locale === "zh") return zh_ranger_item_gone_title(inputs)
	if (locale === "ja") return ja_ranger_item_gone_title(inputs)
	return en_ranger_item_gone_title(inputs)
});
