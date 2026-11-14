/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Cover_RemoveInputs */

const en_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove cover`)
};

const es_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar portada`)
};

const de_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild entfernen`)
};

const fr_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer la couverture`)
};

const it_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi copertina`)
};

const nl_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag verwijderen`)
};

const pl_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń okładkę`)
};

const pt_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover capa`)
};

const ru_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Убрать обложку`)
};

const sv_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort omslag`)
};

const tr_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapağı kaldır`)
};

const zh_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除封面`)
};

const ja_modpacks_cover_remove = /** @type {(inputs: Modpacks_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーを削除`)
};

/**
* | output |
* | --- |
* | "Remove cover" |
*
* @param {Modpacks_Cover_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_cover_remove = /** @type {((inputs?: Modpacks_Cover_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Cover_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_cover_remove(inputs)
	if (locale === "de") return de_modpacks_cover_remove(inputs)
	if (locale === "fr") return fr_modpacks_cover_remove(inputs)
	if (locale === "it") return it_modpacks_cover_remove(inputs)
	if (locale === "nl") return nl_modpacks_cover_remove(inputs)
	if (locale === "pl") return pl_modpacks_cover_remove(inputs)
	if (locale === "pt") return pt_modpacks_cover_remove(inputs)
	if (locale === "ru") return ru_modpacks_cover_remove(inputs)
	if (locale === "sv") return sv_modpacks_cover_remove(inputs)
	if (locale === "tr") return tr_modpacks_cover_remove(inputs)
	if (locale === "zh") return zh_modpacks_cover_remove(inputs)
	if (locale === "ja") return ja_modpacks_cover_remove(inputs)
	return en_modpacks_cover_remove(inputs)
});
