/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Rank_CastawayInputs */

const en_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Castaway`)
};

const es_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Náufrago`)
};

const de_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schiffbrüchiger`)
};

const fr_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naufragé`)
};

const it_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naufrago`)
};

const nl_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schipbreukeling`)
};

const pl_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozbitek`)
};

const pt_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Náufrago`)
};

const ru_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Потерпевший крушение`)
};

const sv_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skeppsbruten`)
};

const tr_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kazazede`)
};

const zh_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`遇难者`)
};

const ja_ui_domain_rank_castaway = /** @type {(inputs: Ui_Domain_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`漂流者`)
};

/**
* | output |
* | --- |
* | "Castaway" |
*
* @param {Ui_Domain_Rank_CastawayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_rank_castaway = /** @type {((inputs?: Ui_Domain_Rank_CastawayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Rank_CastawayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_rank_castaway(inputs)
	if (locale === "de") return de_ui_domain_rank_castaway(inputs)
	if (locale === "fr") return fr_ui_domain_rank_castaway(inputs)
	if (locale === "it") return it_ui_domain_rank_castaway(inputs)
	if (locale === "nl") return nl_ui_domain_rank_castaway(inputs)
	if (locale === "pl") return pl_ui_domain_rank_castaway(inputs)
	if (locale === "pt") return pt_ui_domain_rank_castaway(inputs)
	if (locale === "ru") return ru_ui_domain_rank_castaway(inputs)
	if (locale === "sv") return sv_ui_domain_rank_castaway(inputs)
	if (locale === "tr") return tr_ui_domain_rank_castaway(inputs)
	if (locale === "zh") return zh_ui_domain_rank_castaway(inputs)
	if (locale === "ja") return ja_ui_domain_rank_castaway(inputs)
	return en_ui_domain_rank_castaway(inputs)
});
