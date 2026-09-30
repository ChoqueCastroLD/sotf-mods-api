/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Well_DocumentedInputs */

const en_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Well Documented`)
};

const es_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bien documentado`)
};

const de_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gut dokumentiert`)
};

const fr_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bien documenté`)
};

const it_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ben documentata`)
};

const nl_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Goed gedocumenteerd`)
};

const pl_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dobrze udokumentowany`)
};

const pt_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bem documentado`)
};

const ru_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Хорошо задокументирован`)
};

const sv_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väldokumenterad`)
};

const tr_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İyi Belgelenmiş`)
};

const zh_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文档完善`)
};

const ja_signals_badge_name_well_documented = /** @type {(inputs: Signals_Badge_Name_Well_DocumentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ドキュメント充実`)
};

/**
* | output |
* | --- |
* | "Well Documented" |
*
* @param {Signals_Badge_Name_Well_DocumentedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_well_documented = /** @type {((inputs?: Signals_Badge_Name_Well_DocumentedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Well_DocumentedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_well_documented(inputs)
	if (locale === "de") return de_signals_badge_name_well_documented(inputs)
	if (locale === "fr") return fr_signals_badge_name_well_documented(inputs)
	if (locale === "it") return it_signals_badge_name_well_documented(inputs)
	if (locale === "nl") return nl_signals_badge_name_well_documented(inputs)
	if (locale === "pl") return pl_signals_badge_name_well_documented(inputs)
	if (locale === "pt") return pt_signals_badge_name_well_documented(inputs)
	if (locale === "ru") return ru_signals_badge_name_well_documented(inputs)
	if (locale === "sv") return sv_signals_badge_name_well_documented(inputs)
	if (locale === "tr") return tr_signals_badge_name_well_documented(inputs)
	if (locale === "zh") return zh_signals_badge_name_well_documented(inputs)
	if (locale === "ja") return ja_signals_badge_name_well_documented(inputs)
	return en_signals_badge_name_well_documented(inputs)
});
