/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Safe_RemoveInputs */

const en_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can it be removed without breaking the save?`)
};

const es_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Se puede quitar sin romper la partida?`)
};

const de_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lässt er sich entfernen, ohne den Spielstand zu beschädigen?`)
};

const fr_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peut-on le retirer sans casser la sauvegarde ?`)
};

const it_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si può rimuovere senza rovinare il salvataggio?`)
};

const nl_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan hij worden verwijderd zonder de save te breken?`)
};

const pl_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czy można go usunąć bez psucia zapisu gry?`)
};

const pt_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dá para remover sem estragar o save?`)
};

const ru_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Можно ли удалить мод, не сломав сохранение?`)
};

const sv_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan den tas bort utan att förstöra sparfilen?`)
};

const tr_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıt dosyasını bozmadan kaldırılabilir mi?`)
};

const zh_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除后会损坏存档吗？`)
};

const ja_basecamp_compat_safe_remove = /** @type {(inputs: Basecamp_Compat_Safe_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セーブデータを壊さずに外せますか？`)
};

/**
* | output |
* | --- |
* | "Can it be removed without breaking the save?" |
*
* @param {Basecamp_Compat_Safe_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_safe_remove = /** @type {((inputs?: Basecamp_Compat_Safe_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Safe_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_safe_remove(inputs)
	if (locale === "de") return de_basecamp_compat_safe_remove(inputs)
	if (locale === "fr") return fr_basecamp_compat_safe_remove(inputs)
	if (locale === "it") return it_basecamp_compat_safe_remove(inputs)
	if (locale === "nl") return nl_basecamp_compat_safe_remove(inputs)
	if (locale === "pl") return pl_basecamp_compat_safe_remove(inputs)
	if (locale === "pt") return pt_basecamp_compat_safe_remove(inputs)
	if (locale === "ru") return ru_basecamp_compat_safe_remove(inputs)
	if (locale === "sv") return sv_basecamp_compat_safe_remove(inputs)
	if (locale === "tr") return tr_basecamp_compat_safe_remove(inputs)
	if (locale === "zh") return zh_basecamp_compat_safe_remove(inputs)
	if (locale === "ja") return ja_basecamp_compat_safe_remove(inputs)
	return en_basecamp_compat_safe_remove(inputs)
});
