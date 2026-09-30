/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ shown: NonNullable<unknown>, total: NonNullable<unknown> }} Ranger_Diff_TruncatedInputs */

const en_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Showing the first ${i?.shown} of ${i?.total} files.`)
};

const es_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se muestran los primeros ${i?.shown} de ${i?.total} archivos.`)
};

const de_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die ersten ${i?.shown} von ${i?.total} Dateien werden angezeigt.`)
};

const fr_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Affichage des ${i?.shown} premiers fichiers sur ${i?.total}.`)
};

const it_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sono mostrati i primi ${i?.shown} file su ${i?.total}.`)
};

const nl_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De eerste ${i?.shown} van ${i?.total} bestanden worden getoond.`)
};

const pl_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pokazano pierwsze ${i?.shown} z ${i?.total} plików.`)
};

const pt_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrando os primeiros ${i?.shown} de ${i?.total} arquivos.`)
};

const ru_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Показаны первые ${i?.shown} из ${i?.total} файлов.`)
};

const sv_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Visar de första ${i?.shown} av ${i?.total} filer.`)
};

const tr_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} dosyanın ilk ${i?.shown} tanesi gösteriliyor.`)
};

const zh_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`显示 ${i?.total} 个文件中的前 ${i?.shown} 个。`)
};

const ja_ranger_diff_truncated = /** @type {(inputs: Ranger_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} ファイル中、最初の ${i?.shown} ファイルを表示しています。`)
};

/**
* | output |
* | --- |
* | "Showing the first {shown} of {total} files." |
*
* @param {Ranger_Diff_TruncatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_diff_truncated = /** @type {((inputs: Ranger_Diff_TruncatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Diff_TruncatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_diff_truncated(inputs)
	if (locale === "de") return de_ranger_diff_truncated(inputs)
	if (locale === "fr") return fr_ranger_diff_truncated(inputs)
	if (locale === "it") return it_ranger_diff_truncated(inputs)
	if (locale === "nl") return nl_ranger_diff_truncated(inputs)
	if (locale === "pl") return pl_ranger_diff_truncated(inputs)
	if (locale === "pt") return pt_ranger_diff_truncated(inputs)
	if (locale === "ru") return ru_ranger_diff_truncated(inputs)
	if (locale === "sv") return sv_ranger_diff_truncated(inputs)
	if (locale === "tr") return tr_ranger_diff_truncated(inputs)
	if (locale === "zh") return zh_ranger_diff_truncated(inputs)
	if (locale === "ja") return ja_ranger_diff_truncated(inputs)
	return en_ranger_diff_truncated(inputs)
});
