/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ positives: NonNullable<unknown>, total: NonNullable<unknown>, engine: NonNullable<unknown> }} Mod_Scan_EnginesInputs */

const en_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("en", i?.positives, {});
	const total__number = registry.number("en", i?.total, {});return /** @type {LocalizedString} */ (`${positives__number} of ${total__number} ${i?.engine} engines flagged the file.`)
};

const es_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("es", i?.positives, {});
	const total__number = registry.number("es", i?.total, {});return /** @type {LocalizedString} */ (`${positives__number} de ${total__number} motores de ${i?.engine} marcaron el archivo.`)
};

const de_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("de", i?.positives, {});
	const total__number = registry.number("de", i?.total, {});return /** @type {LocalizedString} */ (`${positives__number} von ${total__number} ${i?.engine}-Engines haben die Datei markiert.`)
};

const fr_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("fr", i?.positives, {});
	const total__number = registry.number("fr", i?.total, {});return /** @type {LocalizedString} */ (`${positives__number} moteurs ${i?.engine} sur ${total__number} ont signalé le fichier.`)
};

const it_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("it", i?.positives, {});
	const total__number = registry.number("it", i?.total, {});return /** @type {LocalizedString} */ (`${positives__number} motori ${i?.engine} su ${total__number} hanno segnalato il file.`)
};

const nl_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("nl", i?.positives, {});
	const total__number = registry.number("nl", i?.total, {});return /** @type {LocalizedString} */ (`${positives__number} van de ${total__number} ${i?.engine}-engines markeerden het bestand.`)
};

const pl_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("pl", i?.positives, {});
	const total__number = registry.number("pl", i?.total, {});return /** @type {LocalizedString} */ (`Plik oznaczyło ${positives__number} z ${total__number} silników ${i?.engine}.`)
};

const pt_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("pt", i?.positives, {});
	const total__number = registry.number("pt", i?.total, {});return /** @type {LocalizedString} */ (`${positives__number} de ${total__number} antivírus do ${i?.engine} marcaram o arquivo.`)
};

const ru_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("ru", i?.positives, {});
	const total__number = registry.number("ru", i?.total, {});return /** @type {LocalizedString} */ (`Файл отметили ${positives__number} из ${total__number} антивирусов ${i?.engine}.`)
};

const sv_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("sv", i?.positives, {});
	const total__number = registry.number("sv", i?.total, {});return /** @type {LocalizedString} */ (`${positives__number} av ${total__number} ${i?.engine}-motorer flaggade filen.`)
};

const tr_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("tr", i?.positives, {});
	const total__number = registry.number("tr", i?.total, {});return /** @type {LocalizedString} */ (`${total__number} ${i?.engine} motorundan ${positives__number} tanesi dosyayı işaretledi.`)
};

const zh_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("zh", i?.positives, {});
	const total__number = registry.number("zh", i?.total, {});return /** @type {LocalizedString} */ (`${total__number} 个 ${i?.engine} 引擎中有 ${positives__number} 个标记了此文件。`)
};

const ja_mod_scan_engines = /** @type {(inputs: Mod_Scan_EnginesInputs) => LocalizedString} */ (i) => {
	const positives__number = registry.number("ja", i?.positives, {});
	const total__number = registry.number("ja", i?.total, {});return /** @type {LocalizedString} */ (`${i?.engine} の ${total__number} エンジン中 ${positives__number} 個がファイルを検出しました。`)
};

/**
* | output |
* | --- |
* | "{positives__number} of {total__number} {engine} engines flagged the file." |
*
* @param {Mod_Scan_EnginesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_scan_engines = /** @type {((inputs: Mod_Scan_EnginesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Scan_EnginesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_scan_engines(inputs)
	if (locale === "de") return de_mod_scan_engines(inputs)
	if (locale === "fr") return fr_mod_scan_engines(inputs)
	if (locale === "it") return it_mod_scan_engines(inputs)
	if (locale === "nl") return nl_mod_scan_engines(inputs)
	if (locale === "pl") return pl_mod_scan_engines(inputs)
	if (locale === "pt") return pt_mod_scan_engines(inputs)
	if (locale === "ru") return ru_mod_scan_engines(inputs)
	if (locale === "sv") return sv_mod_scan_engines(inputs)
	if (locale === "tr") return tr_mod_scan_engines(inputs)
	if (locale === "zh") return zh_mod_scan_engines(inputs)
	if (locale === "ja") return ja_mod_scan_engines(inputs)
	return en_mod_scan_engines(inputs)
});
