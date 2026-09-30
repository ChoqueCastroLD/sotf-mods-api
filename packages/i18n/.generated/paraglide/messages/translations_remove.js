/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_RemoveInputs */

const en_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
};

const es_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar`)
};

const de_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernen`)
};

const fr_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

const it_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi`)
};

const nl_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover`)
};

const ru_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort`)
};

const tr_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldır`)
};

const zh_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除`)
};

const ja_translations_remove = /** @type {(inputs: Translations_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Remove" |
*
* @param {Translations_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_remove = /** @type {((inputs?: Translations_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_remove(inputs)
	if (locale === "de") return de_translations_remove(inputs)
	if (locale === "fr") return fr_translations_remove(inputs)
	if (locale === "it") return it_translations_remove(inputs)
	if (locale === "nl") return nl_translations_remove(inputs)
	if (locale === "pl") return pl_translations_remove(inputs)
	if (locale === "pt") return pt_translations_remove(inputs)
	if (locale === "ru") return ru_translations_remove(inputs)
	if (locale === "sv") return sv_translations_remove(inputs)
	if (locale === "tr") return tr_translations_remove(inputs)
	if (locale === "zh") return zh_translations_remove(inputs)
	if (locale === "ja") return ja_translations_remove(inputs)
	return en_translations_remove(inputs)
});
