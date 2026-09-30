/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Scan_CleanInputs */

const en_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No threats found`)
};

const es_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se encontraron amenazas`)
};

const de_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Bedrohungen gefunden`)
};

const fr_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune menace détectée`)
};

const it_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna minaccia trovata`)
};

const nl_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen bedreigingen gevonden`)
};

const pl_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleziono zagrożeń`)
};

const pt_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma ameaça encontrada`)
};

const ru_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Угроз не найдено`)
};

const sv_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga hot hittades`)
};

const tr_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tehdit bulunamadı`)
};

const zh_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未发现威胁`)
};

const ja_mod_scan_clean = /** @type {(inputs: Mod_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`脅威は見つかりませんでした`)
};

/**
* | output |
* | --- |
* | "No threats found" |
*
* @param {Mod_Scan_CleanInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_scan_clean = /** @type {((inputs?: Mod_Scan_CleanInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Scan_CleanInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_scan_clean(inputs)
	if (locale === "de") return de_mod_scan_clean(inputs)
	if (locale === "fr") return fr_mod_scan_clean(inputs)
	if (locale === "it") return it_mod_scan_clean(inputs)
	if (locale === "nl") return nl_mod_scan_clean(inputs)
	if (locale === "pl") return pl_mod_scan_clean(inputs)
	if (locale === "pt") return pt_mod_scan_clean(inputs)
	if (locale === "ru") return ru_mod_scan_clean(inputs)
	if (locale === "sv") return sv_mod_scan_clean(inputs)
	if (locale === "tr") return tr_mod_scan_clean(inputs)
	if (locale === "zh") return zh_mod_scan_clean(inputs)
	if (locale === "ja") return ja_mod_scan_clean(inputs)
	return en_mod_scan_clean(inputs)
});
