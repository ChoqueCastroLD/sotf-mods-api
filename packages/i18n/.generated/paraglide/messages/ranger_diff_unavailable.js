/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Diff_UnavailableInputs */

const en_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No file list to compare.`)
};

const es_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay lista de archivos que comparar.`)
};

const de_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Dateiliste zum Vergleichen.`)
};

const fr_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune liste de fichiers à comparer.`)
};

const it_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun elenco di file da confrontare.`)
};

const nl_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen bestandslijst om te vergelijken.`)
};

const pl_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak listy plików do porównania.`)
};

const pt_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem lista de arquivos para comparar.`)
};

const ru_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет списка файлов для сравнения.`)
};

const sv_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen fillista att jämföra.`)
};

const tr_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karşılaştırılacak dosya listesi yok.`)
};

const zh_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有可比较的文件列表。`)
};

const ja_ranger_diff_unavailable = /** @type {(inputs: Ranger_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比較するファイル一覧がありません。`)
};

/**
* | output |
* | --- |
* | "No file list to compare." |
*
* @param {Ranger_Diff_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_diff_unavailable = /** @type {((inputs?: Ranger_Diff_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Diff_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_diff_unavailable(inputs)
	if (locale === "de") return de_ranger_diff_unavailable(inputs)
	if (locale === "fr") return fr_ranger_diff_unavailable(inputs)
	if (locale === "it") return it_ranger_diff_unavailable(inputs)
	if (locale === "nl") return nl_ranger_diff_unavailable(inputs)
	if (locale === "pl") return pl_ranger_diff_unavailable(inputs)
	if (locale === "pt") return pt_ranger_diff_unavailable(inputs)
	if (locale === "ru") return ru_ranger_diff_unavailable(inputs)
	if (locale === "sv") return sv_ranger_diff_unavailable(inputs)
	if (locale === "tr") return tr_ranger_diff_unavailable(inputs)
	if (locale === "zh") return zh_ranger_diff_unavailable(inputs)
	if (locale === "ja") return ja_ranger_diff_unavailable(inputs)
	return en_ranger_diff_unavailable(inputs)
});
