/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Diff_IdenticalInputs */

const en_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Same files as the previous version.`)
};

const es_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mismos archivos que la versión anterior.`)
};

const de_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieselben Dateien wie in der vorherigen Version.`)
};

const fr_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mêmes fichiers que la version précédente.`)
};

const it_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stessi file della versione precedente.`)
};

const nl_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dezelfde bestanden als de vorige versie.`)
};

const pl_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te same pliki co w poprzedniej wersji.`)
};

const pt_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os mesmos arquivos da versão anterior.`)
};

const ru_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Те же файлы, что и в предыдущей версии.`)
};

const sv_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samma filer som i förra versionen.`)
};

const tr_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önceki sürümle aynı dosyalar.`)
};

const zh_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`与上一版本文件相同。`)
};

const ja_ranger_diff_identical = /** @type {(inputs: Ranger_Diff_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前のバージョンと同じファイルです。`)
};

/**
* | output |
* | --- |
* | "Same files as the previous version." |
*
* @param {Ranger_Diff_IdenticalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_diff_identical = /** @type {((inputs?: Ranger_Diff_IdenticalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Diff_IdenticalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_diff_identical(inputs)
	if (locale === "de") return de_ranger_diff_identical(inputs)
	if (locale === "fr") return fr_ranger_diff_identical(inputs)
	if (locale === "it") return it_ranger_diff_identical(inputs)
	if (locale === "nl") return nl_ranger_diff_identical(inputs)
	if (locale === "pl") return pl_ranger_diff_identical(inputs)
	if (locale === "pt") return pt_ranger_diff_identical(inputs)
	if (locale === "ru") return ru_ranger_diff_identical(inputs)
	if (locale === "sv") return sv_ranger_diff_identical(inputs)
	if (locale === "tr") return tr_ranger_diff_identical(inputs)
	if (locale === "zh") return zh_ranger_diff_identical(inputs)
	if (locale === "ja") return ja_ranger_diff_identical(inputs)
	return en_ranger_diff_identical(inputs)
});
