/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Me_Downloads_RemovedInputs */

const en_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} removed from the list`)
};

const es_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} quitado de la lista`)
};

const de_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} aus der Liste entfernt`)
};

const fr_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} retiré de la liste`)
};

const it_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} rimossa dall’elenco`)
};

const nl_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} uit de lijst verwijderd`)
};

const pl_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunięto ${i?.mod} z listy`)
};

const pt_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} removido da lista`)
};

const ru_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} убран из списка`)
};

const sv_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} togs bort från listan`)
};

const tr_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} listeden kaldırıldı`)
};

const zh_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已将 ${i?.mod} 从列表中移除`)
};

const ja_me_downloads_removed = /** @type {(inputs: Me_Downloads_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} をリストから削除しました`)
};

/**
* | output |
* | --- |
* | "{mod} removed from the list" |
*
* @param {Me_Downloads_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_removed = /** @type {((inputs: Me_Downloads_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_removed(inputs)
	if (locale === "de") return de_me_downloads_removed(inputs)
	if (locale === "fr") return fr_me_downloads_removed(inputs)
	if (locale === "it") return it_me_downloads_removed(inputs)
	if (locale === "nl") return nl_me_downloads_removed(inputs)
	if (locale === "pl") return pl_me_downloads_removed(inputs)
	if (locale === "pt") return pt_me_downloads_removed(inputs)
	if (locale === "ru") return ru_me_downloads_removed(inputs)
	if (locale === "sv") return sv_me_downloads_removed(inputs)
	if (locale === "tr") return tr_me_downloads_removed(inputs)
	if (locale === "zh") return zh_me_downloads_removed(inputs)
	if (locale === "ja") return ja_me_downloads_removed(inputs)
	return en_me_downloads_removed(inputs)
});
