/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Ranger_Decided_RemoveInputs */

const en_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Removed: ${i?.title}`)
};

const es_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirado: ${i?.title}`)
};

const de_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entfernt: ${i?.title}`)
};

const fr_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Supprimé : ${i?.title}`)
};

const it_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimosso: ${i?.title}`)
};

const nl_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verwijderd: ${i?.title}`)
};

const pl_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunięto: ${i?.title}`)
};

const pt_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Removido: ${i?.title}`)
};

const ru_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалено: ${i?.title}`)
};

const sv_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Borttagen: ${i?.title}`)
};

const tr_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kaldırıldı: ${i?.title}`)
};

const zh_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已移除：${i?.title}`)
};

const ja_ranger_decided_remove = /** @type {(inputs: Ranger_Decided_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`削除しました：${i?.title}`)
};

/**
* | output |
* | --- |
* | "Removed: {title}" |
*
* @param {Ranger_Decided_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decided_remove = /** @type {((inputs: Ranger_Decided_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decided_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decided_remove(inputs)
	if (locale === "de") return de_ranger_decided_remove(inputs)
	if (locale === "fr") return fr_ranger_decided_remove(inputs)
	if (locale === "it") return it_ranger_decided_remove(inputs)
	if (locale === "nl") return nl_ranger_decided_remove(inputs)
	if (locale === "pl") return pl_ranger_decided_remove(inputs)
	if (locale === "pt") return pt_ranger_decided_remove(inputs)
	if (locale === "ru") return ru_ranger_decided_remove(inputs)
	if (locale === "sv") return sv_ranger_decided_remove(inputs)
	if (locale === "tr") return tr_ranger_decided_remove(inputs)
	if (locale === "zh") return zh_ranger_decided_remove(inputs)
	if (locale === "ja") return ja_ranger_decided_remove(inputs)
	return en_ranger_decided_remove(inputs)
});
