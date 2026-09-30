/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Rank_PathfinderInputs */

const en_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pathfinder`)
};

const es_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pionero`)
};

const de_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pfadfinder`)
};

const fr_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Éclaireur`)
};

const it_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pioniere`)
};

const nl_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Padvinder`)
};

const pl_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tropiciel`)
};

const pt_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desbravador`)
};

const ru_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следопыт`)
};

const sv_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stigfinnare`)
};

const tr_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İzci`)
};

const zh_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开拓者`)
};

const ja_ui_domain_rank_pathfinder = /** @type {(inputs: Ui_Domain_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開拓者`)
};

/**
* | output |
* | --- |
* | "Pathfinder" |
*
* @param {Ui_Domain_Rank_PathfinderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_rank_pathfinder = /** @type {((inputs?: Ui_Domain_Rank_PathfinderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Rank_PathfinderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_rank_pathfinder(inputs)
	if (locale === "de") return de_ui_domain_rank_pathfinder(inputs)
	if (locale === "fr") return fr_ui_domain_rank_pathfinder(inputs)
	if (locale === "it") return it_ui_domain_rank_pathfinder(inputs)
	if (locale === "nl") return nl_ui_domain_rank_pathfinder(inputs)
	if (locale === "pl") return pl_ui_domain_rank_pathfinder(inputs)
	if (locale === "pt") return pt_ui_domain_rank_pathfinder(inputs)
	if (locale === "ru") return ru_ui_domain_rank_pathfinder(inputs)
	if (locale === "sv") return sv_ui_domain_rank_pathfinder(inputs)
	if (locale === "tr") return tr_ui_domain_rank_pathfinder(inputs)
	if (locale === "zh") return zh_ui_domain_rank_pathfinder(inputs)
	if (locale === "ja") return ja_ui_domain_rank_pathfinder(inputs)
	return en_ui_domain_rank_pathfinder(inputs)
});
