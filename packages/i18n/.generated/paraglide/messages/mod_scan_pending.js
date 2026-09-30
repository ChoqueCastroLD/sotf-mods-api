/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Scan_PendingInputs */

const en_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan in progress`)
};

const es_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Análisis en curso`)
};

const de_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan läuft`)
};

const fr_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analyse en cours`)
};

const it_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scansione in corso`)
};

const nl_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan bezig`)
};

const pl_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trwa skanowanie`)
};

const pt_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificação em andamento`)
};

const ru_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Идёт проверка`)
};

const sv_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skanning pågår`)
};

const tr_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tarama sürüyor`)
};

const zh_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在扫描`)
};

const ja_mod_scan_pending = /** @type {(inputs: Mod_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スキャン中`)
};

/**
* | output |
* | --- |
* | "Scan in progress" |
*
* @param {Mod_Scan_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_scan_pending = /** @type {((inputs?: Mod_Scan_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Scan_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_scan_pending(inputs)
	if (locale === "de") return de_mod_scan_pending(inputs)
	if (locale === "fr") return fr_mod_scan_pending(inputs)
	if (locale === "it") return it_mod_scan_pending(inputs)
	if (locale === "nl") return nl_mod_scan_pending(inputs)
	if (locale === "pl") return pl_mod_scan_pending(inputs)
	if (locale === "pt") return pt_mod_scan_pending(inputs)
	if (locale === "ru") return ru_mod_scan_pending(inputs)
	if (locale === "sv") return sv_mod_scan_pending(inputs)
	if (locale === "tr") return tr_mod_scan_pending(inputs)
	if (locale === "zh") return zh_mod_scan_pending(inputs)
	if (locale === "ja") return ja_mod_scan_pending(inputs)
	return en_mod_scan_pending(inputs)
});
