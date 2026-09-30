/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ added: NonNullable<unknown>, removed: NonNullable<unknown>, changed: NonNullable<unknown> }} Ranger_Diff_SummaryInputs */

const en_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Compared with the previous version: ${i?.added} added, ${i?.removed} removed, ${i?.changed} changed.`)
};

const es_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Frente a la versión anterior: ${i?.added} añadidos, ${i?.removed} eliminados, ${i?.changed} cambiados.`)
};

const de_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gegenüber der vorherigen Version: ${i?.added} hinzugefügt, ${i?.removed} entfernt, ${i?.changed} geändert.`)
};

const fr_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Par rapport à la version précédente : ${i?.added} ajoutés, ${i?.removed} supprimés, ${i?.changed} modifiés.`)
};

const it_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rispetto alla versione precedente: ${i?.added} aggiunti, ${i?.removed} rimossi, ${i?.changed} modificati.`)
};

const nl_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vergeleken met de vorige versie: ${i?.added} toegevoegd, ${i?.removed} verwijderd, ${i?.changed} gewijzigd.`)
};

const pl_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`W porównaniu z poprzednią wersją: dodane ${i?.added}, usunięte ${i?.removed}, zmienione ${i?.changed}.`)
};

const pt_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Comparado à versão anterior: ${i?.added} adicionados, ${i?.removed} removidos, ${i?.changed} alterados.`)
};

const ru_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`По сравнению с предыдущей версией: добавлено ${i?.added}, удалено ${i?.removed}, изменено ${i?.changed}.`)
};

const sv_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jämfört med förra versionen: ${i?.added} tillagda, ${i?.removed} borttagna, ${i?.changed} ändrade.`)
};

const tr_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Önceki sürüme göre: ${i?.added} eklendi, ${i?.removed} silindi, ${i?.changed} değişti.`)
};

const zh_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`与上一版本相比：新增 ${i?.added}，删除 ${i?.removed}，修改 ${i?.changed}。`)
};

const ja_ranger_diff_summary = /** @type {(inputs: Ranger_Diff_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`前のバージョンとの比較：追加 ${i?.added}、削除 ${i?.removed}、変更 ${i?.changed}。`)
};

/**
* | output |
* | --- |
* | "Compared with the previous version: {added} added, {removed} removed, {changed} changed." |
*
* @param {Ranger_Diff_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_diff_summary = /** @type {((inputs: Ranger_Diff_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Diff_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_diff_summary(inputs)
	if (locale === "de") return de_ranger_diff_summary(inputs)
	if (locale === "fr") return fr_ranger_diff_summary(inputs)
	if (locale === "it") return it_ranger_diff_summary(inputs)
	if (locale === "nl") return nl_ranger_diff_summary(inputs)
	if (locale === "pl") return pl_ranger_diff_summary(inputs)
	if (locale === "pt") return pt_ranger_diff_summary(inputs)
	if (locale === "ru") return ru_ranger_diff_summary(inputs)
	if (locale === "sv") return sv_ranger_diff_summary(inputs)
	if (locale === "tr") return tr_ranger_diff_summary(inputs)
	if (locale === "zh") return zh_ranger_diff_summary(inputs)
	if (locale === "ja") return ja_ranger_diff_summary(inputs)
	return en_ranger_diff_summary(inputs)
});
