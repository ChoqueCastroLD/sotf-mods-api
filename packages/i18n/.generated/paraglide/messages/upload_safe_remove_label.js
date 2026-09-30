/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Safe_Remove_LabelInputs */

const en_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can it be removed without breaking a save?`)
};

const es_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Se puede quitar sin romper la partida?`)
};

const de_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lässt er sich entfernen, ohne einen Spielstand zu beschädigen?`)
};

const fr_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peut-on le retirer sans casser une sauvegarde ?`)
};

const it_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si può rimuovere senza rovinare un salvataggio?`)
};

const nl_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kun je hem verwijderen zonder een save te breken?`)
};

const pl_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czy można go usunąć bez psucia zapisu gry?`)
};

const pt_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dá para removê-lo sem quebrar o save?`)
};

const ru_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Можно ли удалить его, не сломав сохранение?`)
};

const sv_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan den tas bort utan att förstöra en sparfil?`)
};

const tr_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydı bozmadan kaldırılabilir mi?`)
};

const zh_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除它会不会损坏存档？`)
};

const ja_upload_safe_remove_label = /** @type {(inputs: Upload_Safe_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セーブデータを壊さずに外せますか？`)
};

/**
* | output |
* | --- |
* | "Can it be removed without breaking a save?" |
*
* @param {Upload_Safe_Remove_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_safe_remove_label = /** @type {((inputs?: Upload_Safe_Remove_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Safe_Remove_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_safe_remove_label(inputs)
	if (locale === "de") return de_upload_safe_remove_label(inputs)
	if (locale === "fr") return fr_upload_safe_remove_label(inputs)
	if (locale === "it") return it_upload_safe_remove_label(inputs)
	if (locale === "nl") return nl_upload_safe_remove_label(inputs)
	if (locale === "pl") return pl_upload_safe_remove_label(inputs)
	if (locale === "pt") return pt_upload_safe_remove_label(inputs)
	if (locale === "ru") return ru_upload_safe_remove_label(inputs)
	if (locale === "sv") return sv_upload_safe_remove_label(inputs)
	if (locale === "tr") return tr_upload_safe_remove_label(inputs)
	if (locale === "zh") return zh_upload_safe_remove_label(inputs)
	if (locale === "ja") return ja_upload_safe_remove_label(inputs)
	return en_upload_safe_remove_label(inputs)
});
