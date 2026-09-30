/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Checks_NoneInputs */

const en_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No file inspection for this item.`)
};

const es_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este elemento no tiene inspección de archivos.`)
};

const de_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Dateiprüfung für diesen Eintrag.`)
};

const fr_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas d’inspection de fichiers pour cet élément.`)
};

const it_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna ispezione dei file per questo elemento.`)
};

const nl_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen bestandsinspectie voor dit item.`)
};

const pl_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak inspekcji plików dla tego elementu.`)
};

const pt_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem inspeção de arquivos para este item.`)
};

const ru_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для этого элемента нет проверки файлов.`)
};

const sv_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen filinspektion för det här objektet.`)
};

const tr_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu öğe için dosya incelemesi yok.`)
};

const zh_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此项目没有文件检查。`)
};

const ja_ranger_checks_none = /** @type {(inputs: Ranger_Checks_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この項目にはファイル検査がありません。`)
};

/**
* | output |
* | --- |
* | "No file inspection for this item." |
*
* @param {Ranger_Checks_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_checks_none = /** @type {((inputs?: Ranger_Checks_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_checks_none(inputs)
	if (locale === "de") return de_ranger_checks_none(inputs)
	if (locale === "fr") return fr_ranger_checks_none(inputs)
	if (locale === "it") return it_ranger_checks_none(inputs)
	if (locale === "nl") return nl_ranger_checks_none(inputs)
	if (locale === "pl") return pl_ranger_checks_none(inputs)
	if (locale === "pt") return pt_ranger_checks_none(inputs)
	if (locale === "ru") return ru_ranger_checks_none(inputs)
	if (locale === "sv") return sv_ranger_checks_none(inputs)
	if (locale === "tr") return tr_ranger_checks_none(inputs)
	if (locale === "zh") return zh_ranger_checks_none(inputs)
	if (locale === "ja") return ja_ranger_checks_none(inputs)
	return en_ranger_checks_none(inputs)
});
