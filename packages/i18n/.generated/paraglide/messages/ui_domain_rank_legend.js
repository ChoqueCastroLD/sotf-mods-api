/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Rank_LegendInputs */

const en_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legend`)
};

const es_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leyenda`)
};

const de_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legende`)
};

const fr_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Légende`)
};

const it_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggenda`)
};

const nl_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legende`)
};

const pl_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legenda`)
};

const pt_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lenda`)
};

const ru_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Легенда`)
};

const sv_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legend`)
};

const tr_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Efsane`)
};

const zh_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`传奇`)
};

const ja_ui_domain_rank_legend = /** @type {(inputs: Ui_Domain_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レジェンド`)
};

/**
* | output |
* | --- |
* | "Legend" |
*
* @param {Ui_Domain_Rank_LegendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_rank_legend = /** @type {((inputs?: Ui_Domain_Rank_LegendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Rank_LegendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_rank_legend(inputs)
	if (locale === "de") return de_ui_domain_rank_legend(inputs)
	if (locale === "fr") return fr_ui_domain_rank_legend(inputs)
	if (locale === "it") return it_ui_domain_rank_legend(inputs)
	if (locale === "nl") return nl_ui_domain_rank_legend(inputs)
	if (locale === "pl") return pl_ui_domain_rank_legend(inputs)
	if (locale === "pt") return pt_ui_domain_rank_legend(inputs)
	if (locale === "ru") return ru_ui_domain_rank_legend(inputs)
	if (locale === "sv") return sv_ui_domain_rank_legend(inputs)
	if (locale === "tr") return tr_ui_domain_rank_legend(inputs)
	if (locale === "zh") return zh_ui_domain_rank_legend(inputs)
	if (locale === "ja") return ja_ui_domain_rank_legend(inputs)
	return en_ui_domain_rank_legend(inputs)
});
