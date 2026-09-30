/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_RemovedInputs */

const en_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} removed from the kit`)
};

const es_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} quitado del kit`)
};

const de_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} aus dem Kit entfernt`)
};

const fr_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} retiré du kit`)
};

const it_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} rimossa dal kit`)
};

const nl_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} uit de kit verwijderd`)
};

const pl_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunięto ${i?.name} z zestawu`)
};

const pt_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} removido do kit`)
};

const ru_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} удалён из набора`)
};

const sv_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} borttagen ur kitet`)
};

const tr_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kitten kaldırıldı`)
};

const zh_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已从套装中移除 ${i?.name}`)
};

const ja_kits_removed = /** @type {(inputs: Kits_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をキットから外しました`)
};

/**
* | output |
* | --- |
* | "{name} removed from the kit" |
*
* @param {Kits_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_removed = /** @type {((inputs: Kits_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_removed(inputs)
	if (locale === "de") return de_kits_removed(inputs)
	if (locale === "fr") return fr_kits_removed(inputs)
	if (locale === "it") return it_kits_removed(inputs)
	if (locale === "nl") return nl_kits_removed(inputs)
	if (locale === "pl") return pl_kits_removed(inputs)
	if (locale === "pt") return pt_kits_removed(inputs)
	if (locale === "ru") return ru_kits_removed(inputs)
	if (locale === "sv") return sv_kits_removed(inputs)
	if (locale === "tr") return tr_kits_removed(inputs)
	if (locale === "zh") return zh_kits_removed(inputs)
	if (locale === "ja") return ja_kits_removed(inputs)
	return en_kits_removed(inputs)
});
