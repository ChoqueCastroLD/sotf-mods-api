/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Item_UnavailableInputs */

const en_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No file available`)
};

const es_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin archivo disponible`)
};

const de_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Datei verfügbar`)
};

const fr_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun fichier disponible`)
};

const it_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun file disponibile`)
};

const nl_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen bestand beschikbaar`)
};

const pl_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak dostępnego pliku`)
};

const pt_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum arquivo disponível`)
};

const ru_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл недоступен`)
};

const sv_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen fil tillgänglig`)
};

const tr_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya yok`)
};

const zh_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无可用文件`)
};

const ja_kits_item_unavailable = /** @type {(inputs: Kits_Item_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルがありません`)
};

/**
* | output |
* | --- |
* | "No file available" |
*
* @param {Kits_Item_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_item_unavailable = /** @type {((inputs?: Kits_Item_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_item_unavailable(inputs)
	if (locale === "de") return de_kits_item_unavailable(inputs)
	if (locale === "fr") return fr_kits_item_unavailable(inputs)
	if (locale === "it") return it_kits_item_unavailable(inputs)
	if (locale === "nl") return nl_kits_item_unavailable(inputs)
	if (locale === "pl") return pl_kits_item_unavailable(inputs)
	if (locale === "pt") return pt_kits_item_unavailable(inputs)
	if (locale === "ru") return ru_kits_item_unavailable(inputs)
	if (locale === "sv") return sv_kits_item_unavailable(inputs)
	if (locale === "tr") return tr_kits_item_unavailable(inputs)
	if (locale === "zh") return zh_kits_item_unavailable(inputs)
	if (locale === "ja") return ja_kits_item_unavailable(inputs)
	return en_kits_item_unavailable(inputs)
});
