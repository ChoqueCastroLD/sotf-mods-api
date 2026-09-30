/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_RemoveInputs */

const en_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
};

const es_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar`)
};

const de_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernen`)
};

const fr_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer`)
};

const it_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi`)
};

const nl_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover`)
};

const ru_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Убрать`)
};

const sv_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort`)
};

const tr_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldır`)
};

const zh_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除`)
};

const ja_bundles_remove = /** @type {(inputs: Bundles_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Remove" |
*
* @param {Bundles_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_remove = /** @type {((inputs?: Bundles_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_remove(inputs)
	if (locale === "de") return de_bundles_remove(inputs)
	if (locale === "fr") return fr_bundles_remove(inputs)
	if (locale === "it") return it_bundles_remove(inputs)
	if (locale === "nl") return nl_bundles_remove(inputs)
	if (locale === "pl") return pl_bundles_remove(inputs)
	if (locale === "pt") return pt_bundles_remove(inputs)
	if (locale === "ru") return ru_bundles_remove(inputs)
	if (locale === "sv") return sv_bundles_remove(inputs)
	if (locale === "tr") return tr_bundles_remove(inputs)
	if (locale === "zh") return zh_bundles_remove(inputs)
	if (locale === "ja") return ja_bundles_remove(inputs)
	return en_bundles_remove(inputs)
});
