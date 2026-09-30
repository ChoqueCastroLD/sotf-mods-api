/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_RemoveInputs */

const en_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove from the list`)
};

const es_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar de la lista`)
};

const de_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aus der Liste entfernen`)
};

const fr_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer de la liste`)
};

const it_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi dall’elenco`)
};

const nl_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uit de lijst verwijderen`)
};

const pl_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń z listy`)
};

const pt_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover da lista`)
};

const ru_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Убрать из списка`)
};

const sv_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort från listan`)
};

const tr_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listeden kaldır`)
};

const zh_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从列表中移除`)
};

const ja_me_downloads_remove = /** @type {(inputs: Me_Downloads_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リストから削除`)
};

/**
* | output |
* | --- |
* | "Remove from the list" |
*
* @param {Me_Downloads_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_remove = /** @type {((inputs?: Me_Downloads_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_remove(inputs)
	if (locale === "de") return de_me_downloads_remove(inputs)
	if (locale === "fr") return fr_me_downloads_remove(inputs)
	if (locale === "it") return it_me_downloads_remove(inputs)
	if (locale === "nl") return nl_me_downloads_remove(inputs)
	if (locale === "pl") return pl_me_downloads_remove(inputs)
	if (locale === "pt") return pt_me_downloads_remove(inputs)
	if (locale === "ru") return ru_me_downloads_remove(inputs)
	if (locale === "sv") return sv_me_downloads_remove(inputs)
	if (locale === "tr") return tr_me_downloads_remove(inputs)
	if (locale === "zh") return zh_me_downloads_remove(inputs)
	if (locale === "ja") return ja_me_downloads_remove(inputs)
	return en_me_downloads_remove(inputs)
});
